# uniform-random

> given two arguments and returned decimal or round random number

## Install

```
    npm i uniform-random
```

## Usage


```
const random = require('uniform-random');

const decimalRandom = random(1, 100);
const roundRandom = random(1, 100, 'absolute');

console.log(decimalRandom); // 23.21234345
console.log(roundRandom); // 23

```

## License

MIT (c) Muhsin ASLAN
