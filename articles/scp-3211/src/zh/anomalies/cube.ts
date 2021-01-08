import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "redcube.webp",
  imageCaption: "艺术家对FPC-3211的描述。",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211是一个红色立方体，每条边长12cm，测试表明其重1kg。这些度量均基于目前科技下最精确的仪器。SCP-3211拥有绝对光滑的表面，并在理论上可完全反射所有光线。其在照片与影像中均如此，但裸眼观察时表面为清晰的红色。
  `,
  informalDescription: "一个红色立方体",
  formalDescription: "一个红色立方体",
  writtenObservation: `
    屋子中间有一个红色立方体。它有10cm，可能15cm高。它相当光滑，简直光滑地有点变态。我感觉如果我去摸它，我的手会直接滑开。
  `,
  data: {
    spectrophotometry: "失败——反射了所有光线",
    mass: "最高精度下重1kg",
    hume: "SCP-3211具比基准现实稍高的休谟指数",
    magnetism: "不具磁性",
    visual: "确认SCP-3211为一个红色立方体",
    physical: `
      D-9981可拿起SCP-3211，并报告其“感觉很滑”
    `,
    questioning: "无回应",
    sentience: "阴性结果"
  },
  funFact: "它绝对光滑而且重正好一千克"
})
