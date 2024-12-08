// Task: https://javascript.info/array-methods#filter-range

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

console.log(filtered);
console.log(arr);

/**
 * Filters an array to include only the elements within the specified range.
 *
 * @param {number[]} arr - The array to filter.
 * @param {number} a - The lower bound of the range (inclusive).
 * @param {number} b - The upper bound of the range (inclusive).
 * @returns {number[]} The filtered array with elements within the range [a, b].
 */
function filterRange(arr, a, b) {
  return arr.filter(item => (item >= a && item <= b));
}
