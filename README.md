# <img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/typescript.svg#gh-light-mode-only" alt="Typescript" align=left width=35 height=35><img src="https://raw.githubusercontent.com/simple-icons/simple-icons/develop/assets/readme/typescript-white.svg#gh-dark-mode-only" alt="Typescript" align=left width=35 height=35> Typescript package cookiecutter

[Cookiecutter](https://github.com/cookiecutter/cookiecutter) template for a package using typescript.
Comes with all kinds of dev tools configured:

- [prettier](https://prettier.io/)
- [eslint](https://eslint.org/)
- [rollup.js](https://rollupjs.org/)
- [mocha](https://mochajs.org/)
- [Github actions](https://github.com/features/actions)
- [playwright](https://playwright.dev/) (only browser)
- [http-server](https://www.npmjs.com/package/http-server) (only browser)

Even if you don't end up using the template, it may still provide some inspiration for your own configuration.

> ❗️ The templates appear to be functional, but are not battle tested.
> If you spot something that does not seem intended or have any doubts, feel free to open an issue.

## Usage

You need to have [cookiecutter](https://pypi.org/project/cookiecutter/) installed.
The, to use this template in a brand new project, run

```bash
# For a package meant to run in the browser
cookiecutter gh:TendTo/ts-package-cookiecutter --directory browser
# For a package meant to run in the node.js environment
cookiecutter gh:TendTo/ts-package-cookiecutter --directory node
```

During the configuration, you will be presented with some options.
You can always refactor them later.

Then, initialize the git repository, so that husk can setup properly, and install node's dependencies:

```bash
git init
npm install
```

## Manual intervention

### Package.json

Things you may want to add to your _package.json_

```json
{
  "license": "MIT",
  "homepage": "https://www.example.com",
  "repository": {
    "type": "git",
    "url": "https://github.com"
  },
  "keywords": [""]
}
```

### Github actions

All the action's **on** configuration is meant to be customized to better fit your needs.
This includes, but is not limited to

- branch names
- manual dispatch
- branch events

## Available scripts

These are all the scripts available in the project.
They can be called with

```
npm run <script name>
```

> ℹ️ The ones beginning with `pre<script name>` or `post<script name>` will run automatically when the `<script name>` is run.

```yaml
start: |
  run the typescript entrypoint with ts-node. 
  May cause errors if any browser specific function is invoked
serve: start the web server on port 3000 # [Browser only]
serve:dev: | # [Browser only]
  start the web server on port 3000 while watching the src folder for changes.
  To apply them, you will need to refresh the page
serve:docs: start the web server on port 8080 to take a look at the documentation generated # [Browser only]
watch: watch for changes in the src folder # [Browser only]
prepare: prepare the husky git pre-commit hook
test: run both unit and end to end tests
pretest:e2e: make sure the current build is up to date before testing # [Browser only]
test:e2e: run the end to end tests # [Browser only]
test:unit: run the unit tests # [Browser only]
clean: remove both lib and dist folders
prebuild: make sure the folders are cleared before building
build: build the package for node (cjs, esm) and browser (single bundle, esm)
postbuild: generate type bindings
build:dev: build the project for the local web server # [Browser only]
format: use prettier to format the code
lint: use eslint to lint the code
lint-staged: apply linting on the pre-commit hook
docs: generate the documentation
```

## Publishing the package

Once you are satisfied with the state of the package, you can start thinking about publishing it.
First of all, build the package with

```bash
npm run build
```

To test if the behavior is the one you expect, use the command

```bash
npm pack
```

to create an archive with the files you will distribuite.
Use it in another javascript or typescript project by installing it with

```bash
npm install <path to the .tgz file>
```

If everything is working as intended, you may want to publish your hard work on the npm registry.
To do so, you can use

```bash
npm publish
```

> ❗️ Always remember to run `npm run build` before publishing or packaging.
> If you feel like that's the only operation you need, consider adding
>
> ```json
> {
>   "prepublish": "npm run build"
> }
> ```
>
> to your _package.json_
