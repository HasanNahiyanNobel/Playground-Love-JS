/**
 * Task: https://javascript.info/prototype-inheritance#working-with-prototype
 */

console.log(
    `https://javascript.info/prototype-inheritance#working-with-prototype`);

let animal = {
  jumps: null,
};
let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // ? (1)
delete rabbit.jumps;
console.log(rabbit.jumps); // ? (2)
delete animal.jumps;
console.log(rabbit.jumps); // ? (3)

/**
 * Task: https://javascript.info/prototype-inheritance#searching-algorithm
 */

console.log(
    `https://javascript.info/prototype-inheritance#searching-algorithm`);

let head = {
  glasses: 1,
};

let table = {
  pen: 3,
};

let bed = {
  sheet: 1,
  pillow: 2,
};

let pockets = {
  money: 2000,
};

table.__proto__ = head;
bed.__proto__ = table;
pockets.__proto__ = bed;

function getCalculationTime(whatToCalculate, numberOfIterations) {
  let startTime = new Date();
  for (let i = 0; i < numberOfIterations; i++) {
    let temp = whatToCalculate;
  }
  let endTime = new Date();
  return endTime - startTime;
}

let timesInCSV = ``;

for (let i = 0; i < 0; i++) {
  let headTime = getCalculationTime(head.glasses, 10e7);
  let pocketTime = getCalculationTime(pockets.glasses, 10e7);
  timesInCSV += `${headTime}, ${pocketTime}\n`;
}

console.log(timesInCSV);
