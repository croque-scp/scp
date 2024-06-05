import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "coin.webp",
  imageCaption: "収容下のSCP-3211",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211はイーグル(旧10ドル硬貨)に類似する2.7 cmのコインです。解析の結果、コインは実際には贋物であることが判明しています。見かけ上は金に類似しますが実際にはプラスチックであり、2010年から2013年の間のいずれかの時点で作られたと思われます。しかしながらSCP-3211は観測者に対し、SCP-3211は本物の金でできており非常な価値を持つと信じさせる強制効果を持ちます。結果として、影響を受けた被験者はしばしばSCP-3211を奪取しようとします -- その時点で効果は停止し、被験者はただのありふれたコインを握っていることに気づき、「馬鹿げたことをした」と強く感じさせられることになります。このプロセス自体は異常効果の一環ではないと考えられています。
  `,
  informalDescription: "コイン",
  formalDescription: `
    「触れるまでは贋物だと気付かない金貨」
  `,
  writtenObservation: "金貨だ。ほしい。",
  data: {
    spectrophotometry: "SCP-3211は予期通り吸光性を見せました。",
    mass: "2.32グラム",
    hume: "SCP-3211は基底現実と同じヒューム値を持ちます。",
    magnetism: "非磁性",
    visual: "SCP-3211は金貨に類似することが確認されています。",
    physical: "SCP-3211は実際にはプラスチックのコインであることが確認されています。",
    questioning: "応答なし",
    sentience: "陰性"
  },
  funFact: `
    こいつは実際にはプラスチックなのだが、触れるまでは本物の金貨だと思わせられる
  `
})
