export function rot13 (string: string): string {
  /**
   * Encrypts or decrypts a ROT13 string. Only affects A-z characters.
   *
   * @param string: The string to be encrypted or decrypted.
   */
  return string.replace(/[A-z]/g, (char) => {
    let charCode = char.charCodeAt(0)
    return String.fromCharCode(
      (char <= "Z" ? 90 : 122) >= (charCode = charCode + 13)
        ? charCode
        : charCode - 26
    )
  }).replace(/[ぁ-ゖ]/g, (char) => {
    let charCode = char.charCodeAt(0)
    return String.fromCharCode(charCode <= 12425 ? charCode + 13 : charCode - 73);
  }).replace(/[ァ-ヶ]/g, (char) => {
    let charCode = char.charCodeAt(0)
    return String.fromCharCode(charCode <= 12521 ? charCode + 13 : charCode - 73);
  }).replace(/[一-龠]/g, (char) => {
    let charCode = char.charCodeAt(0)
    return String.fromCharCode(charCode <= 40184 ? charCode + 13 : charCode - 20217);
}
