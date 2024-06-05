import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "match.webp",
  imageCaption: "収容下のSCP-3211",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211は一般的な大きさ・質量の、スウェディッシュ・マッチ製のマッチ箱です。箱内部には、見かけ上は通常の本数のマッチが入っています。箱の外側面にある側薬はかなり使い込まれており、全面的に擦り切れています。SCP-3211は被験者が箱を開け、マッチを灯そうと試みるまではなんの異常性も見せません。しかしながら、SCP-3211内のマッチは今までに1度も灯されたことがありません。被験者はマッチを灯そうと試み続け、マッチが折れると別のマッチを箱から取り出し、妨害されない限り半永久的にこれを続けます。他のマッチ箱からのマッチを灯すことでも影響から脱することはできます。SCP-3211内のマッチは減ることがありません。
  `,
  informalDescription: "マッチ箱",
  formalDescription: "マッチ箱",
  writtenObservation: "ごく普通のマッチ箱。",
  data: {
    spectrophotometry: "SCP-3211は予期通り吸光性を見せました。",
    mass: "39グラム",
    hume: "SCP-3211は基底現実と同じヒューム値を持ちます。",
    magnetism: "非磁性",
    visual: "SCP-3211はマッチ箱に類似することが確認されています。",
    physical: "D-9981は箱を開け、マッチを灯そうと試み始めました。",
    questioning: "応答なし",
    sentience: "応答なし(否定的な反応が予想されていました)"
  },
  funFact: "こいつはこいつ自身についての全く無意味な強制効果を持つ"
})
