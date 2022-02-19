/**
 * Task: https://javascript.info/prototype-methods#add-tostring-to-the-dictionary
 */

console.log(
    `https://javascript.info/prototype-methods#add-tostring-to-the-dictionary`);

let dictionary = Object.create(null);

// your code to add dictionary.toString method

// add some data
dictionary.apple = `Apple`;
dictionary.__proto__ = `test`; // __proto__ is a regular property key here

// only apple and __proto__ are in the loop
for (let key in dictionary) {
  console.log(key); // "apple", then "__proto__"
}

// your toString in action
console.log(dictionary); // "apple,__proto__"

/**
 * Task: https://javascript.info/prototype-methods#the-difference-between-calls
 */

console.log(
    `https://javascript.info/prototype-methods#the-difference-between-calls`);

function Rabbit(name) {
  this.name = name;
}

Rabbit.prototype.sayHi = function() {
  console.log(this.name);
};

let rabbit = new Rabbit('Rabbit');

rabbit.sayHi();
Rabbit.prototype.sayHi();
Object.getPrototypeOf(rabbit).sayHi();
rabbit.__proto__.sayHi();
