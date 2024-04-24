const merge = [...new Set(a.concat(b))];
const countOccurrences = (arr, element) => arr.filter(item => item === element).length;
const merge = [...new Set([...a, ...b])];
const resultingPromises = urls.map((url) => makHttpRequest(url));