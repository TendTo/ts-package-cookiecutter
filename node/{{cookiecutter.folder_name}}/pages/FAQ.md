<details>
  <summary><b>What is this?</b></summary>
  <p>Topic-Carousel is a simple and lightweight library for the web that makes easier to create a carousel of elements with the possibility of filtering by topic.</p>
</details>

<details>
  <summary><b>What do you mean by "no dependency"?</b></summary>
  <p>All the dependency listed in the <i>package.json</i> file all used during development, mainly to test and build the package. The only thing shipped to the end user is the source code located in the <i>src</i> folder.</p>
</details>

<details>
  <summary><b>Why some config files are in the <i>config</i> folder while others are in the root of the project?</b></summary>
  <p>The reason is pretty simple: I don't really like a messy root folder, and all those files can be intimidating for a newcomer.
  This said, some configuration are usually picked up by the IDE o text editor, so it can provide some extra functionalities.
  Although it would be possible to point them to the right direction, I would prefer something that works out of the box.
  For this reason, prettier and eslint configurations are in the root folder, while the others have been hidden away.</p>
</details>
