const cookie = name => `; ${document.cookie}`.split(`; ${name}=`).pop().split(';').shift();
const randomBoolean = () => Math.random() >= 0.5;