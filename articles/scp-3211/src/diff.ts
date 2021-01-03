export type Change = (number | string)[]

export function diff (older: string, newer: string): Change {
  /**
   * Generates a change representing the change applied to an 'older' string
   * that would result in the 'newer' string.
   *
   * Change must be purely additive - it must only add characters, not change
   * or remove any.
   */
  const additions = _findAdditions(older.split(""), newer.split(""))
  const changes: Change = []
  let stepCount = 0
  additions.forEach(addition => {
    if (addition === "") {
      stepCount += 1
    } else {
      if (stepCount > 0) {
        changes.push(stepCount)
        stepCount = 0
      }
      changes.push(addition)
    }
  })
  return changes
}

export function patch (older: string, changes: Change): string {
  /**
   * Applies a change to an 'older' string to create the 'newer' string.
   */
  const olderArray = older.split("")
  let index = 0
  changes.forEach(change => {
    if (typeof change === "number") {
      index += change
    } else {
      olderArray.splice(index, 0, change)
      index += 1
    }
  })
  return olderArray.join("")
}

export function _findAdditions (
  older: string[], newer: string[], additions: string[] = []
): string[] {
  if (older.length === 0) {
    if (newer.length > 0) {
      additions.push(newer.join(""))
    }
    return additions
  } else if (newer.length === 0) {
    throw new Error("Only additive diffs are accepted")
  }
  if (older[0] === newer[0]) {
    additions.push("")
    older.shift()
    newer.shift()
  } else {
    const addition: string[] = []
    while (older[0] !== newer[0] && newer.length > 0) {
      addition.push(newer.shift()!)
    }
    additions.push(addition.join(""))
  }
  return _findAdditions(older, newer, additions)
}
