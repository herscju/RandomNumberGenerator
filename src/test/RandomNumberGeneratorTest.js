/**
 * 
 */
import RandomNumberGenerator from "./../main/RandomNumberGenerator.js"

let generator = null;
let random = 0;

generator = new RandomNumberGenerator();
generator.setMinMax(1, 100);
random = generator.random();

console.log("Case 1: " + generator.min + " ... " + generator.max + " --> " + random);

generator = new RandomNumberGenerator();
generator.setMax(5);
random = generator.random();

console.log("Case 2: " + generator.min + " ... " + generator.max + " --> " + random);
