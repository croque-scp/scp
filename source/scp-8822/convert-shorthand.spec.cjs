#!/usr/bin/env node

const { replaceShorthand } = require("./convert-shorthand.cjs");

function verify(it) {
  for (let [description, [source, expected]] of Object.entries(it)) {
    console.log(`\t - it ${description} `);
    source = source.replace(/\n +/g, "\n").trim();
    let result;
    try {
      result = replaceShorthand(source, "/scout.html");
    } catch (err) {
      if (expected === Error) {
        continue;
      }
      console.log(`Input: ${source}`);
      throw err;
    }
    expected = expected.replace(/\n +/g, "\n").trim();
    if (result === expected) {
      continue;
    }
    console.log(`Input: ${source}`);
    console.log(`Expected: ${expected}`);
    console.log(`Got:      ${result}`);
    throw new Error("Test failed");
  }
}

const it = {
  "doesn't convert stuff that's not shorthand": [`Normal text`, `Normal text`],
  "converts inline statements": [
    `{A10: A}{A11: B}{A12: C}`,
    `[[span class="ch_A"]][[span class="a_12"]]C[[/span]][[span class="a_11"]]B[[/span]][[span class="a_10"]]A[[/span]][[/span]]`,
  ],
  "assumes default channel if none is specified": [
    `{10: A}{11: B}`,
    `[[span class="ch_B"]][[span class="a_11"]]B[[/span]][[span class="a_10"]]A[[/span]][[/span]]`,
  ],
  "fails if assertions do not share a channel": [`{A10: A}{B11: B}`, Error],
  "fails if assertions share a stage": [`{10: A}{10: B}`, Error],
  "converts multiple separate inline statements": [
    `test {A}{11: B} test {C}{12: D} test`,
    `test [[span class="ch_B"]][[span class="a_11"]]B[[/span]][[span class="a_10"]]A[[/span]][[/span]] test [[span class="ch_B"]][[span class="a_12"]]D[[/span]][[span class="a_10"]]C[[/span]][[/span]] test`,
  ],
  "can create an empty assertion": [
    `{test7}{28:}`,
    `[[span class="ch_B"]][[span class="a_28 empty"]]_[[/span]][[span class="a_10"]]test7[[/span]][[/span]]`,
  ],
  "doesn't fuck up syntax inside/outside block statements": [
    `[[span]]test[[/span]]

    [[div class="ch_B"]]
    [[div class="a_11"]]
    B

    [[div class="test"]]
    [[/div]]
    [[/div]]
    [[div class="a_10"]]
    A
    [[/div]]
    [[/div]]

    [[span]]test[[/span]]`,
    `[[span]]test[[/span]]

    [[div class="ch_B"]]
    [[div class="a_11"]]
    B

    [[div class="test"]]
    [[/div]]
    [[/div]]
    [[div class="a_10"]]
    A
    [[/div]]
    [[/div]]

    [[span]]test[[/span]]`,
  ],
  "supports inline statements inside block statements": [
    `[[div class="ch_B"]]
    [[div class="a_25"]]
    test4 {test5}{11: test6}
    [[/div]]
    [[div class="a_20"]]
    test3
    [[/div]]
    [[div class="a_10"]]
    test2
    [[/div]]
    [[/div]]`,
    `[[div class="ch_B"]]
    [[div class="a_25"]]
    test4 [[span class="ch_B"]][[span class="a_11"]]test6[[/span]][[span class="a_10"]]test5[[/span]][[/span]]
    [[/div]]
    [[div class="a_20"]]
    test3
    [[/div]]
    [[div class="a_10"]]
    test2
    [[/div]]
    [[/div]]`,
  ],
  "lets you put separate inline statements near each other": [
    `{10:}{11:}{12:} {A10:}{A11:}`,
    `[[span class="ch_B"]][[span class="a_12 empty"]]_[[/span]][[span class="a_11 empty"]]_[[/span]][[span class="a_10 empty"]]_[[/span]][[/span]] [[span class="ch_A"]][[span class="a_11 empty"]]_[[/span]][[span class="a_10 empty"]]_[[/span]][[/span]]`,
  ],
  "converts contradictions right": [
    `{=10}
    {=11}
    {=12^}
    {=13
    {=14?15^,16}`,
    `[[embed]]
    <iframe src="/scout.html?contradiction=10" loading="lazy"></iframe>
    [[/embed]]
    [[embed]]
    <iframe src="/scout.html?contradiction=11" loading="lazy"></iframe>
    [[/embed]]
    [[embed]]
    <iframe src="/scout.html?contradiction=12^" loading="lazy"></iframe>
    [[/embed]]
    {=13
    [[embed]]
    <iframe src="/scout.html?contradiction=14?15^,16" loading="lazy"></iframe>
    [[/embed]]`,
  ],
};
verify(it);
