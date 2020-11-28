# @faykah/first-names-en

An English first names dataset.

## Summary

- [About](#about)
- [Features](#features)
- [Installation](#installation)
- [Examples](#examples)

## About

[Faykah](https://github.com/faykah/core) is a Node.js library that help create generators for various data.

This library contains a data set of English first names suited for mocking and testing emails.

## Features

- Provides a variable containing 63 first names of men and women
- Provides a browser version
- Provides its own Typescript definition

## Installation

Using NPM:

```bash
npm install --save-dev @faykah/first-names-en
```

Using Yarn:

```bash
yarn add --dev @faykah/first-names-en
```

## Examples

- [1. Create an array generator](#1-create-an-array-generator)
- [2. Standalone usage](#2-standalone-usage)

### 1. Create an array generator

In this example, we will create a first name generator.

ES6

```ts
import { createArrayGenerator } from "@faykah/core";
import { firstNames } from "@faykah/first-names-en";

const generateFirstName = createArrayGenerator(firstNames);

generateFirstName(); // "Oscar"
generateFirstName(); // "Isabella"
generateFirstName(); // "Samantha"
```

CJS

```ts
const { createArrayGenerator } = require("@faykah/core");
const { firstNames } = require("@faykah/first-names-en");

const generateFirstName = createArrayGenerator(firstNames);

generateFirstName(); // "Oscar"
generateFirstName(); // "Isabella"
generateFirstName(); // "Samantha"
```

Browser

```html
<body>
	<script type="text/javascript" src="https://unpkg.com/@faykah/core@0.1.0/lib/index.browser.min.js" defer></script>
	<script type="text/javascript" src="https://unpkg.com/@faykah/first-names-en@0.1.0/lib/index.browser.min.js" defer></script>

	<script type="text/javascript" defer>
		const generateFirstName = Faykah.createArrayGenerator(Faykah.firstNames);

		generateFirstName(); // "Oscar"
		generateFirstName(); // "Isabella"
		generateFirstName(); // "Samantha"
	</script>
</body>
```

### 2. Standalone usage

In this example, we will loop through the first names to see what is inside.

ES6

```ts
import { firstNames } from "@faykah/first-names-en";

for (const firstName of firstNames) {
	console.log(firstName);
}
```

CJS

```ts
const { firstNames } = require("@faykah/first-names-en");

for (const firstName of firstNames) {
	console.log(firstName);
}
```

Browser

```html
<body>
	<script type="text/javascript" src="https://unpkg.com/@faykah/first-names-en@0.1.0/lib/index.browser.min.js" defer></script>

	<script type="text/javascript" defer>
		for (const firstName of Faykah.firstNames) {
			console.log(firstName);
		}
	</script>
</body>
```
