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
  measuredProperties: AnomalyMeasuredProperties
  objectPronoun?: string
  possessivePronoun?: string
  funFact: string
  alternateEnding?: string
  conclusion?: string
  madeASound?: string
}

type AnomalyMeasuredProperties = {
  spectrophotometry: string
  mass: string
  hume: string
  magnetism: string
  visual: string
  physical: string
  questioning: string
  sentience: string
}

export class Anomaly {
  base: boolean
  prose: AnomalyProse

  constructor (base: boolean, prose: AnomalyProse) {
    this.base = base
    this.prose = prose
  }
}
