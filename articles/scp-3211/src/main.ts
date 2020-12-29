import { compress } from "compress-tag"
import ejs from "ejs"
import fs from "fs"
import marked from "marked"

import { anomalyNames, langs } from "./config"

type AnomalyProse = {
  imageUrl: string
  imageCaption: string
  objectClass: string
  physicalDescription: string
  informalDescription: string
  formalDescription: string
  examineAction?: string
  examineConfirmationAction?: string
  writtenObservation: string
  data: {
    spectrophotometry: string
    mass: string
    hume: string
    magnetism: string
    visual: string
    physical: string
    questioning: string
    sentience: string
  }
  objectPronoun?: string
  possessivePronoun?: string
  funFact: string
  alternateEnding?: string
  conclusion?: string
  madeASound?: string
}

export class Anomaly {
  /**
   * Class for type-checking anomaly configuration.
   */
  base: boolean
  prose: AnomalyProse

  constructor (base: boolean, prose: AnomalyProse) {
    this.base = base
    this.prose = prose
  }
}

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
  const sources = (await Promise.allSettled(
    anomalyNames.map(async (anomaly): Promise<Anomaly> => {
      // Import each anomaly for the current language
      return (await import(`./${lang}/anomalies/${anomaly}`))[anomaly]
    })
  )).reduce((results: Anomaly[], result, index) => {
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
      results.push(result.value)
    }
    return results
  }, []).map(anomaly => {
    return compress(
      marked(
        ejs.render(
          fs.readFileSync(`./src/${lang}/document.ejs.md`, "utf8"),
          { anomaly }
        )
      )
    ).replace(
      // Swap out double dashes for em dashes
      /--/g, "—"
    )
  }).map(
    // Encrypt with ROT13 if the language wants it, otherwise, don't
    langs[lang].rot13 ? rot13 : source => source
  )

  console.log(sources[0])
}
