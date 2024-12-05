// Task: https://javascript.info/array#sum-input-numbers

import readline from 'readline';

const prompt = `Please enter a number: `;

console.log(`\nSum of numbers entered by the user: ${await sumInput()}`);

/**
 * Prompts the user for numbers until a non-numeric value is entered and then
 * returns the sum of the numbers.
 *
 * @returns {Promise<unknown>}
 */
function sumInput() {
  let numbers = [];
  let sum = 0;

  return new Promise((resolve) => {
    function readNumber() {
      getUserResponse(prompt).then((response) => {
        if (isNumeric(response)) {
          numbers.push(parseFloat(response));
          readNumber();
        } else {
          numbers.forEach((number) => {
            sum += number;
          });
          resolve(sum);
        }
      });
    }

    readNumber();
  });
}

/**
 * Prompts the user for a response and returns it as a promise.
 *
 * @param {string} prompt - The prompt message to display to the user.
 * @returns {Promise<string>} A promise that resolves with the user's response.
 */
function getUserResponse(prompt) {
  return new Promise((resolve) => {
    const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    rl.question(prompt, (answer) => {
      rl.close();
      resolve(answer);
    });
  });
}

/**
 * Determines if a value is numeric.
 *
 * @param {any} value - The value to check.
 * @returns {boolean} True if the value is numeric; otherwise, false.
 */
function isNumeric(value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
