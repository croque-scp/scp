import { Anomaly } from "../../anomaly"

export default new Anomaly(false, {
  imageUrl: "puce.webp",
  imageCaption: "'벼룩' 색상.",
  objectClass: "안전(Safe)",
  physicalDescription: `
    SCP-3211은 '벼룩' 색상과 밀접한 연관이 있는 작은 공간 구획이다. 별 무리 없이 SCP-3211을 집어 들어 가지고 다닐 수 있고, 크기를 측정하고 무게도 잴 수 있지만, 사람들은 언제나 객체를 단순히 '벼룩 색'이라고 표현할 것이다. 시각적으로, SCP-3211은 불분명하다. 객체의 위치를 확인하고 상호작용하는 데에 문제가 없지만, 객체의 가장자리를 정의하거나 그 느낌이 어떤지 표현하는 것에 어려움을 느끼게 된다. 색상이라는 개념이 대략 객체로 현현했다는 것이 가장 잘 요약된 것이리라.
  `,
  informalDescription: "'벼룩' 색상이라는 개념이라는",
  formalDescription: "'벼룩' 색상이라는",
  // could be 말 그대로 그냥 벼룩 색상임을 "literally just a flea colour"
  // could be 벼룩 색상으로 "with flea colour"
  // could be 벼룩 색상이다 "it is flea colour"
  // a more specific one 뭐가 됐든 벼룩 색 아래에 가려진 물체가 "Whatever it is, objects covered under the color of fleas"
  writtenObservation: `
    이건 그러니까...벼룩 색? 이해가 안 된다. 내가 본 건 그게 전부다. 하지만 작다. 마치...모르겠다. 마치 억눌리고 있는 것 같다.
  `,
  data: {
    spectrophotometry: `
      SCP-3211 has a peak absorbance consistent with the colour 'puce'. Actual
      wavelength unknown.
    `,
    mass: "Between 0.51 kg and 3.90 kg, varies by experimenter",
    hume: "SCP-3211 has an abnormally high Hume reading",
    magnetism: "SCP-3211 is very slightly magnetic",
    visual: `SCP-3211 is "the colour puce"`,
    physical: `
      D-9981 knocked SCP-3211 onto the containment chamber floor and had
      difficulty putting it back onto the table
    `,
    questioning: "No response",
    sentience: "Negative response"
  },
  funFact: `
    it's some undefined, ordinary object which somehow has the colour puce
    bound to it and the region around it
  `,
  wormInfo: "심지어 저 벌레들도 벼룩 색이다."
})
