const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;