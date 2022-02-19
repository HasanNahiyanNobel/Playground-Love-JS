/**
 * Pre-task researches
 */

console.log(`Pre-task researches`);

let obj = {};
console.log(obj);

let arr = [1, 2, 3];
console.log(arr);

console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);

console.log(arr.__proto__.__proto__);
console.log(arr.__proto__.__proto__ === Object.prototype);

console.log(arr.__proto__.__proto__.__proto__);

/**
 * Task: https://javascript.info/native-prototypes#add-method-f-defer-ms-to-functions
 */

console.log(
    `https://javascript.info/native-prototypes#add-method-f-defer-ms-to-functions`);

Function.prototype.defer = function(delayMS) {
  setTimeout(() => {
    this.call(this);
  }, delayMS);
};

function f() {
  console.log(`Hello!`);
}

console.log(f.__proto__ === Function.prototype);

f.defer(100);

/**
 * Task: https://javascript.info/native-prototypes#add-the-decorating-defer-to-functions
 */

console.log(
    `https://javascript.info/native-prototypes#add-the-decorating-defer-to-functions`);
