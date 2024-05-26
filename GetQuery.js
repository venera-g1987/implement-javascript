console.log(false == '0');
const resultingPromises = urls.map((url) => makHttpRequest(url));
const copyTextToClipboard = async (text) => { await navigator.clipboard.writeText(text)};