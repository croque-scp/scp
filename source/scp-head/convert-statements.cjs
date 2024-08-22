#!/usr/bin/env node

const inlineStatementPattern = /(?:\{.*?\})+/g;
const blockStatementPattern = /(?:\{\{\{[\s\S]*?\}\}\}\s*)+/g;
const defaultChannel = "B";

(async () => {
  let source = "";
  for await (const chunk of process.stdin) source += chunk;

  if (!source) {
    console.error("No input. Usage: cat sourcefile | ./convert-assertions.cjs");
    process.exit(1);
  }

  source = source
    .replace(blockStatementPattern, replaceBlockStatement)
    .replace(inlineStatementPattern, replaceInlineStatement);

  process.stdout.write(source);
})();

/**
 * Replaces inline statement shorthand with markup.
 *
 * @param {string} match - Matched inline statement
 * @returns {string} - Converted inline statement
 */
function replaceInlineStatement(match) {
  console.error("Replacing inline statement", match);
  const assertions = parseStatement(match.split(/{|}/));
  return [
    `[[span class="ch_${assertions[0].channel}"]]`,
    ...assertions
      .sort((a, b) => b.stage - a.stage)
      .map((assertion) => {
        if (assertion.text.trim().length === 0) {
          // Zero-content spans are invalid wikitext - add a space and hide it later with a class
          return `[[span class="a_${assertion.stage} empty"]] [[/span]]`;
        }

        return `[[span class="a_${assertion.stage}${
          assertion.classes ? ` ${assertion.classes.trim()}` : ""
        }"]]${assertion.text}[[/span]]`;
      }),
    "[[/span]]",
  ].join("");
}

/**
 * Replaces block statement shorthand with markup.
 *
 * @param {string} match - Matched block statement
 * @returns {string} - Converted block statement
 */
function replaceBlockStatement(match) {
  console.error("Replacing block statement");
  const assertions = parseStatement(match.split(/{{{|}}}/));
  return [
    `[[div class="ch_${assertions[0].channel}"]]`,
    ...assertions
      .sort((a, b) => b.stage - a.stage)
      .flatMap((assertion) => {
        return [
          `[[div class="a_${assertion.stage}${
            assertion.classes ? ` ${assertion.classes.trim()}` : ""
          }"]]`,
          assertion.text.trim(),
          "[[/div]]",
        ];
      }),
    "[[/div]]\n\n",
  ].join("\n");
}

/**
 * Parses a statement to an assertions list.
 *
 * @param {Array.<string>} phrases - Text source of each phrase of the statement
 * @returns {Array.<{ stage: number, text: string }>} - List of assertions
 */
function parseStatement(phrases) {
  let statementChannel = null;
  const assertions = phrases
    .filter((s) => /\S/.test(s))
    .map((assertion) => {
      console.error("Parsing assertion", JSON.stringify(assertion));
      const match = assertion.match(
        /(?:\s*([A-Z]?)([0-9]*)(?:( [ a-zA-Z0-9_-]+))?[:\n]\s*)?([\s\S]*?)$/
      );
      const channel = String(match[1] || defaultChannel);
      const stage = Number(match[2]) || 10;
      const classes = String(match[3] || "");
      const text = String(match[4] || "");

      if (statementChannel === null) statementChannel = channel;
      else if (statementChannel !== channel) {
        console.error({ match, statementChannel, channel, stage, text });
        throw new Error("Inconsistent channel in statement");
      }
      return { stage, classes, text, channel: statementChannel };
    });

  // Verify that all assertions have unique stages
  const stages = new Set();
  assertions.forEach((assertion) => {
    if (stages.has(assertion.stage)) {
      console.error({ assertion, assertions, phrases });
      throw new Error("Duplicate stage in statement");
    }
    stages.add(assertion.stage);
  });

  return assertions;
}
