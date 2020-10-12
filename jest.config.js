const { readFileSync } = require('fs');

/** WARNING this path resolve function applies to current example project structure only.
 *  You will have to write your own wrapper or manually specify mapping object */
const resolveNameMapper = () => {
  const tsconfig = JSON.parse(readFileSync(__dirname + '/tsconfig.json'));
  const pathes = tsconfig.compilerOptions.paths;
  const result = {};
  for (const path in pathes) {
    const key = path.replace('@', '^@').replace('*', '(.*)$');
    const value = '<rootDir>/' + pathes[path][0].replace('*', '$1');
    result[key] = value;
  }
  return result;
}

module.exports = {
  testEnvironment: 'node',
  moduleNameMapper: resolveNameMapper()
};
