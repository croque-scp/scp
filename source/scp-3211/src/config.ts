export const anomalyNames = <const>[
  "base", // Base anomaly must come first
  "cube",
  "her",
  "puce",
  "pigeon",
  "coin",
  "choke",
  "matches",
  "toaster",
  "glove",
  "putty",
  "chocolate",
  "cannon"
]

export type Lang = {
  encrypt: [string, string, number][]
  fileUrl: string
}

export const langs: { [lang: string]: Lang } = {
  en: {
    encrypt: [
      ["a", "z", 13],
      ["A", "Z", 13],
    ],
    fileUrl: "https://scp-wiki.wdfiles.com/local--files/scp-3211/"
  },
  zh: {
    encrypt: [
      ["a", "z", 13],
      ["A", "Z", 13],
    ],
    fileUrl: "https://scp-wiki.wdfiles.com/local--files/scp-3211/"
    // fileUrl: "https://scp-wiki-cn.wdfiles.com/local--files/scp-3211/"
  },
  jp: {
    encrypt: [
      ["a", "z", 13],
      ["A", "Z", 13],
      ["ぁ", "ゖ", 73],
      ["ァ", "ヶ", 73],
      ["一", "龠", 20217],
    ],
    fileUrl: "https://scp-wiki.wdfiles.com/local--files/scp-3211/"
    // fileUrl: "http://scp-jp.wdfiles.com/local--files/scp-3211/"
  },
}
