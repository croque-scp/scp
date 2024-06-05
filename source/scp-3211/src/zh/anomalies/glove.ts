import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "gloves.webp",
  imageCaption: "SCP-3211在收容间内的照片。",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211为一双沉重的皮革制已经磨损的工作手套。分析表明其表表面覆盖着痕量的油、铅与硫磺。任何被实体插入任何一只手套的物体都不会确实地进入手套，而是会出现在实体的口中。插入任何一只都约会出现在小舌与臼齿的中间位置。松散的物体会直接在重力作用下落入口中。固定在其它东西上的物体——例如一根长杆，或者连接在手腕上的手——会在插入右手套时从口中伸出，或是在插入左手套时进入喉咙。若其对实体的口部未造成损伤，则可被毫无问题地收回。
  `,
  informalDescription: "一双手套",
  formalDescription: "一双手套",
  writtenObservation: `
    这是一双老旧的手套。很难看。不确定妥善使用这个词用得对不对。更像是掉到油里然后被烤过。或者沾了屎。
  `,
  data: {
    spectrophotometry: "SCP-3211表现出与期望一致的吸光率",
    mass: "每只0.6kg",
    hume: "SCP-3211的休谟读数与基准现实一致",
    magnetism: "SCP-3211不具磁性",
    visual: "确认SCP-3211与一双手套相似",
    physical: `
      D-9981在手套里摸到她自己的牙齿后就拒绝带上任一手套
    `,
    questioning: "无回应",
    sentience: "阴性结果"
  },
  funFact: "它会让你的手出现在你的嘴里。你自己的破烂嘴里"
})
