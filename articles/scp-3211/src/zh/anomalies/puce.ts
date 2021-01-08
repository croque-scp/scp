import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "puce.webp",
  imageCaption: "颜色“紫褐色”。",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211是一个与颜色“紫褐色”强相关的小型空间区域。FPC-3211可被轻易拿起并移动，可被测量及称重，但个体会一致描述其为“紫褐色”。在视觉上，FPC-3211并不清晰——个体虽然可轻易定位及与其互动，但他们难以辨认其边界或表达对其的感觉。目前最优的结论是它是一种表现为近似物体的颜色的概念。
  `,
  informalDescription: "颜色“紫褐色”",
  formalDescription: "颜色“紫褐色”的概念",
  writtenObservation: `
    这是……紫褐色？我不大清楚，我只能看到这个。但它很小，就好像……我不知道。好像它被抑制起来了。
  `,
  data: {
    spectrophotometry: `
      SCP-3211有与颜色“紫褐色”一致的弱吸收率。实际波长未知。
    `,
    mass: "在0.51kg至3.90kg间，根据不同实验者而变",
    hume: "SCP-3211具有异常高的休谟指数",
    magnetism: "SCP-3211具有极轻微的磁性",
    visual: `SCP-3211是颜色“紫褐色”`,
    physical: `
      D-9981把SCP-3211碰到了收容室地上并且难以将其放回到桌子上
    `,
    questioning: "无回应",
    sentience: "阴性结果"
  },
  funFact: `
    某种未知的，普通的紫褐色东西包围了它和它周围的区域
  `
})
