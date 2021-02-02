/**
 * Rotates the characters of a string in order to encrypt it, shifting them
 * up by the specified amount. Shifts only characters within a stated range
 * inclusively. Characters that, after shifting, would no longer be in the
 * range are looped around and fed into the other side of the range.
 *
 * For single-case Latin characters (A-Z or a-z), a shift of 13 is
 * equivalent to ROT13.
 *
 * @param startChar - The character at the start of the range.
 * @param endChar - The character at the end of the range.
 * @param shift - The number of characters by which to shift the range upwards.
 * @returns A function that accepts a string and returns a string with the
 * shift applied to it.
 */
export function rotate (
  startChar: string, endChar: string, shift: number
): (str: string) => string {
  const startCode = startChar.charCodeAt(0)
  const endCode = endChar.charCodeAt(0)
  const selection = new RegExp(`[${startChar}-${endChar}]`, "g")
  return (s: string) => {
    return s.replace(selection, (char) => {
      const charCode = char.charCodeAt(0)
      return String.fromCharCode(
        (charCode + shift - startCode) % (endCode + 1 - startCode) + startCode
      )
    })
  }
}
