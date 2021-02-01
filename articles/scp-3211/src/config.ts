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
  rot13: boolean
  fileUrl: string
}

export const langs: { [lang: string]: Lang } = {
  en: {
    rot13: true,
    fileUrl: "https://scp-wiki.wdfiles.com/local--files/scp-3211/"
  },
  zh: {
    rot13: true,
    fileUrl: "https://scp-wiki.wdfiles.com/local--files/scp-3211/"
    // fileUrl: "https://scp-wiki-cn.wdfiles.com/local--files/scp-3211/"
  },
  jp: {
    rot13: true,
    fileUrl: "https://scp-wiki.wdfiles.com/local--files/scp-3211/"
    // fileUrl: "http://scp-jp.wdfiles.com/local--files/scp-3211/"
  }
}
