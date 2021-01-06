import { Anomaly } from "../../anomaly"

export default new Anomaly(true, {
  imageUrl: "imgmissing.webp",
  imageCaption: "SCP-3211에 대한 영상 증거는 없다.",
  objectClass: "안전(Safe)",
  physicalDescription: "SCP-3211은 정체불명의 객체, 독립체 또는 개념이다.",
  informalDescription: "",
  formalDescription: "",
  writtenObservation: `
    격리실은 비어있다. 딱히 서술할 게 없다. 왜 빈방에 대해 써야 하는지 모르겠다.
  `,
  data: {
    spectrophotometry: `
      SCP-3211은 가시 스펙트럼 내에서 일반적인 기준 수치와 같은 흡광도 및 투과도를 보인다.
    `,
    mass: `
      SCP-3211의 위치 아래에 놓인 질량 저울은 질량을 측정하지 못했다
    `,
    hume: "SCP-3211은 기준 현실과 같은 흄 준위를 가진다",
    magnetism: "SCP-3211은 자성이 없다",
    visual: "SCP-3211은 보이지 않는다",
    physical: "반응 없음. D-9981은 SCP-3211의 위치에서 아무것도 느끼지 못했다",
    questioning: "대답 없음",
    sentience: "음성 반응"
  },
  funFact: ""
})
