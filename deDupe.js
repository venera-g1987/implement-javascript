const isEmptyObject = obj => Object.keys(obj).length === 0;
const arrayContains = (arr, element) => arr.includes(element);
const merge = Object.assign({}, obj1, obj2);