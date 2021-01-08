import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "czech.webp",
  imageCaption: "SCP-3211在收容间内的照片。",
  objectClass: "Euclid",
  physicalDescription: `
    SCP-3211是一个女性人类，可能为捷克裔。SCP-3211不需要营养或锻炼，而且貌似也不需要社交。该实体始终站在收容室中央的某一位置，应是出于其自身决定。SCP-3211不会眨眼及呼吸，没有心跳，不会改变面部表情，也不具任何生命迹象。除这些差异外，该个体健康状况良好。SCP-3211对大多数提问的回答是“Nerozumím”，这个词被认为是它的名字，但除此以外不会说话。
  `,
  informalDescription: "一个女性人类",
  formalDescription: "一个捷克女人",
  writtenObservation: `
    这里有个女人就那么站在屋子中间。她看上去很怪，脸上有让人毛骨悚然的微笑。或者说，那笑容并不是有多可怕，只是好像是假的。而且她不动。
  `,
  data: {
    spectrophotometry: "失败——测试被认为不礼貌",
    mass: "SCP-3211被放于仪器上。77.56kg",
    hume: `
      SCP-3211具与非现实扭曲者人类一致的休谟指数
    `,
    magnetism: "SCP-3211不具磁性",
    visual: "SCP-3211像是个普通人类",
    physical: `
      SCP-3211短暂地瞪着D-9981，但随后回复正常姿势，并未给D-9981一耳光
    `,
    questioning: `
      SCP-3211表示其名为“Nerozumím”但未回答其他问题
    `,
    sentience: "阳性结果"
  },
  objectPronoun: "她",
  possessivePronoun: "她",
  funFact: `
    她站得绝对笔直，而且_纹丝_ 不动，甚至心脏也是
  `,
  madeASound: "来自SCP-3211的不明声音"
})
