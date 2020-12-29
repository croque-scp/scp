import { Anomaly } from "../../anomaly"

export const matches = new Anomaly(false, {
  imageUrl: "match.jpg",
  imageCaption: "SCP-3211 photographed in containment.",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211 is a Swedish Match Co.-branded matchbox of normal dimensions and
    mass. Opening the matchbox reveals that it contains an apparently ordinary
    number of matches. The striking surface, present on the side of the box's
    outer cover, is heavily-used and completely worn through in places.

    SCP-3211 has no anomalous effect until a subject opens the box and
    withdraws a match, at which point they will be compelled to light it.
    However, no single match from SCP-3211 has yet lit. The subject will
    continue to attempt to light the match, taking another match if their
    current one breaks, and will continue indefinitely if not interrupted.
    Lighting a match from any other matchbox is sufficient to end the effect.

    The number of matches contained within SCP-3211 does not deplete.
  `,
  informalDescription: "a box of matches",
  formalDescription: "a box of matches",
  writtenObservation: "Literally just a matchbox",
  data: {
    spectrophotometry: "SCP-3211 displayed absorbances as expected",
    mass: "39 g",
    hume: "SCP-3211 has a Hume reading consistent with baseline reality",
    magnetism: "SCP-3211 is not magnetic",
    visual: "Confirmed that SCP-3211 resembles a box of matches",
    physical: "D-9981 opened the box and began attempting to light a match",
    questioning: "No response",
    sentience: "No response (negative response expected)",
  },
  funFact: "it's got that pointless compulsion effect associated with it"
})
