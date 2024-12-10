// Task: https://javascript.info/array-methods#get-average-age

let john = { name: `John`, age: 25 };
let pete = { name: `Pete`, age: 30 };
let mary = { name: `Mary`, age: 29 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr));

/**
 * Calculates the average age of an array of people.
 * @param {Array} arr - The array of people objects.
 * @returns {number} The average age.
 */
function getAverageAge(arr) {
  let totalAge = arr.reduce((totalAge, person) => totalAge + person[`age`], 0);
  return totalAge / arr.length;
}
