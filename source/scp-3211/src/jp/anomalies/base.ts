import { Anomaly } from "../../anomaly"

export default new Anomaly(true, {
  imageUrl: "imgmissing.webp",
  imageCaption: "SCP-3211を収めた画像は存在しません。",
  objectClass: "Safe",
  physicalDescription: "SCP-3211は不明な物品、実体、あるいは概念です。",
  informalDescription: "無",
  formalDescription: "無",
  writtenObservation: `
    収容室は空だ。説明すべきものなんて何もない。なんでただの空室の説明を書かなきゃならないのかわからない。
  `,
  data: {
    spectrophotometry: `
      SCP-3211の可視光に対する吸光度・透過率は背景のそれの基準値と同一です。
    `,
    mass: `
      SCP-3211の位置する場所に設置された重量計はいかなる重量も検知しませんでした。
    `,
    hume: "SCP-3211は基底現実と同じヒューム値を持ちます。",
    magnetism: "非磁性",
    visual: "SCP-3211は非可視性です。",
    physical: "反応なし。D-9981はSCP-3211の位置する場所に何も感じることはありませんでした。",
    questioning: "応答なし",
    sentience: "陰性"
  },
  funFact: ""
})
