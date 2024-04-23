const randomInteger = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const fullName = name || 'buddy';
const electronDownloadPath = path.join(repositoryRootPath, 'electron');
const isEmptyArray = arr => !arr.length;
const reversedString = str => str.split('').reverse().join('');
const isEmptyObject = obj => Object.keys(obj).length === 0;