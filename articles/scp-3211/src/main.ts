import { compress } from "compress-tag"
import ejs from "ejs"
import fs from "fs"
import marked from "marked"

import { anomalyNames } from "@/config"

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
  base: boolean
  prose: AnomalyProse

  constructor (base: boolean, prose: AnomalyProse) {
    this.base = base
    this.prose = prose
  }
}

export default async function generateOutput (lang: string): Promise<void> {
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
  )).filter((result, index) => {
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
      console.log(result.reason)
      console.warn(compress`
        Couldn't find anomaly '${anomalyNames[index]}' for lang '${lang}'.
        Build will continue without this anomaly.
      `)
      return false
    }
    return true
  }).map(anomaly => {
    return marked(
      ejs.render(
        fs.readFileSync(`${lang}/document.ejs.md`, "utf8"),
        anomaly
      )
    ).replace(
      // Swap out double dashes for em dashes
      /--/g, "—"
    )
  })
}
