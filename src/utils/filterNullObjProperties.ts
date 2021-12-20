export const filterNullProperties: (object: Record<string, any>) => Record<string, any> = (object) => {
  return Object.keys(object).reduce((newObj, key) => {
    const value = object[key]
    if (value !== null) {
      // @ts-ignore
      newObj[key] = value
    }
    return newObj
  }, {})
}
