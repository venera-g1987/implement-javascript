const shuffledArray = array.sort(() => Math.random() - 0.5); 
const merge = (a, b) => a.concat(b);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';