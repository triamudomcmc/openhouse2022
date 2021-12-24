const correction = {
  "์ุ": "ุ์", "ุ่": "ุ่", "ุ้": "ุ้", "ุ๊": "ุ๊", "ุ๋": "ุ๋", "็ุ": "ุ็",
  "์ิ": "ิ์", "่ิ": "ิ่", "้ิ": "ิ้", "๊ิ": "ิ๊", "๋ิ": "ิ๋", "็ิ": "ิ็",
  "์ื": "ื์", "่ื": "ื่", "้ื": "ื้", "๊ื": "ื๊", "๋ื": "ื๋", "็ื": "ื็",
  "์ี": "ี์", "่ี": "ี่", "้ี": "ี้", "๊ี": "ี๊", "๋ี": "ี๋", "็ี": "ี็",
  "์ึ": "ึ์", "่ึ": "ึ่", "้ึ": "ึ้", "๊ึ": "ึ๊", "๋ึ": "ึ๋", "็ึ": "ึ็",
  "ิุ์": "ุิ์", "์ุิ": "ุิ์", "์ิุ": "ุิ์", "ิ์ุ": "ุิ์", "ุ์ิ": "ุิ์"
  , "เเ": "แ","ํา": "ำ"
}

export const fixGrammar = (text: string) => {
  let fixed = text
  Object.keys(correction).forEach(item => {
    // @ts-ignore
    fixed = fixed.replace(new RegExp(item, "g"), correction[item])
  })

  return fixed.replace(/\u200B/g,'').trim()
}


export const searchKeyword = (arr: any, keyword: string, keySelector: (obj: any) => string) => {
  let topPrimary: any = [],topSecondary: any = [], bottom: any = []
  const keyLength = keyword.length
  arr.forEach((val: any) => {
    if (fixGrammar(keyword.toLowerCase()) === fixGrammar(keySelector(val).slice(0, keyLength).toLowerCase())) return topPrimary.push(val)
    if (fixGrammar(keySelector(val).toLowerCase()).includes(fixGrammar(keyword.toLowerCase()))) return topSecondary.push(val)
    return bottom.push(val)
  })
  return [...topPrimary, ...topSecondary, ...bottom]
}

export const objToArr = (obj: any, filter = (val: any) => val) => {
  return Object.keys(obj).map(key => {
    return filter({clubID: key, ...obj[key]})
  }).filter(i => (i !== null))
}
