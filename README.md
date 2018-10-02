[![Build Status](https://travis-ci.org/fireflysemantics/ease.svg?branch=master)](https://travis-ci.org/fireflysemantics/ease)
[![Coverage Status](https://coveralls.io/repos/github/fireflysemantics/ease/badge.svg?branch=master)](https://coveralls.io/github/fireflysemantics/ease?branch=master)

# @fireflysemantics/ease

Animation easing functions written typescript.

## Installation 
```sh
npm i @fireflysemantics/ease
```

## Usage

### TypeScript
```typescript
import { linearEase } from '@fireflysemantics/ease';
let result:number = linearEase(10,10,100,100);
console.log("The linear ease value is: ", result);
```

### Javascript
```javascript
let linearEase = require('@fireflysemantics/ease');
let result:number = linearEase(10,10,100,100);
console.log("The linear ease value is: ", result);
```

## Test 
```sh
npm run test
```

## Typedoc

From the root project directory run `typedoc` to generate the code documenation

``` sh
npm i
npm run doc
npm i -g http-server
http-server doc
```

Now open `localhost:8080` and the typedoc can be seen.