import { rotate } from "../src/rotate"

describe("rotation encryptor", () => {
  it("reversibly rotates Latin text", () => {
    const rot = rotate("a", "z", 13)
    const strs = [
      "abcdefghijklmnopqrstuvwxyz",
      "Sphinx of black quartz, judge my vow."
    ]
    strs.forEach(str => expect(rot(rot(str))).toEqual(str))
  })
})
