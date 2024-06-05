import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "match.webp",
  imageCaption: "SCP-3211在收容间内的照片。",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211为一盒普通大小与质量且商标为瑞士火柴有限公司的火柴盒。打开火柴盒能发现其包含了明显为正常数量的火柴。存在于盒外表面一侧的擦击面被大量使用且某些地方已完全磨损。SCP-3211在一名实体打开盒子并取出一根火柴之前无异常效应，之后他们会被强制将其点亮。然而，SCP-3211中的火柴无一能被点亮。实体会继续尝试点亮火柴，会在现在的一根断掉后取出另一根火柴，然后会继续在不受干扰的情况下无限继续。点亮从任意其他火柴盒中的火柴足以终止该效应。SCP-3211中含有的火柴数量不会耗尽。
  `,
  informalDescription: "一盒火柴",
  formalDescription: "一盒火柴",
  writtenObservation: "其实就是个火柴盒",
  data: {
    spectrophotometry: "SCP-3211表现出与期望一致的吸光率",
    mass: "39g",
    hume: "SCP-3211的休谟读数与基准现实一致",
    magnetism: "SCP-3211不具磁性",
    visual: "确认SCP-3211与一盒火柴相似",
    physical: "D-9981打开盒子并开始尝试点亮火柴",
    questioning: "无回应",
    sentience: "无回应（预计为阴性结果）"
  },
  funFact: "它有种与其关联的毫无意义的强迫性效应"
})
