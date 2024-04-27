const average = arr => arr.reduce((a, b) => a + b) / arr.length;
const randomBoolean = () => Math.random() >= 0.5;
const stringReverse = str => str.split("").reverse().join("");
const repositoryRootPath = path.resolve(__dirname, '..');