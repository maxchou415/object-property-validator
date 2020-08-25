// A method that checks lost elements

module.exports = (requiredFields = [], exactFields = {}) => {
  const exactFieldKeys = Object.keys(exactFields)

  const formatedFields = new Set(exactFieldKeys);
  const lostFields = []
  requiredFields.forEach(field => {
      if (!formatedFields.has(field)) {
      lostFields.push(field)
      }
  })

  // Unexpected DataTypes validator
  exactFieldKeys.forEach(key => {
    if (exactFields[key] === NaN || exactFields[key] === null || !exactFields[key]) {
      lostFields.push(key)
    }
  })

  if (lostFields.length === 0) {
    return true
  }
  throw new Error(`Required Field Lost: ${JSON.stringify(lostFields)}`)
}