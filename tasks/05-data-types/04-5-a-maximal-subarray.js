// Task: https://javascript.info/array#a-maximal-subarray

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));

/**
 * Finds the maximum sum of a subarray in the given array.
 *
 * @param {number[]} arr - The array of numbers.
 * @returns {number} The maximum sum of a subarray.
 */
function getMaxSubSum(arr) {
  let maxSum = 0;
  let currentSum = 0;

  for (let item of arr) {
    currentSum = Math.max(item, currentSum + item);
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}