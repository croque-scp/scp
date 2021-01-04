import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "chocolate.webp",
  imageCaption: "SCP-3211 photographed in containment.",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211 is an unbranded pink box of chocolates. Of the 15 spaces in the
    box, 8 chocolates remain. Upon opening the box, it will contain whichever
    chocolate — from the chocolates that are usually present in selection boxes
    of this type -- is the subject's least favourite. Different subjects will
    percieve each chocolate as being their least favourite, even if those are
    different between subjects observing it simultaneously. The chocolates
    can be consumed without incident, although this is discouraged as they are
    finite.

    If the subject does not like any chocolate, SCP-3211 appears to default to
    Turkish Delight.
  `,
  informalDescription: "a box of chocolates",
  formalDescription: `
    a box of chocolates (although they disagree on what the specific chocolates
    are)
  `,
  examineAction: "D-68134 crudely splits a chocolate and consumes one half.",
  examineConfirmationAction: `
    D-8834 is instructed to consume the remaining half of the chocolate. She
    complies, and reports that it is Turkish Delight, in contrary to Document
    3211-01.
  `,
  writtenObservation: `
    It's a box of chocolates. The one they let me have is full of that icky
    strawberry stuff. I will never understand why people like that. Even for
    chocolate it's just too sweet.
  `,
  data: {
    spectrophotometry: "SCP-3211 displayed absorbances as expected",
    mass: "90 g",
    hume: "SCP-3211 has a Hume reading consistent with baseline reality",
    magnetism: "SCP-3211 is not magnetic",
    visual: "Confirmed that SCP-3211 resembles a box of chocolates",
    physical: `
      D-9981 reported that the chocolates are look like chocolates but did not
      attempt to try one
    `,
    questioning: "No response",
    sentience: "Negative response"
  },
  funFact: `
    the chocolates change based on who's looking at them. I don't need to taste
    them to see what they are for me. White chocolate with a little puft of
    cocoa -- that shit is coffee cream. I hate coffee cream. And you know,
    it's funny, because I like white chocolate and I like coffee. Only black
    coffee, though, so maybe that's the issue. I wish it was Turkish delight.
    But that's beside the point
  `
})
