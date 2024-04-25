const greetings = age < 18 ? 'You are not old enough' : 'You are young!';
var uAgent = (typeof navigator !== 'undefined') ? navigator.userAgent : null;
const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const randomNumberInRange = (min = 0, max = 100) => Math.floor(Math.random() * (max - min + 1)) + min;
var arr2 = arr1.reverse();
const merge = [...new Set([...a, ...b])];