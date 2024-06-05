import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "coin.webp",
  imageCaption: "SCP-3211在收容间内的照片。",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211是一枚2.7cm的老鹰纪念币，是一枚铸造时价值为$10的美国硬币。分析表明该硬币实际上是假的：尽管看起来很像黄金，但该硬币是塑料制品，且很可能是在2010年到2013年间的某个时候生产的。尽管如此，SCP-3211仍对视觉性观察它的人引起强迫性效应，使他们不仅认为此为真金打造，而且极为珍贵。这通常会导致受影响的观察者努力地争抢硬币——而此时强迫性效应停止，受害者将意识到他们正拿着一件平凡的物品，且会克服一种愚蠢的感觉（虽然这并不被认为是异常的一部分）。
  `,
  informalDescription: "一枚硬币",
  formalDescription: `
    一枚金币也是一枚假币，决定于是否正与其接触
  `,
  writtenObservation: "这是枚金币。我想要",
  data: {
    spectrophotometry: "SCP-3211表现出与期望一致的吸光率",
    mass: "2.32g",
    hume: "SCP-3211的休谟读数与基准现实一致",
    magnetism: "SCP-3211不具磁性",
    visual: "确认SCP-3211与一枚金币相似",
    physical: "确认SCP-3211事实上是一枚塑料币",
    questioning: "无回应",
    sentience: "阴性结果"
  },
  funFact: `
    即使这是塑料制品，你还是会在碰到它之前觉得它是真金
  `
})
