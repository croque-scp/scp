import { rotate } from "../src/rotate"

describe("rotation encryptor", () => {
  const strs = [
    "abcdefghijklmnopqrstuvwxyz",
    "Sphinx of black quartz, judge my vow."
  ]

  it("rotates text", () => {
    const rotUp = rotate("a", "z", 1)
    const rotDown = rotate("a", "z", -1)
    strs.forEach(str => expect(rotDown(rotUp(str))).toEqual(str))
  })

  it("can simulate ROT13", () => {
    const rot13 = rotate("a", "z", 13)
    strs.forEach(str => expect(rot13(rot13(str))).toEqual(str))
  })
})
