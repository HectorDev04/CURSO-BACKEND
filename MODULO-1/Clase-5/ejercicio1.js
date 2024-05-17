const _ = require("lodash");

const array = [1, 2, 3, 4, 5];

const shuffleArray = _.shuffle(array);

console.log("Array original: " + array);
console.log("Array mezclado: " + shuffleArray);
