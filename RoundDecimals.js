const repositoryRootPath = path.resolve(__dirname, '..');
const executableName = getExecutableName(channel, appName);
const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);