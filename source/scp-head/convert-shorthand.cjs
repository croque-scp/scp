#!/usr/bin/env node

const patterns = {
  inlineStatement: /(?:\{.*?\})+/g,
  blockStatement: /(?:\{\{\{[\s\S]*?\}\}\}\n?)+/g,
  contradiction: /\{=[A-Z0-9?^,]+\}/g,
};
const defaultChannel = "B";

if (require.main === module) main();

async function main() {
  let source = "";
  for await (const chunk of process.stdin) source += chunk;

  if (!source || !process.env.SCOUTFILE) {
    if (!source) console.error("No input source");
    if (!process.env.SCOUTFILE) console.error("No scout file specified");
    console.error(
      "Usage: (export SCOUTFILE=/scout.html; cat sourcefile | ./convert-shorthand.cjs)"
    );
    process.exit(1);
  }

  source = replaceShorthand(source, process.env.SCOUTFILE);

  process.stdout.write(source);
}

module.exports = { replaceShorthand };

/**
 * Replaces shorthand syntax with wikitext.
 *
 * @param {string} source
 * @param {string} scoutFile - URL of the scout iframe
 * @returns {string}
 */
function replaceShorthand(source, scoutFile) {
  return source
    .replace(patterns.contradiction, (match) =>
      replaceContradiction(match, scoutFile)
    )
    .replace(patterns.blockStatement, replaceBlockStatement)
    .replace(patterns.inlineStatement, replaceInlineStatement)
    .trim();
}

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
          assertion.classes ? " " + assertion.classes.trim() : ""
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
            assertion.classes ? " " + assertion.classes.trim() : ""
          }"]]`,
          assertion.text.trim(),
          "[[/div]]",
        ];
      }),
    "[[/div]]\n",
  ].join("\n");
}

/**
 * Replaces contradiction shorthand with corresponding scout.
 *
 * @param {string} match
 * @param {string} scoutFile - URL of the scout iframe
 * @returns {string}
 */
function replaceContradiction(match, scoutFile) {
  console.error("Replacing contradiction", match);
  const conditionPattern = /[A-Z]?[0-9]+/;
  const singleContradictionPattern = new RegExp(
    conditionPattern.source + "(?:\\?" + conditionPattern.source + ")?\\^?"
  );
  const multiConditionPattern = new RegExp(
    singleContradictionPattern.source +
      "(?:," +
      singleContradictionPattern.source +
      ")*"
  );
  const contradictionShorthandPattern = new RegExp(
    "^\\{=" + multiConditionPattern.source + "\\}$"
  );
  if (!contradictionShorthandPattern.test(match)) {
    console.error({ match });
    throw new Error("Invalid contradiction");
  }
  const contradictions = match.slice(2, -1);
  return [
    "[[embed]]",
    `<iframe src="${scoutFile}?contradiction=${contradictions}" loading="lazy"></iframe>`,
    "[[/embed]]",
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
        /(?:\s*([A-Z]?)([0-9]*)(?:( [ a-zA-Z0-9_-]+))?:\n?\s*)?([\s\S]*?)$/
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
