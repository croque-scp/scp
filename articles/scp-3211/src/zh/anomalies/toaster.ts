import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "toaster.webp",
  imageCaption: "SCP-3211在收容间内的照片。",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211为一台结构与型号未知的烤面包机。直至现在，线缆都不以插头为末端。试图用目光跟随线缆的观察者最终会回到烤面包机上，而试图以接触跟随线缆的观察者会找到个理由不去做这件事，通常会坚持视觉观察已经“够好了”。
	不论如何，该烤面包机并未通电。SCP-3211的左孔中含有一片冷吐司，其会在被移出后重新出现。该烤面包无法食用且已发现其是由钢铁与塑料制成的。
	在烤面包机的右孔插入吐司会导致其消失。被移出的烤面包亦会在不再被观察到时消失。
  `,
  informalDescription: "一台烤面包机",
  formalDescription: "一台烤面包机",
  writtenObservation: "这是一台烤面包机……这线缆真有点难搞",
  data: {
    spectrophotometry: "SCP-3211表现出与期望一致的吸光率",
    mass: "3.4kg",
    hume: "SCP-3211的休谟读数与基准现实一致",
    magnetism: "SCP-3211的某些地方具有磁性",
    visual: "确认SCP-3211与一台烤面包机相似",
    physical: `
      D-9981轻易地拿起SCP-3211；取出吐司；无法跟随线缆
    `,
    questioning: "无回应",
    sentience: "阴性结果"
  },
  funFact: "它有片魔法吐司和那条难搞的线缆"
})
