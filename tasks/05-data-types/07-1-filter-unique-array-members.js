// Task: https://javascript.info/map-set#filter-unique-array-members

let values = [
  `Hare`, `Krishna`, `Hare`, `Krishna`,
  `Krishna`, `Krishna`, `Hare`, `Hare`, `:-O`,
];

console.log(unique(values));

/**
 * Filters unique elements from an array.
 *
 * @param {Array} arr - The array to filter.
 * @param {*} arr[] - The elements of the array, which can be of any type.
 * @returns {Array} An array containing only the unique elements from the input
 * array, preserving the order of their first occurrence.
 */
function unique(arr) {
  let setOfUniqueValues = new Set(arr);
  return Array.from(setOfUniqueValues);
}
