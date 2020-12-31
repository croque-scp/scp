import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "puce.jpg",
  imageCaption: "The colour 'puce'.",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211 is a small region of space that is strongly associated with the
    colour 'puce'. SCP-3211 can be picked up and moved around without
    difficulty, it can be measured and weighed, but subjects will invariably
    describe it as simply being 'the colour puce'. Visually, SCP-3211 is
    indistinct -- while experimenters have no problem locating it and
    interacting with it, they have difficulty defining edges to the object or
    expressing what it feels like. It is best summarised as the concept of a
    colour manifest approximately as an object.
  `,
  informalDescription: "the colour 'puce'",
  formalDescription: "the concept of the colour 'puce'",
  writtenObservation: `
    It's... the colour puce? I don't get it. That's the only thing I can see it
    as. But it's small, like... I don't know. Like it's restrained.
  `,
  data: {
    spectrophotometry: `
      SCP-3211 has a peak absorbance consistent with the colour 'puce'. Actual
      wavelength unknown.
    `,
    mass: "Between 0.51 kg and 3.90 kg, varies by experimenter",
    hume: "SCP-3211 has an abnormally high Hume reading",
    magnetism: "SCP-3211 is very slightly magnetic",
    visual: `SCP-3211 is "the colour puce"`,
    physical: `
      D-9981 knocked SCP-3211 onto the containment chamber floor and had
      difficulty putting it back onto the table
    `,
    questioning: "No response",
    sentience: "Negative response"
  },
  funFact: `
    it's some undefined, ordinary object which somehow has the colour puce
    bound to it and the region around it
  `
})
