console.log(1 +  +"2" + "2");
const merge = (a, b) => a.concat(b);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const isEmptyArray = arr => !arr.length;