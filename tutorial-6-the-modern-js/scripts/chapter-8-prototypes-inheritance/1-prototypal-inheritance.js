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

for (let i = 0; i < 1; i++) {
  let headTime = getCalculationTime(head.glasses, 10e7);
  let pocketTime = getCalculationTime(pockets.glasses, 10e7);
  timesInCSV += `${headTime}, ${pocketTime}\n`;
}

console.log(timesInCSV);

/**
 * Task: https://javascript.info/prototype-inheritance#where-does-it-write
 */

console.log(
    `https://javascript.info/prototype-inheritance#where-does-it-write`);

let animal2 = {
  eat() {
    this.full = true;
  },
};

let rabbit2 = {
  __proto__: animal2,
};

rabbit2.eat();
console.log(animal2.full);
console.log(rabbit2.full);

/**
 * Task: https://javascript.info/prototype-inheritance#why-are-both-hamsters-full
 */

console.log(
    `https://javascript.info/prototype-inheritance#why-are-both-hamsters-full`);

let hamster = {
  stomach: [],
  eat(food) {
    // this.stomach.push(food);
    if (this.stomach === []) {
      this.stomach = [food];
    } else {
      this.stomach = this.stomach.concat([food]);
    }
  },
};

let speedy = {
  __proto__: hamster,
};

let lazy = {
  __proto__: hamster,
};

// This one found the food
speedy.eat(`apple`);
speedy.eat(`banana`);
console.log(speedy.stomach); // apple

// This one also has it, why? fix please.
console.log(lazy.stomach); // apple
