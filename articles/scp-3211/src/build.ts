import chalk from "chalk"
import { compress } from "compress-tag"
import { createPatch } from "diff"
import ejs from "ejs"
import fs from "fs"
import marked from "marked"
import util from "util"

import { Anomaly, referenceAnomaly } from "./anomaly"
import { anomalyNames, langs } from "./config"
import { rot13 } from "./rot13"


export async function makeFtml (lang: keyof typeof langs): Promise<void> {
  /**
   * Constructs the FTML content of the wiki page and saves it to
   * dist/lang/dist.ftml.
   */
  fs.writeFileSync(
    `./dist/${lang}/dist.ftml`,
    ejs.render(
      fs.readFileSync(`./src/${lang}/page.ejs.ftml`, "utf8"),
      { html: await makeIframe(lang) }
    )
  )
}

async function makeIframe (lang: keyof typeof langs): Promise<string> {
  /**
   * Constructs the HTML content of the iframe for the given language.
   */
  const [reference, deltas] = await generateDelta(lang)
  const html = ejs.render(
    fs.readFileSync("./src/iframe.ejs.html", "utf8"),
    {
      lang,
      reference: JSON.stringify(reference.split("\n")),
      deltas: JSON.stringify(deltas),
      css: fs.readFileSync("./dist/iframe.css", "utf8"),
      fileUrl: langs[lang].fileUrl,
      buttons: fs.readFileSync(`./src/${lang}/buttons.html`, "utf8"),
      warning: fs.readFileSync(`./src/${lang}/warning.html`, "utf8"),
      loading: fs.readFileSync(`./src/${lang}/loading.html`, "utf8")
    }
  )
  return html
}

async function generateDelta (
  lang: keyof typeof langs
): Promise<[string, { [anomaly: string]: string }]> {
  /**
   * Constructs the reference anomaly and the other anomaly deltas for the
   * given language.
   *
   * @param lang: The language, e.g. "en". The relevant files for this language
   * must be present.
   * @returns The reference anomaly, as a string.
   * @returns A dict containing the delta for each anomaly.
   */
  console.log(chalk.green("·".repeat(process.stdout.columns)))
  console.log("\nCompiling SCP-3211 for lang", chalk.greenBright(lang))

  // Construct the reference document which will be used for space
  // optimisations later
  const document = fs.readFileSync(`./src/${lang}/document.ejs.md`, "utf8")
  const reference = (langs[lang].rot13 ? rot13 : (source: string) => source)(
    marked(ejs.render(document, { anomaly: referenceAnomaly }))
  )
  console.log("Reference length:", reference.length)

  console.log("\nGenerating sources...")
  const sources = (await Promise.allSettled(
    anomalyNames.map(async anomaly => {
      // Import each anomaly for the current language
      return (<{ default: Anomaly }>(
        await import(`./${lang}/anomalies/${anomaly}`)
      )).default
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
    return marked(ejs.render(document, { anomaly }))
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

  // A lot of space can be saved by storing not the raw text of each source,
  // but the diff between it and the reference document
  console.log("\nOptimising...")
  const deltas = sources.map((source, index) => {
    return createPatch(
      anomalyNames[index], reference, source,
      undefined, undefined, { context: 0 }
    )
  })

  const totalDeltaLength = deltas.reduce(
    (length, delta) => length + JSON.stringify(delta).length, 0
  )
  console.log(
    "Delta lengths:",
    totalDeltaLength,
    "= Σ",
    util.inspect(
      deltas.map(delta => JSON.stringify(delta).length),
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

  // Return a dict of deltas for each anomaly
  const anomalies = anomalyNames.reduce((a, anomalyName, index) => {
    return { ...a, [anomalyName]: deltas[index] }
  }, <{ [anomaly in typeof anomalyNames[number]]: string }>{})
  return [reference, anomalies]
}