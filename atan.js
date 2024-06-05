const touchSupported = () => {('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch)};
const buildOutputPath = path.join(repositoryRootPath, 'out');
const merge = Object.assign({}, obj1, obj2);