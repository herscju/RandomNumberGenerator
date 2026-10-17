/**
 * 
 */
import RandomNumberGenerator from "./../main/RandomNumberGenerator.js"

let generator = new RandomNumberGenerator();
generator.setMinMax(1, 100);
let random = generator.random();

console.log(generator.min + " ... " + generator.max + " --> " + random);