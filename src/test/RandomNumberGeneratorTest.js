/**
 * 
 */
import RandomNumberGenerator from "./../main/RandomNumberGenerator.js"

let generator = null;
let random = 0;

generator = new RandomNumberGenerator();
generator.setMinMax(1, 100);
random = generator.random();

console.log("Case A: " + generator.min + " ... " + generator.max + " --> " + random);

const minMaxNode = document.getElementById("minMax");
minMaxNode.innerText = "Case A: " + generator.min + " ... " + generator.max + " --> " + random;

generator = new RandomNumberGenerator();
generator.setMax(5);
random = generator.random();

console.log("Case B: " + generator.min + " ... " + generator.max + " --> " + random);

const maxOnlyNode = document.getElementById("maxOnly");
maxOnlyNode.innerText = "Case B: " + generator.min + " ... " + generator.max + " --> " + random;