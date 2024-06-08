const round = (n, d) => Number(Math.round(n + "e" + d) + "e-" + d);
const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const isAppleDevice = () => /Mac|iPod|iPhone|iPad/.test(navigator.platform);