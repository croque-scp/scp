import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "imgmissing.webp",
  imageCaption: "没有SCP-3211的图像记录。",
  objectClass: "Euclid",
  physicalDescription: `
    SCP-3211是一片大小不一的空间区域，但其最大为大约两米高以及五十厘米的长宽。SCP-3211不可被以肉眼观察，但观察者必然能识别出该区域被某物占据。SCP-3211可在收容室范围内随意移动，但其大部分时间都会在收容室的某个角落中。目测观察，SCP-3211似乎为一空的区域。任何碰触到SCP-3211的人都会立即遭受到一次完全肌肉功能丧失：全身所有肌肉停止运作，导致实体无法移动，通常还会导致窒息或者心搏停止。然而，通常不会显示出严重症状，因SCP-3211通常会在被碰触之后移离观察者。以此种方法重复进行边界探测已确认SCP-3211为人形生物。
  `,
  informalDescription: "几乎无物",
  formalDescription: "一块空的但被占据的空间区域",
  writtenObservation: `
    这里什么都没有但是我得假装写点什么这样看起来我就跟在做事一样啊哦等等这里有点东西我看不到它
  `,
  data: {
    spectrophotometry: "SCP-3211表现出无吸光度",
    mass: "91.4kg",
    hume: `
      SCP-3211的休谟读数轻微低于基准现实，表明发生了一定程度的现实扭曲
    `,
    magnetism: "SCP-3211不具磁性",
    visual: "确认SCP-3211实际上不可见",
    physical: `
      D-9981的身体瘫痪了约10秒后SCP-3211移开了
    `,
    questioning: "SCP-3211不可预测地四处移动",
    sentience: "阳性结果"
  },
  funFact: "它能在人们碰到它的时候令人窒息并出现心脏病发作"
})
