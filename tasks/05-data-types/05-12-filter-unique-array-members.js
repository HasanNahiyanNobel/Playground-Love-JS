// Task: https://javascript.info/array-methods#filter-unique-array-members

let strings = [
  `Hare`, `Krishna`, `Hare`, `Krishna`,
  `Krishna`, `Krishna`, `Hare`, `Hare`, `:-O`,
];

console.log(unique(strings));

/**
 * Filters unique array members.
 * @param {Array} arr - The array to filter.
 * @returns {Array} The array with unique members.
 */
function unique(arr) {
  let uniqueItems = [];
  for (let item of arr) {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item);
    }
  }
  return uniqueItems;
}
