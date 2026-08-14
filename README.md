## A TextMesh Pro style markup parser for making HTML easier.

# Installation:

```npm install tmp-parser``` 

# How To Use:

```js
const { parseTMP } = require("tmp-parser");

const html = parseTMP(
  "<size=50>This <color=red>is</color><color=blue>an </color>example. </size>"
);

console.log(html);
```

# Photo Examples:

![Example1](./readme_ressources/example1.png)

# Additional Notes:
- More TextMesh Pro tags will come, stay tuned!
