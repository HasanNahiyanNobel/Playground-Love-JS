// Task: https://javascript.info/array-methods#copy-and-sort-array

let arr = [`HTML`, `JavaScript`, `CSS`];
let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);

/**
 * Copies and sorts an array.
 *
 * @param {Array} arr - The array to be copied and sorted.
 * @returns {Array} A new sorted array.
 */
function copySorted (arr) {
  return arr.slice().sort();
}
