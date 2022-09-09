# {{cookiecutter.package_name}}

{{cookiecutter.package_description}}

## ▶️ Use

Install the package

```bash
npm i {{cookiecutter.package_name}}
```

or include the script directly in your _html_ file with

```html
<script src="https://unpkg.com/{{cookiecutter.package_name}}@{{cookiecutter.package_version}}/dist/bundle/{{cookiecutter.package_name}}.min.js"></script>
```

## 📖 Documentation

Check the complete documentation [here](https://{{cookiecutter.author}}.github.io/{{cookiecutter.package_name}}/).

## 💻 Development

If you want to improve the package or you are just curious on how it works, follow this section.

### 🗂 Folders structure

```yaml
.
├── .github     # github actions
├── .husky      # git hooks
├── config      # configuration files for rollup, lint-staged and playwright
├── dist        # [AFTER npm run build] built package, to be used in the browser
├── docs        # [AFTER npm run docs] documentation
├── lib         # [AFTER npm run build] built package, to be used with node.js
├── public      # base folder used by the dev web server
├── src         # source code
├── tests       # unit and end to end tests
└── README.md   # THIS FILE
```

### 🧾 Requirements

- [node.js 14.x](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (or similar package manager)

#### Notable dev-dependencies

- [typescript](https://www.typescriptlang.org/) to make programming decent
- [rollup.js](https://rollupjs.org/guide/en/) for building the package
- [playwright](https://playwright.dev/) for end to end tests
- [mocha](https://mochajs.org/) for unit tests

### 🔧 Setup

Install the dependencies with

```bash
npm install
```

### 🌐 Standalone web server

To play around and see for yourself any changes to the library, you can use the integrated web server.
Just run

```bash
# Build the package locally and start the web server
npm run build:dev
npm start
# Allows live reload by refreshing the page
npm run start:dev
```

### 🧱 Build

Make sure everything is clean by running

```bash
npm run clean
```

then all the versions of the package can be built with the command

```bash
npm run build
```

### 🧪 Tests

#### Unit

After having installed the dependencies, run

```bash
npm run test:unit
```

#### E2E

After having installed the dependencies, complete the setup required by playwright with

```bash
npx playwright install --with-deps
```

you can then run

```bash
npm run test:e2e
```

> ℹ️ The e2e test configuration is located in _config/playwright.config.ts_.
> Right now, only chromium and firefox are tested, but it is possible to also include safari (see commented section).
