import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "chocolate.webp",
  imageCaption: "SCP-3211在收容间内的照片。",
  objectClass: "Safe",
  physicalDescription: `
    SCP-3211为一盒粉色无商标的巧克力。盒内有15个格子，现剩余8块巧克力。在打开盒子后，里面会装有某种巧克力——从通常会出现于该种类的盒子中的巧克力里选择——为实体最不喜欢吃的种类。对不同实体会预测出每一种他们最不喜欢的巧克力，即使在实体同时观察时也会是不同种类的。巧克力可以被平安无事地吃下，尽管会因其量有限而被劝阻。如果实体不喜欢所以巧克力，SCP-3211似乎会默认为土耳其软糖。
  `,
  informalDescription: "一盒巧克力",
  formalDescription: `
    一盒巧克力（尽管他们对具体是什么巧克力的意见不一）
  `,
  examineAction: "D-68134粗鲁地掰开巧克力并吃了半个。",
  examineConfirmationAction: `
    D-8834被指示吃掉剩下半块巧克力。她遵从，并报告其为土耳其软糖，与文档3211-01相悖。
  `,
  writtenObservation: `
    这是一盒巧克力。他们让我吃的那个全都是恶心的草莓味的东西。我都不知道为什么有人会喜欢这个。即使对于巧克力而言这也太甜了。
  `,
  data: {
    spectrophotometry: "SCP-3211表现出与期望一致的吸光率",
    mass: "90g",
    hume: "SCP-3211的休谟读数与基准现实一致",
    magnetism: "SCP-3211不具磁性",
    visual: "确认SCP-3211与一盒巧克力相似",
    physical: `
      D-9981报告巧克力看着像巧克力但并未尝试
    `,
    questioning: "无回应",
    sentience: "阴性结果"
  },
  funFact: `
    巧克力是会随着看着它的人而改变的。我不需要去尝一块来看看它们对我而言是什么。白巧克力带点可可粉——跟屎一样的咖啡奶油。我讨厌咖啡奶油。而且你懂吧，还挺好笑的，因为我喜欢白巧克力也喜欢咖啡。虽然说只喜欢黑咖啡，可能那就是问题所在了。我希望这是土耳其软糖。但这不是重点
  `
})
