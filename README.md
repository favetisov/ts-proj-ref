This small repo shows how to use [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) in a Typescript project.

###### Project structure contains following modules: 
 - `shared` - module with common interfaces and logic, does not depend on any other module
 - `football` and `basketball` actual business logic implementations that use code from `shared`,
  but do not know anything about each other.
- `football/tests` and `basketball/tests` - tests. They are separated from parent modules so parent module cannot accidentally access anything from testing space.
 
Project also shows how you can workaround a known Typescript issue: absolute paths aren't 
resolved when transpiling TS to JS. So you have either to run code with `tsconfig-paths` or build JS with other compilers like Babel.

On branch `master` first approach is presented: scripts run with `tsconfig-path/register` prefix, tests have `jest.config.js` config that resolves paths. 
(also notice that compilation target is set to ES5, because _jest_ does not support ESM modules).

###### Bonus 
- using tsc-watch to run tests after each compilation (see `npm run dev`)
- `.prettierrc`, `.editorconfig` and `.idea` configs got appropriate code formatting.  
  
