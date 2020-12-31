import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "toaster.jpg",
  imageCaption: "SCP-3211 photographed in containment.",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211 is a toaster of unknown make and model. The cable, through
    present, does not end in a plug. Viewers attempting to follow the length of
    the cable visually will end up back at the toaster, and observers trying to
    follow the cable physically will find some reason to avoid doing so,
    typically insisting that visual observation is 'good enough'. Regardless,
    the toaster is unpowered.

    SCP-3211 contains a single piece of cold toast in its left hole, which
    reappears when removed. The toast is inedible and has been found to be made
    of a mixture of steel and plastic. Inserting the toast into the right hole
    of the toaster causes it to disappear. The removed toast also disappears
    when no longer being observed.
  `,
  informalDescription: "a toaster",
  formalDescription: "a toaster",
  writtenObservation: "It's a toaster... something is well fucky with the wire",
  data: {
    spectrophotometry: "SCP-3211 displayed absorbances as expected",
    mass: "3.4 kg",
    hume: "SCP-3211 has a Hume reading consistent with baseline reality",
    magnetism: "SCP-3211 is magnetic in places",
    visual: "Confirmed that SCP-3211 resembles a toaster",
    physical: `
      D-9981 easily lifted SCP-3211; removed toast; was unable to follow cable
    `,
    questioning: "No response",
    sentience: "Negative response"
  },
  funFact: "it's got magic toast and that fucky cable"
})
