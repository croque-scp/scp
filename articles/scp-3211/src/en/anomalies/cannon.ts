import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "imgmissing.png",
  imageCaption: "There is no photographic evidence of SCP-3211.",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211 does not exist. The room that either contains or contained
    SCP-3211 is empty.

    Upon entering the containment chamber, all observers will immediately be
    confident that the cell previously contained a demi-culverin military
    cannon, constructed of iron and oak in France in 1575, and used in the
    Battle of Fordsworth and spending its remaining days in the British Museum.
    Observers will consider this to be completely normal and return to their
    regular business, which may result in them walking into and out of the cell
    repeatedly (which is also considered normal). These actions, and the false
    memory, are only realised to be anomalous when the observer notices, or is
    informed, that a Battle of Fordsworth does not exist and that SCP-3211 is
    in Site-21 rather than the British Museum.
  `,
  informalDescription: "an empty room",
  formalDescription: "a room that may or may not have contained a cannon",
  writtenObservation: "There is no cannon",
  data: {
    spectrophotometry: "N/A",
    mass: "N/A",
    hume: "N/A",
    magnetism: "N/A",
    visual: "The containment chamber is empty",
    physical: "SCP-3211 does not exist",
    questioning: 'No response; D-9981 remarked "how rude", relevance uncertain',
    sentience: "Negative response"
  },
  funFact: "there was a cannon here -- or so it wants you to think"
})
