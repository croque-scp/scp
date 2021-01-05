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

type Lang = {
  rot13: boolean
  fileUrl: string
}

export const langs: { [lang: string]: Lang } = {
  en: {
    rot13: true,
    fileUrl: "https://scp-wiki.wdfiles.com/local--files/scp-3211/"
  }
  zh: {
    rot13: false,
    fileUrl: "https://scp-wiki-cn.wdfiles.com/local--files/scp-3211/"
  }
}
