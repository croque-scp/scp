import { compress } from "compress-tag"

import { Anomaly } from "@/main"

export const cube = new Anomaly({
  objectClass: "Safe",
  imageUrl: "http://scpsandbox2.wdfiles.com/local--files/croquembouche/redcube.png",
  imageCaption: "Artist's render of SCP-3211.",
  physicalDescription: compress`
    SCP-3211 is a red cube, 12 cm to a side. Tests indicate that it weighs 1 kg
    and that both of these measurements are as precise as current technology
    permits. SCP-3211 appears to have perfectly smooth surfaces and
    theoretically reflects light perfectly. It appears to do so in photographs
    and recordings, but is clearly plain red when observed by the naked eye.
  `,
  shortDescription: "a red cube",
  observedDescription: "a red cube",
  writtenObservation: compress`
    There's a red cube in the middle of the room. It's 10cm, maybe 15cm big.
    It's really smooth, like, weirdly smooth. I feel like if I touch it my
    hand will slip right off.
  `,
  measuredProperties: {
    spectrophotometry: "Failed -- SCP-3211 reflected all light",
    mass: "1 kg to highest level of precision",
    hume: "Slightly higher than baseline reality",
    magnetism: "Not magnetic",
    visual: "Confirmed that SCP-3211 is a red cube",
    physical: `
      D-9981 was able to pick up SCP-3211, reported that it 'feels slippery'
    `,
    questioning: "No response",
    sentience: "Negative response",
  },
})
