/**
 * Encrypts or decrypts a ROT13 string. Only affects A-z characters.
 *
 * @param string - The string to be encrypted or decrypted.
 */
export function rot13 (string: string): string {
  return string.replace(/[A-z]/g, (char) => {
    let charCode = char.charCodeAt(0)
    return String.fromCharCode(
      (char <= "Z" ? 90 : 122) >= (charCode = charCode + 13)
        ? charCode
        : charCode - 26
    )
  })
}
