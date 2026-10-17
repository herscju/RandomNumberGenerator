# RandomNumberGenerator

The JavaScript class generates random numbers, and the range within which they are generated can be set.

```
import RandomNumberGenerator from "./path/to/file/RandomNumberGenerator.js"

let generator = new RandomNumberGenerator();
generator.setMinMax(1, 100);

let random = generator.random();

console.log(generator.min + " ... " + generator.max + " --> " + random);
```
