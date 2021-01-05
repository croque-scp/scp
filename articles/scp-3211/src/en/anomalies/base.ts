import { Anomaly } from "../../anomaly"

export default new Anomaly(true, {
  imageUrl: "imgmissing.webp",
  imageCaption: "There is no photographic evidence of SCP-3211.",
  objectClass: "Safe",
  physicalDescription: "SCP-3211 is an unknown object, entity or concept.",
  informalDescription: "nothing",
  formalDescription: "nothing",
  writtenObservation: `
    The containment chamber is empty. There's nothing to describe. I don't
    understand why I have to write about an empty room.
  `,
  data: {
    spectrophotometry: `
      SCP-3211 displays absorbances and transmittances in the visible spectrum
      consistent with standard background reading
    `,
    mass: `
      Mass balance placed underneath the location of SCP-3211 did not detect
      any weight
    `,
    hume: "SCP-3211 has a Hume reading consistent with baseline reality",
    magnetism: "SCP-3211 is not magnetic",
    visual: "SCP-3211 is not visually present",
    physical: "No response; D-9981 felt nothing at SCP-3211's location",
    questioning: "No response",
    sentience: "Negative response"
  },
  funFact: ""
})
