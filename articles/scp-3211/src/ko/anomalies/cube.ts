import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "redcube.webp",
  imageCaption: "예술가가 SCP-3211을 재현한 것.",
  objectClass: "안전(Safe)",
  physicalDescription: `
    SCP-3211은 한 변이 12cm인 붉은색 입방체다. 실험 결과 질량은 1kg이며 두 개의 측정값 모두 현재 기술의 한계 내에서 정확한 수치다. SCP-3211은 표면이 완전히 매끈한 것으로 보이며 이론적으로는 빛을 완벽하게 반사한다. 사진 및 영상 촬영할 때에도 그러나, 맨눈으로 볼 때는 분명히 평범한 붉은색으로 보인다.
  `,
  informalDescription: "a red cube",
  // could be 붉은 입방체다 "is a red cube"
  // could be 붉은색 입방체임을 "is a red cube"
  // could be 붉은색 입방체라는 "called red cube"
  // could be 붉은 입방체가 "red cube"
  // could be 붉은 입방체다 "it's a red cube"
  // could be 있다…씨발 놈의 빨간 상자 "fucking red box", only in context of "that fucking red box": 놈은 그냥 저기 앉아서, 날 보고 있다…씨발 놈의 빨간 상자.
  formalDescription: "a red cube",
  writtenObservation: `
    방 한가운데에는 빨간 정육면체가 있다. 10cm, 어쩌면 15cm 정도의 크기인 것 같다. 엄청 매끈하다. 이상할 정도로 매끈하다. 손으로 만지면 바로 미끄러질 것 같은 느낌이다.
  `,
  data: {
    spectrophotometry: "실패 — SCP-3211가 모든 빛을 반사함",
    mass: "최고 수준 정확도에서 1kg",
    hume: "SCP-3211은 기준 현실보다 살짝 높은 흄 준위를 가진다",
    magnetism: "SCP-3211은 자성이 없다",
    visual: "SCP-3211이 붉은 입방체임을 확인",
    physical: `
      D-9981은 SCP-3211을 집어들 수 있었고, '미끄러운 느낌'이라 말하였다
    `,
    questioning: "대답 없음",
    sentience: "음성 반응"
  },
  funFact: "완벽하게 매끈하고 정확히 일 킬로그램이 나간다"
})
