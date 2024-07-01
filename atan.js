const allResults = await Promise.all(items.map(async (item) => {}));
const capitalizeAllWords = str => str.replace(/\b\w/g, char => char.toUpperCase());
const toggleElementDisplay = element => element.style.display = (element.style.display === "none" ? "block" : "none");