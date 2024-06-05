import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "deadpigeon.webp",
  imageCaption: "SCP-3211在收容间内的照片。",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211是处于腐败早期的_Columba livia domestica_ （普通鸽子）尸体。SCP-3211被放在收容间直径1米，厚度4cm的混凝土圆盘中间。SCP-3211与混凝土无法分离，尽管物体整体可被自由移动。SCP-3211的一个显著特点是其具有与混凝土相似的性质：相似的硬度、质量，并且明显不会继续腐败。除此以外，SCP-3211在视觉上与一只鸽子完全相同。
  `,
  informalDescription: "一只死亡的鸽子",
  formalDescription: "一具鸽子尸体",
  writtenObservation: `
    屋子中间有只死鸽子。操，太恶心了。我不知道它怎么到这的。为什么它还没烂掉？
  `,
  data: {
    spectrophotometry: "SCP-3211表现出与期望一致的吸光率",
    mass: "93.6kg",
    hume: "SCP-3211的休谟读数与基准现实一致",
    magnetism: "SCP-3211不具磁性",
    visual: "确认SCP-3211看起来是一只已死的鸽子",
    physical: `
      D-9981无法拿起SCP-3211但可以歪斜整个混凝土盘
    `,
    questioning: "无回应",
    sentience: "弱阳性（与死亡的动物一致）"
  },
  funFact: `
    它硬的跟石头一样，而且根本不继续腐败
  `
})
