## Installing

To install the package and make it available in a node.js project, simply install it with npm

```bash
npm install --save {{cookiecutter.package_name}}
```

### Importing

Once it has been installed, it can easily be imported in your project, depending on the import method you need.

```js
// Common js module
const { Test } = require('{{cookiecutter.package_name}}');
// ESM module
import { Test } from '{{cookiecutter.package_name}}';
```

## Web Browser

It is generally better practice (for security reasons) to copy the [library](https://unpkg.com/{{cookiecutter.package_name}}@{{cookiecutter.package_version}}/dist/bundle/{{cookiecutter.package_name}}.min.js) to your own web server and serve it yourself, but for prototyping (or laziness) you can load it directly in the html file with the **script** tag.

```html
<script
  src="https://unpkg.com/{{cookiecutter.package_name}}@{{cookiecutter.package_version}}/dist/bundle/{{cookiecutter.package_name}}.min.js"
  type="application/javascript"
  async
></script>
```

## Basic example

```js
// TODO
```
