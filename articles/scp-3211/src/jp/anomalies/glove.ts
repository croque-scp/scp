import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "gloves.webp",
  imageCaption: "収容下のSCP-3211",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211は、一対の使い古された重い革製の作業用手袋です。解析の結果、SCP-3211の全体から痕跡量の油、導線、硫黄が検出されました。SCP-3211(左右問わず)内に挿入されたあらゆる物体は、それを挿入した者の口内に出現します。挿入された物体は口蓋垂と後方歯のおおよそ中間地点に出現します。小さな物体は重力に従いそのまま落下します。他の何かに固定された物体 -- 例として長いポールや手など -- は、右手袋に挿入された場合は口から出る方向へ、左手袋に挿入された場合は喉へ伸びる方向へ伸びていきます。被験者の口が傷を負わなかったとして、挿入された物品は問題なく引き抜くことができます。
  `,
  informalDescription: "一対の手袋",
  formalDescription: "一対の手袋",
  writtenObservation: `
    汚い手袋だ。使い込まれたっていうのかはわからない。それよりは油に落っことして焼いたみたいに見える。それかこいつの上にウンコしたか。
  `,
  data: {
    spectrophotometry: "SCP-3211は予期通り吸光性を見せました。",
    mass: "各0.6キログラム",
    hume: "SCP-3211は基底現実と同じヒューム値を持ちます。",
    magnetism: "非磁性",
    visual: "SCP-3211は一対の手袋に類似することが確認されています。",
    physical: `
      D-9981は手袋の中で自身の歯に触れた後はどちらの手袋も着用を拒みました。
    `,
    questioning: "応答なし",
    sentience: "陰性"
  },
  funFact: "口の中に手が出てくる。よりによって口の中にだ"
})
