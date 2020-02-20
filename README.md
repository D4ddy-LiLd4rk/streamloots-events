# streamloots-events

![npm](https://img.shields.io/npm/v/streamloots-events)
![npm bundle size](https://img.shields.io/bundlephobia/min/streamloots-events)
![npm](https://img.shields.io/npm/dt/streamloots-events)
![NPM](https://img.shields.io/npm/l/streamloots-events)

> Simplifies subscribing Streamloots-Events with TypeScript

This package makes it easier to listen for Streamloots-Events such as card redemptions using [TypeScript](http://www.typescriptlang.org/). It wraps the popular [web-request](https://www.npmjs.com/package/web-request) package, extending it with an interface for [Streamloots](https://www.streamloots.com/).

> Disclaimer: This is not an official supported API of Streamloots! This is more of a clever workaround.

## Examples

Get redeemed card...
```js
const streamlootsStream = StreamlootsRequest.listen("Your-Token-ID");

streamlootsStream
  .on('redemption', cardObj => {
    console.log(cardObj.toString());
  });
```

Get purchased chests...
```js
const streamlootsStream = StreamlootsRequest.listen("Your-Token-ID");

streamlootsStream
  .on('purchase', purchaseObj => {
    console.log(purchaseObj.toString());
  });
```

Get gifted chests...
```js
const streamlootsStream = StreamlootsRequest.listen("Your-Token-ID");

streamlootsStream
  .on('gift', giftObj => {
    console.log(giftObj.toString());
  });
```

## Getting Started

Make sure you're running Node v4 and TypeScript 1.7 or higher...
```
$ node -v
v4.2.6
$ npm install -g typescript tsd
$ tsc -v
Version 1.7.5
```

Install the *streamloots-events* package and the typings definitions for Node.js...
```
$ npm install streamloots-events
$ tsd install node
```

Write some code...
```js
import * as StreamlootsRequest from "streamloots-events";

const streamlootsStream = StreamlootsRequest.listen("Your-Token-ID");

streamlootsStream
  .on('gift', giftObj => {
    console.log(giftObj.toString());
  })
  .on('purchase', purchaseObj => {
    console.log(purchaseObj.toString());
  })
  .on('redemption', cardObj => {
    console.log(cardObj.toString());
  });
```

Save the above to a file (index.ts), build and run it!
```
$ tsc index.ts typings/node/node.d.ts --target es6 --module commonjs
$ node index.js
<!doctype html><html ...
```

Special Thanks to [SaviorXTanren](https://github.com/SaviorXTanren/streamloots-service-sample) for his inspirational code over on GitHub.