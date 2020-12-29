import { Anomaly } from "../../anomaly"

export const coin = new Anomaly(false, {
  imageUrl: "coin.jpg",
  imageCaption: "SCP-3211 photographed in containment.",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211 is a 2.7 cm coin remniscient of an Eagle, a US coin worth $10 at
    the time of minting. Analysis indicates that the coin is in fact fake:
    despite visually resembling gold, the coin is plastic, and was likely
    produced at some point between 2010 and 2013.

    Despite this, SCP-3211 induces a compulsive effect in those that observe it
    visually, causing them to believe that it is not only made of real gold but
    is also extraordinarily valuable. This often results in the affected
    observer making efforts to physically acquire the coin -- at which point the
    compulsive effects cease, the victim becomes aware that they are
    holding a mundane object, and they are overcome with a feeling of
    foolishness (though this is not considered part of the anomaly).
  `,
  informalDescription: "a coin",
  formalDescription: `
    either a gold coin or a fake coin, depending on whether or not they have
    touched it
  `,
  writtenObservation: "It's a golden coin. I want it",
  data: {
    spectrophotometry: "SCP-3211 displayed absorbances as expected",
    mass: "2.32 g",
    hume: "SCP-3211 has a Hume reading consistent with baseline reality",
    magnetism: "SCP-3211 is not magnetic",
    visual: "Confirmed that SCP-3211 resembles a gold coin",
    physical: "Confirmed that SCP-3211 is, in fact, a plastic coin",
    questioning: "No response",
    sentience: "Negative response",
  },
  funFact: `
    even though it's plastic, you think it's real gold until you touch it
  `,
})
