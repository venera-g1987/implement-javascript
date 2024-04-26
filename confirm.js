const shuffleArray = arr => arr.sort(() => Math.random() - 0.5);
const isEmptyObject = obj => Object.keys(obj).length === 0;
var DELIM_SIZE = 4;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;
const uniqueArr = (arr) => [...new Set(arr)];
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;