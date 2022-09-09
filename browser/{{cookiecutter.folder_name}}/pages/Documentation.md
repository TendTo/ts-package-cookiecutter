All the documentation you see has been generated automatically from the in-code comments using [typedoc](https://typedoc.org/) and some plugins:

- [@knodes/typedoc-plugin-pages](https://www.npmjs.com/package/@knodes/typedoc-plugin-pages) to add some markdown pages to the documentation
- [typedoc-plugin-missing-exports](https://www.npmjs.com/package/typedoc-plugin-missing-exports) to show the internal components that are not exported

## Generate the documentation

To generate the documentation, simply run

```bash
npm run docs
```

A new folder, _docs_ will be created.
Inside you will find the generated documentation.

To visualize the result in the browser, you can use the command

```bash
npm run start:dev
```

## typedoc configuration

The configuration used to generate the documentation can be found in the _typedoc.json_ file at the root of the project.

> ℹ️ If you are interested in learning more about all the possible settings, you can run `npx typedoc --help`.
> All the options listed can be added to the config file. Also, check the [documentation](https://typedoc.org/guides/options/)

The part that may be more interesting is the **pages** section.
All the pages are markdown files located in the _pages_ folder.

```json
{
  "pluginPages": {
    "pages": [
      {
        "title": "Getting Started",
        "source": "Getting-Started.md"
      },
      {
        "title": "Examples",
        "source": "Examples.md"
      },
      {
        "title": "Documentation",
        "source": "Documentation.md"
      },
      {
        "title": "FAQ",
        "source": "FAQ.md"
      },
      {
        "title": "License and Copyright",
        "source": "License-and-Copyright.md"
      }
    ]
  }
}
```

It is possible to create nested pages with the following syntax:

```json
{
  "pluginPages": {
    "pages": [
      {
        "name": "Configuration",
        "childrenDir": "configuration",
        "children": [
          { "name": "Configuration file", "source": "file.md" },
          { "name": "CLI options", "source": "cli.md" }
        ]
      }
    ]
  }
}
```
