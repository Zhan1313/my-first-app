export const updateObjectInArray = (items, itemId, objPropName, newObjProperty) => {
    return items.map(item => {
        if (item[objPropName] === itemId) {
            return {...item, ...newObjProperty}
        }
        return item;
    })
}