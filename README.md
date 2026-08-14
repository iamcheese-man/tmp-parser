## A TextMesh Pro style markup parser for making HTML easier.

# Installation:

```npm install tmp-parser``` 

# How To Use:

```js
const { parseTMP } = require("tmp-parser");

const html = parseTMP(
  "<size=50>Hello <color=red>world</color></size>"
);

console.log(html);
```

# Examples:

![Example1](./readme_ressources/example1.png)

# Additional Notes:
- More TextMesh Pro tags will come, stay tuned!
