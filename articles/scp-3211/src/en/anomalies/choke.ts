import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "imgmissing.webp",
  imageCaption: "There is no photographic evidence of SCP-3211.",
  objectClass: "Euclid",
  physicalDescription: `
    SCP-3211 is a region of space that varies in size, but at its largest is
    approximately two metres in height and fifty centimetres in width and
    depth. SCP-3211 is not visible to the naked eye, but observers identify
    without fail that there is something occupying the region. SCP-3211 moves
    around within the containment chamber of its own accord, but spends the
    majority of its time in one corner of the chamber. Visually, SCP-3211
    appears to be empty space.

    Anyone who touches SCP-3211 immediately suffers a complete loss of
    musclular function: all muscles in the body seize up, resulting in the
    subject being unable to move, usually resulting in either asphyxiation or
    cardiac arrest. However, serious symptoms often do not manifest as SCP-3211
    usually moves away from the observer as soon as it is touched. Repeated
    physical boundary interrogation by this method has been able to determine
    that SCP-3211 is humanoid.
  `,
  informalDescription: "almost nothing",
  formalDescription: "an empty but occupied region of space",
  writtenObservation: `
    There's nothing here but I'm going to pretend to write something so it
    looks like I'm doing something

    Uh oh hold up there is something here

    I can't see it
  `,
  data: {
    spectrophotometry: "SCP-3211 displayed no absorbances",
    mass: "91.4 kg",
    hume: `
      SCP-3211 has a Hume reading slightly lower than baseline reality,
      indicating some degree of reality bending
    `,
    magnetism: "SCP-3211 is not magnetic",
    visual: "Confirmed that SCP-3211 is effectively invisible",
    physical: `
      D-9981 was physically paralysed for approximately 10 seconds before
      SCP-3211 moved away
    `,
    questioning: "SCP-3211 moved around unpredictably",
    sentience: "Positive response"
  },
  funFact: "it makes people choke and have heart attacks when they touch it"
})
