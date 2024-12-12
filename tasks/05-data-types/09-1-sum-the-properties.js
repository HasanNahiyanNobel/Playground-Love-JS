// Task: https://javascript.info/keys-values-entries#sum-the-properties

let salaries = {
  'John': 100,
  'Pete': 300,
  'Mary': 250,
};

console.log(sumSalaries(salaries));

/**
 * Sums the properties of the given salaries object.
 *
 * @param {Object} salaries - The object containing salary properties.
 * @param {number} salaries[].* - The salary values.
 * @returns {number} The sum of all salary values.
 */
function sumSalaries(salaries) {
  return Object.values(salaries).reduce((sum, value) => sum + value, 0);
}
