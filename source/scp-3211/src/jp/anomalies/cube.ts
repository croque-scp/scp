import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "redcube.webp",
  imageCaption: "SCP-3211のイラスト",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211は各辺12センチメートルの赤い立方体です。計測の結果質量1キログラムだと判明しており、また、これらの計測結果は現在可能な最高精度の計測によるものです。SCP-3211は完全に平滑な面を持っていると思われ、理論上は光を完全に反射します。これは撮影・録画の際にも同様ですが、裸眼で観測された際には赤色であると知覚されます。
  `,
  informalDescription: "赤い立方体",
  formalDescription: "赤い立方体",
  writtenObservation: `
    部屋の中ほどに赤い立方体が置いてある。10センチか、もしかしたら15センチくらいだ。かなりっていうか、妙なくらいツルツルしている。たぶん触ってもすぐに手が滑っちゃうだろう。
  `,
  data: {
    spectrophotometry: "失敗 -- SCP-3211は全ての光を反射します。",
    mass: "最高精度で1キログラム",
    hume: "SCP-3211は基底現実よりも僅かに高いヒューム値を持ちます。",
    magnetism: "非磁性",
    visual: "SCP-3211は赤い立方体であると確かめられています。",
    physical: `
      D-9981はSCP-3211を持ち上げることができましたが、「かなり滑る」と報告しました。
    `,
    questioning: "応答なし",
    sentience: "陰性"
  },
  funFact: "こいつは完全な平面を持ち、そして正確に1キログラムだ"
})
