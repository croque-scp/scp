import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "deadpigeon.webp",
  imageCaption: "SCP-3211 photographed in containment.",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211 is the corpse of a _Columba livia domestica_ (common pigeon)
    in the early stages of decomposition. SCP-3211 is attached to the centre of
    a circular piece of concrete 1 m in diameter and 4 cm thick. SCP-3211 and
    the concrete cannot be separated, although the object as a whole can move
    freely.

    A notable property of SCP-3211 is that it has similar properties to
    concrete: it has a similar hardness, mass, and an apparent inability to
    decompose further. Despite this, SCP-3211 is visually identical to a
    pigeon.
  `,
  informalDescription: "a dead pigeon",
  formalDescription: "a pigeon corpse",
  writtenObservation: `
    There's a dead pigeon in the middle of the room. Damn, that sucks. I wonder
    how old it is. Why hasn't it decomposed?
  `,
  data: {
    spectrophotometry: "SCP-3211 displayed absorbances as expected",
    mass: "93.6 kg",
    hume: "SCP-3211 has a Hume reading consistent with baseline reality",
    magnetism: "SCP-3211 is not magnetic",
    visual: "Confirmed that SCP-3211 resembles a dead pigeon",
    physical: `
      D-9981 was unable to lift SCP-3211 but was able to tilt the concrete
      circle
    `,
    questioning: "No response",
    sentience: "Weak positive response (consistent with dead animal)"
  },
  funFact: `
    it's hard as rock and doesn't decompose any more than it already has
  `
})
