const dayOfYear = (date) => Math.floor((date - new Date(date.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const value = ( 5 < 7 ) ? "True" : "False" ;
const flattenedArray = arr => [].concat(...arr);
const reversedString = str => str.split('').reverse().join('');