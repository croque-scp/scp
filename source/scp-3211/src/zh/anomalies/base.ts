import { Anomaly } from "../../anomaly"

export default new Anomaly(true, {
  imageUrl: "imgmissing.webp",
  imageCaption: "没有SCP-3211的图像记录。",
  objectClass: "Safe",
  physicalDescription: "SCP-3211是一个未知的物件、实体或概念。",
  informalDescription: "空无一物",
  formalDescription: "空无一物",
  writtenObservation: `
    这个收容间是空的。什么都没得写。不知道他们为什么要我形容一个空房间。
  `,
  data: {
    spectrophotometry: `
      SCP-3211表现出与标准背景读数相同的吸光率与透射率
    `,
    mass: `
      在SCP-3211所在处下放置的仪器未检测到任何质量
    `,
    hume: "SCP-3211的休谟读数与基准现实一致",
    magnetism: "SCP-3211不具磁性",
    visual: "SCP-3211不可见",
    physical: "无回应；D-9981在SCP-3211所在处未有任何感觉",
    questioning: "无回应",
    sentience: "阴性结果"
  },
  funFact: ""
})
