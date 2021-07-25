# LytePQ &middot; [![npm version](https://badge.fury.io/js/lytepq.svg)](https://badge.fury.io/js/lytepq) [![license](https://img.shields.io/github/license/robertzhidealx/lytepq)](https://github.com/robertzhidealx/lytepq/blob/main/LICENSE) [![PRs welcome](https://img.shields.io/badge/PRs-welcome-cyan)](https://github.com/robertzhidealx/lytepq/pulls)

A small and mighty priority queue library in JavaScript.

Servicing in parallel with **LyteSets** (under maintenance), a JavaScript disjoint sets library.

## Install

Install with either Yarn or NPM via `yarn add lytepq` or `npm install lytepq`.

## LytePQ

### Perks

✅ Packed with all basic priority queue operations.<br />
🚀 Unopinionated functionality exposure - you decide how to use LytePQ.<br />
💻 Perfect for competitive programming, online tests, interviews, etc. Dijkstra's in JS made easy!<br />
📔 Comprehensive JSDoc annotations and intellisense.<br />
🔭 TypeScript support.

### Getting Started

Import into your project in the following ways.

```js
import { LytePQ } from "lytepq"; // ES

const { LytePQ } = require("lytepq"); // CommonJS
```

### Demo

```js
// LytePQ is a min priority queue by default
const minQ = new LytePQ();
pq.push(2), pq.push(1), pq.push(3);
const smallest = pq.peek(); // returns the smallest item - 1

// creates a max priority queue with a custom comparator function
const maxQ = new LytePQ([2, 3, -1], (a, b) => b - a);
const largest = pq.pop(); // removes and returns the largest item - 3

// queue items can be objects with a matching comparator function
const objectQ = new LytePQ(
  [
    [0, 8],
    [1, 2],
    [2, 7],
  ],
  (a, b) => a[1] - b[1]
);
const smallestObj = objectQ.pop(); // [1, 2]
```

### Advanced Use Cases

```js
const minQ = new LytePQ();
pq.push(2), pq.push(1), pq.push(3);
// removes and returns the first instance of the specified item
const specified = pq.pop(2); // 2
```

<!-- ## LyteSets

### Perks

✅ Packed with all basic disjoint-set operations.<br />
🚀 Two implementations to choose from: array-based or tree-based (under development).<br />
💻 Perfect for competitive programming, online tests, interviews, etc. Core codebase contains as few as 20 lines of code.<br />
📔 Comprehensive JSDoc annotations and intellisense.<br />
🔭 TypeScript support.

### Getting Started

```js
import { LyteSets } from "lytepq"; // ES

const { LyteSets } = require("lytepq"); // CommonJS
```

### Demo

```js
const sets = new LyteSets(10);

sets.union(2, 10);
sets.union(5, 2);

// true
const isConnected = sets.query(2, 10) && sets.query(2, 5) && sets.query(5, 10);
``` -->

## Contributing

Issues and pull requests are welcome! Contact [me](https://twitter.com/Robert54161541) on Twitter if needed.

## Credits

This library took inspiration from [Vladimir Agafonkin](https://github.com/mourner)'s [tinyqueue](https://github.com/mourner/tinyqueue).
