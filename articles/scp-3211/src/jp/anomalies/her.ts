import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "czech.webp",
  imageCaption: "収容下のSCP-3211",
  objectClass: "Euclid",
  physicalDescription: `
    SCP-3211は、遺伝的にはチェコ人と思われる女性です。SCP-3211は栄養も運動も必要としておらず、加えて社会的交流も不要であると考えられています。SCP-3211は、おそらくはオブジェクト自身の意思で、常に収容室の中心に立ち続けています。SCP-3211はまばたきをせず、呼吸もせず、心臓も動いておらず、表情も変えず、いかなる生命の兆候も見せません。これらを除けば、オブジェクトは健康状態にあります。SCP-3211は"ネロズミム"(Nerozumím)と呼べばほとんどの質問に応答します。これはオブジェクトの氏名だと考えられています。しかしそれ以外のときは発話しません。
  `,
  informalDescription: "一人の女性",
  formalDescription: "チェコ人の女性",
  writtenObservation: `
    女がいる。なんか部屋の真ん中でつっ立ってる。妙な格好してマジで不気味な笑い方してる。怖いっていうんじゃなくて、なんか作られた笑顔みたいだ。あと全く動いていない。
  `,
  data: {
    spectrophotometry: "失敗 -- 試験は非倫理的だと考えられました。",
    mass: "SCP-3211は体重計に乗せられました。77.56キログラム。",
    hume: `
      SCP-3211は現実改変者でないヒトと同等のヒューム値を持ちます。
    `,
    magnetism: "非磁性",
    visual: "SCP-3211は通常のヒトに類似します。",
    physical: `
      SCP-3211は一瞬D-9981をにらみつけましたが、D-9981を叩き返すことはせずに元の表情に戻りました。
    `,
    questioning: `
      SCP-3211は「ネロズミム」と名乗りましたが、そのほかの質問には応答しませんでした。
    `,
    sentience: "陽性"
  },
  objectPronoun: "彼女",
  possessivePronoun: "彼女",
  funFact: `
    彼女は完全にじっと直立しており、心臓さえもが「全く」動いていない
  `,
  madeASound: "SCP-3211からの不明瞭な発話"
})
