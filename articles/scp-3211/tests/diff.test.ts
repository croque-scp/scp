import { diff, patch, Change } from "../src/diff"

const expectations = <[string, string, Change][]>[
  ["aaa", "aaa", []],
  ["hello", "hello there", [5, " there"]],
  ["aa", "aba", [1, "b"]],
  ["a basket", "a big basket", [3, "ig b"]],
  ["one two", "orange tweed top", [1, "ra", 1, "g", 4, "eed t", 1, "p"]]
]

describe("diffing function", () => {
  it("rejects a non-additive change", () => {
    expect(() => diff("a", "b")).toThrow()
    expect(() => diff("aa", "ab")).toThrow()
  })

  it("generates a diff", () => {
    expectations.forEach(expectation => {
      expect(diff(expectation[0], expectation[1])).toEqual(expectation[2])
    })
  })
})

describe("patching function", () => {
  it("can apply additive changes", () => {
    expectations.forEach(expectation => {
      expect(patch(expectation[0], expectation[2])).toEqual(expectation[1])
    })
  })
})
