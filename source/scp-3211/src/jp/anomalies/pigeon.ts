import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "deadpigeon.webp",
  imageCaption: "収容下のSCP-3211",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211は、腐敗の初期段階にある_Columba livia domestica_(カワラバト)の死体です。SCP-3211は直径1メートル、厚さ4センチメートルのコンクリート製の円盤の中心に固定されています。SCP-3211とコンクリート盤は分離できませんが、オブジェクト全体は動かすことが可能です。SCP-3211の注目すべき特徴は、コンクリートに類似する特徴を持つということです。SCP-3211はコンクリートと同程度の硬度、質量を持ち、明らかにこれ以上腐敗することはありません。にもかかわらず、SCP-3211は視覚的にはハトと知覚されます。
  `,
  informalDescription: "死んだハト",
  formalDescription: "ハトの死体",
  writtenObservation: `
    部屋の真ん中に死んだハトがいる。くそっ、最悪だ。どれくらい古いものなんだろう。なんで腐ってないんだ?
  `,
  data: {
    spectrophotometry: "SCP-3211は予期通り吸光性を見せました。",
    mass: "93.6キログラム",
    hume: "SCP-3211は基底現実と同じヒューム値を持ちます。",
    magnetism: "非磁性",
    visual: "SCP-3211は死んだハトであることが確認されています。",
    physical: `
      D-9981はSCP-3211を持ち上げることはできませんでしたが、コンクリート盤ごと傾けることはできました。
    `,
    questioning: "応答なし",
    sentience: "弱陽性(死んだ動物と同じ)"
  },
  funFact: `
    こいつは岩のように固く、これ以上腐敗することはない
  `
})
