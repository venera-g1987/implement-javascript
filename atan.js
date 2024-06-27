const uniqueArray = arr => [...new Set(arr)];
const executableName = getExecutableName(channel, appName);
const apmRootPath = path.join(repositoryRootPath, 'apm');