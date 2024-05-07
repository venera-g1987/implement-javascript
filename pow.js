const channel = getChannel(computedAppVersion);
const stripHtml = html => (new DOMParser().parseFromString(html, 'text/html')).body.textContent || '';