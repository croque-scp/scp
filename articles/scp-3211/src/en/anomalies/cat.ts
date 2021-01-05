import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "cat.jpg",
  imageCaption: "SCP-3211 photographed in containment.",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211 is a male Bengal cat that is estimated to be about
    3 years old. It appears with a color and metal tag around its neck.

    Unless being continually observed, the cat may teleport to another
    position within its containment chamber. The animal does not apparently
    notice the displacement, continuing whatever activity it was when observed.
  `,
  informalDescription: "a cat",
  formalDescription: "a domestic cat",
  writtenObservation: `
    It's a cat. Cute and fluffy, but it jumps around sometimes when I blink
    or look away. Kinda weird.
  `,
  data: {
    spectrophotometry: "SCP-3211 displayed absorbances as expected",
    mass: "4.7 kg",
    hume: "SCP-3211 has a Hume reading slightly higher with baseline reality",
    magnetism: "SCP-3211 is not magnetic",
    visual: "Confirmed that SCP-3211 resembles a domestic cat",
    physical: `
      D-9981 began petting the cat, which was initially receptive but then
      wandered away
    `,
    questioning: "Mostly unresponsive, with periodic meows",
    sentience: "Positive response"
  },
  funFact: "it sometimes teleports around"
})
