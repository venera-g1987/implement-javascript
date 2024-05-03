const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const isWeekend = (date) => [0, 6].indexOf(date.getDay()) !== -1;