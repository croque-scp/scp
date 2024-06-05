import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "puce.webp",
  imageCaption: "暗赤色",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211は「暗赤色」という色と強く関連づいた小領域です。SCP-3211は難なく持ち上げ動かすことができ、大きさ・質量ともに計測もできますが、しかし被験者は常にただ「暗赤色である」こと以外は説明できません。視覚的にはSCP-3211は不明瞭です -- 研究者たちは問題なく定位することも触ることもできますが、その境界を定義することや、「どのような感じか」を表現することには困難を覚えます。SCP-3211は概念としての色の顕現であるというのがおおよそ適当です。
  `,
  informalDescription: "暗赤色",
  formalDescription: "概念としての暗赤色",
  writtenObservation: `
    こいつは...暗い赤、っていうのか? よくわからん。見えるものはこれだけだ。だがこいつは小さくて、それで... わからん。言葉が制限されてるみたいな感じがする。
  `,
  data: {
    spectrophotometry: `
      SCP-3211は暗赤色と同等のピーク吸光度を持ちます。実際の波長は不明です。
    `,
    mass: "0.51キログラムから3.90キログラム(計測者ごとに異なる)",
    hume: "SCP-3211は異常に高いヒューム値を持ちます。",
    magnetism: "非常にわずかに磁性",
    visual: `SCP-3211は暗赤色です。`,
    physical: `
      D-9981はSCP-3211を収容室の床にたたきつけましたが、それをテーブルに戻すことには困難を覚えました。
    `,
    questioning: "応答なし",
    sentience: "陰性"
  },
  funFact: `
    こいつは何か分からないがありふれた物品だが、どういうわけか自身と周りの空間に暗赤色をまとっている
  `
})
