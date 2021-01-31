import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "toaster.webp",
  imageCaption: "収容下のSCP-3211",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211は製造元・モデルともに不明なトースターです。現時点で、ケーブルの端は見つかっていません。目視でケーブルを追った場合は、トースターまで戻ってきてしまうという結果になり、ケーブルを実際に追おうとする者は、何か理由を見つけてそれを止めてしまいます(典型的には「見ればわかる」と主張します)。トースターの電源は入っていません。SCP-3211の左側のスロットには冷たいトーストが入っており、取り出すと再出現します。トーストは非可食であり、鉄とプラスチックでできていることが判明しています。トーストは右側のスロットに差し込まれると消滅します。取り出されたトーストも観察下に置かれなくなると消滅します。
  `,
  informalDescription: "トースター",
  formalDescription: "トースター",
  writtenObservation: "トースターだ...ケーブルはなんかすごいが。",
  data: {
    spectrophotometry: "SCP-3211は予期通り吸光性を見せました。",
    mass: "3.4キログラム",
    hume: "SCP-3211は基底現実と同じヒューム値を持ちます。",
    magnetism: "局所的に磁性",
    visual: "SCP-3211はトースターに類似することが確認されています。",
    physical: `
      D-9981はSCP-3211を容易に持ち上げられ、トーストを取り出せたましたが、ケーブルを追うことはできませんでした。
    `,
    questioning: "応答なし",
    sentience: "陰性"
  },
  funFact: "こいつには妙なトーストと忌々しいケーブルがついている"
})
