import { Anomaly } from "@/main"

export const glove = new Anomaly(false, {
  imageUrl: "gloves.png",
  imageCaption: "SCP-3211 photographed in containment.",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211 is a pair of heavy, leather, well-worn work gloves. Analysis
    reveals that they are covered in trace amounts of oil, lead and sulfur.

    Any object inserted by a subject into either glove will not actually enter
    the glove, but will appear in the subject's mouth. Objects inserted into
    either glove will appear appriximately halfway between the uvula and the
    back teeth. Loose objects will simply fall into the mouth, subject to
    gravity. Objects that are fixed to something else -- for example a long
    pole, or a hand attached to a wrist -- will extend out of the mouth if
    inserted into the right glove, or down into the throat if inserted into
    the left. They can be retracted without issue, assuming no damage was
    caused to the subject's mouth.
  `,
  informalDescription: "a pair of gloves",
  formalDescription: "a pair of gloves",
  writtenObservation: `
    It's an old pair of gloves. They look nasty. Not sure that well-used is the
    word for it. More like dropped in oil and then baked. Or shat on.
  `,
  data: {
    spectrophotometry: "SCP-3211 displayed absorbances as expected",
    mass: "0.6 kg each",
    hume: "SCP-3211 has a Hume reading consistent with baseline reality",
    magnetism: "SCP-3211 is not magnetic",
    visual: "Confirmed that SCP-3211 resembles a pair of gloves",
    physical: `
      D-9981 refused to wear either glove after feeling her own teeth inside
      the glove
    `,
    questioning: "No response",
    sentience: "Negative response",
  },
  funFact: "it makes your hand appear in your mouth. Your own fucking mouth"
})
