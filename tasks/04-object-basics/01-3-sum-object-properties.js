// Task: https://javascript.info/object#sum-object-properties

// Define the demo objects.
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130,
};

let emptySalaries = {};

let sum = undefined; // Variable to store the sum of the salaries.

// Print sum of the salaries.
sum = sumOfTheSalaries(salaries);
console.log(`Sum of the salaries: ${sum}`);
sum = sumOfTheSalaries(emptySalaries);
console.log(`Sum of the empty salaries: ${sum}`);

// Function Definition(s)
/**
 * Calculates the sum of all salaries in the given object.
 *
 * @param {Object} salaries - An object where keys are employee names and values
 * are their salaries.
 * @returns {number} - The sum of all salaries.
 */
function sumOfTheSalaries(salaries) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}
