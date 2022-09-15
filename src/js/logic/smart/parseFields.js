export const parseFields = (availableFields) => {
    const fieldList = [];
    for (const col in availableFields) {
        for (let x = 0; x < availableFields[col].length; x++) {
            fieldList.push([parseInt(col), availableFields[col][x]])
        }
    }
    return fieldList
};