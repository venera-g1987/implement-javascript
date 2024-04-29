const stringReverse = str => str.split("").reverse().join("");
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();