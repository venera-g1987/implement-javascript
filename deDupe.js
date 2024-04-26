const flattenedArray = arr => [].concat(...arr);
const isArray = (arr) => Array.isArray(arr);
console.log(false === '0');
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;