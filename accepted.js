// A method that filters unacceptable properties

module.exports = (acceptedFields = [], exactFields = {}) => {
    const acceptedFieldsSet = new Set(acceptedFields)
    Object.keys(exactFields).map(field => {
        if (!acceptedFieldsSet.has(field)) {
            delete exactFields[field]
        }
    })
    return exactFields
}