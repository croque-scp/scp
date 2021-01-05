import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "imgmissing.webp",
  imageCaption: "没有SCP-3211的图像记录。",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211不存在。正收容或曾收容过SCP-3211的房间都是空的。在进入收容室之后，所有的观察者都会立即相信该室之前收容有一门半重型军用火炮，由钢铁及1575年的法国橡木制成，并于福兹沃斯战役中使用，后在大英博物馆保存至今。观察人员会认为这是完全正常的并恢复正常工作，这可能会导致其反复进出收容室（这也被认为是正常的）。这些行为以及虚假记忆都只有当观察者注意到或被告知，福兹沃斯战役并不存在而且SCP-3211是在Site-21而不是在大英博物馆，之后才会意识到为异常。
  `,
  informalDescription: "一个空房间",
  formalDescription: "一个可能也可能未收容一门火炮的房间",
  writtenObservation: "这里没有火炮",
  data: {
    spectrophotometry: "不适用",
    mass: "不适用",
    hume: "不适用",
    magnetism: "不适用",
    visual: "收容室是空的",
    physical: "SCP-3211不存在",
    questioning: '无回应；D-9981评论为“没礼貌”，未确认关联性',
    sentience: "阴性结果"
  },
  funFact: "这里曾有火炮——或者说它想你这么认为"
})
