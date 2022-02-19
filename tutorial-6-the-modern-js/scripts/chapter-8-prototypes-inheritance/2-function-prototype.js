/**
 * Task: https://javascript.info/function-prototype#changing-prototype
 */

console.log(`https://javascript.info/function-prototype#changing-prototype`);

function Rabbit() {

}

Rabbit.prototype = {
  eats: true,
};

let rabbit = new Rabbit();

// 1
// console.log(rabbit.eats);

// 2
// Rabbit.prototype.eats = false;
// console.log(rabbit.eats);

// 3
// delete rabbit.eats;
// console.log(rabbit.eats);

// 4
delete Rabbit.prototype.eats;
console.log(rabbit.eats);

/**
 * Task: https://javascript.info/function-prototype#create-an-object-with-the-same-constructor
 */

console.log(
    `https://javascript.info/function-prototype#create-an-object-with-the-same-constructor`);
