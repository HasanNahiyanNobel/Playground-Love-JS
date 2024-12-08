// Task: https://javascript.info/array-methods#filter-range-in-place

let arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4);
console.log(arr);

/**
 * Filters the array in place to keep only the elements that are between `a` and
 * `b` (inclusive).
 *
 * @param {number[]} arr - The array to be filtered.
 * @param {number} a - The lower bound of the range.
 * @param {number} b - The upper bound of the range.
 */
function filterRangeInPlace (arr, a, b) {
  arr.filter((item, index) => {
    // Remove the item from the array if it is not in the range.
    if (item < a || item > b) {
      arr.splice(index, 1);
    }
  });
}
