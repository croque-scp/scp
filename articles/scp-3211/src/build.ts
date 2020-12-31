import chalk from "chalk"
import { compress } from "compress-tag"
import ejs from "ejs"
import { diff, patch } from "jsondiffpatch"
import fs from "fs"
import marked from "marked"
import util from "util"

import { Anomaly, referenceAnomaly } from "./anomaly"
import { anomalyNames, langs } from "./config"

export async function buildAll (): Promise<void> {
  /**
   * Iterates through each configured language and builds SCP-3211.
   */
  for (const lang in langs) {
    await generateOutput(<keyof typeof langs>lang)
  }
}

function rot13 (string: string) {
  /**
   * Encrypts or decrypts a ROT13 string. Only affects A-z characters.
   *
   * @param string: The string to be encrypted or decrypted.
   */
  return string.replace(/[A-z]/g, (char) => {
    let charCode = char.charCodeAt(0)
    return String.fromCharCode(
      (char <= "Z" ? 90 : 122) >= (charCode = charCode + 13) ?  charCode : charCode - 26
    );
  });
};

export async function generateOutput (
  lang: keyof typeof langs
): Promise<void> {
  /**
   * Constructs the source file for SCP-3211 for the given language.
   *
   * @param lang: The language, e.g. "en". The relevant files for this language
   * must be present.
   */
  console.log(chalk.green("·".repeat(process.stdout.columns)))
  console.log("\nCompiling SCP-3211 for lang", chalk.greenBright(lang))

  // Construct the reference document which will be used for space
  // optimisations later
  const document = fs.readFileSync(`./src/${lang}/document.ejs.md`, "utf8")
  const reference = (langs[lang].rot13 ? rot13 : (source: string) => source)(
    compress(marked(
      ejs.render(document, { anomaly: referenceAnomaly })
    ))
  )
  console.log("Reference length:", reference.length)

  console.log("\nGenerating sources...")
  const sources = (await Promise.allSettled(
    anomalyNames.map(async (anomaly): Promise<Anomaly> => {
      // Import each anomaly for the current language
      return (await import(`./${lang}/anomalies/${anomaly}`))[anomaly]
    })
  )).reduce((anomalies: Anomaly[], result, index) => {
    // A translation doesn't have to have all the anomalies. Discard any
    // imports that failed (with a warning), and then continue
    if (result.status === "rejected") {
      // The base anomaly is required - if it's missing, stop!
      if (index === 0) {
        throw new Error(compress`
          Couldn't find anomaly 'base' for lang '${lang}', which is required.
          Stopping build.
        `)
      }
      console.warn(compress`
        Couldn't find anomaly '${anomalyNames[index]}' for lang '${lang}'.
        Build will continue without this anomaly.
      `)
    } else {
      anomalies.push(result.value)
    }
    return anomalies
  }, []).map(anomaly => {
    return compress(marked(
      ejs.render(document, { anomaly })
    )).replace(
      // Swap out double dashes for em dashes
      /--/g, "—"
    )
  }).map(
    // Encrypt with ROT13 if the language wants it, otherwise, don't
    langs[lang].rot13 ? rot13 : source => source
  )

  const totalSourceLength = sources.reduce(
    (length, source) => length + source.length, 0
  )
  console.log(
    "Source lengths:",
    totalSourceLength,
    "= Σ",
    util.inspect(
      sources.map(source => source.length),
      { colors: true, compact: true }
    )
  )
  console.log("Total source length:", totalSourceLength)

  // A lot of space can be saved by storing not the raw text of each source,
  // but the diff between it and the reference document
  console.log("\nOptimising...")
  const deltas = sources.map(source => diff(reference, source)!)

  const totalDeltaLength = deltas.reduce(
    (length, delta) => length + delta[0].length, 0
  )
  console.log(
    "Delta lengths:",
    totalDeltaLength,
    "= Σ",
    util.inspect(
      deltas.map(delta => delta[0].length),
      { colors: true, compact: true }
    )
  )
  console.log(
    "Reduction:",
    totalSourceLength - totalDeltaLength,
    `(${(
      ((totalDeltaLength - totalSourceLength) / totalSourceLength) * -100
    ).toFixed(2)}%)`
  )

}
