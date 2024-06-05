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

/**
 * Class for type-checking anomaly configuration.
 */
export class Anomaly {
  base: boolean
  prose: AnomalyProse

  constructor (base: boolean, prose: AnomalyProse) {
    this.base = base
    this.prose = prose
  }
}

export const referenceAnomaly = new Anomaly(false, {
  imageUrl: "",
  imageCaption: "",
  objectClass: "",
  physicalDescription: "",
  informalDescription: "",
  formalDescription: "",
  writtenObservation: "",
  data: {
    spectrophotometry: "",
    mass: "",
    hume: "",
    magnetism: "",
    visual: "",
    physical: "",
    questioning: "",
    sentience: ""
  },
  funFact: ""
})
