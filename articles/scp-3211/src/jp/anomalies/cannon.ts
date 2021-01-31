import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "imgmissing.webp",
  imageCaption: "SCP-3211を収めた画像は存在しません。",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211は存在しません。SCP-3211を収容している、あるいはしていた部屋は空室です。収容室に入ると、全ての被験者は即座に収容室がかつて「1575年にフランスで鉄とオークから作られ、『フォーズワースの戦い』で使用され、退役後は大英博物館に所蔵された半カルバリン砲」を収容していたと確信します。被験者はこのことを完全に正常なこととみなし、そのまま日常生活に戻ります。結果として、被験者は室を繰り返し出たり入ったりする場合もあります(これも正常なこととみなされます)。これらの行動および偽記憶は、「フォーズワースの戦い」など存在せず、SCP-3211は大英博物館ではなくサイト-21にあるということに気づいたとき、あるいは教えられたときに限り異常なものであると自覚されます。
  `,
  informalDescription: "空室",
  formalDescription: "かつて大砲を収容していた、あるいはいなかった可能性のある部屋",
  writtenObservation: "大砲なんてない。",
  data: {
    spectrophotometry: "N/A",
    mass: "N/A",
    hume: "N/A",
    magnetism: "N/A",
    visual: "収容室は空室です。",
    physical: "SCP-3211は存在しません。",
    questioning: "応答なし。D-9981は「なんて失礼な奴だ」と発言しましたが、意図は不明です。",
    sentience: "陰性"
  },
  funFact: "ここには大砲があった -- あるいはそう思っていてほしいんだ"
})
