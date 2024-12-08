// Task: https://javascript.info/array-methods#create-an-extendable-calculator

let calc = new Calculator();
console.log(calc.calculate(`3 + 7`));
console.log(calc.calculate(`3 - 7`));

let powerCalc = new Calculator;
powerCalc.addMethod(`*`, (a, b) => a * b);
powerCalc.addMethod(`/`, (a, b) => a / b);
powerCalc.addMethod(`**`, (a, b) => a ** b);
console.log(powerCalc.calculate(`3 * 4`));
console.log(powerCalc.calculate(`39 / 3`));
console.log(powerCalc.calculate(`3 ** 4`));

function Calculator () {
  let addedMethods = {}; // Initialize an empty object.

  /**
   * Calculates the result of a simple arithmetic expression in the format
   * "NUMBER operator NUMBER" (space-delimited), where the operator is
   * either `+` or `-`.
   *
   * @param {string} expression - The arithmetic expression to evaluate.
   * @returns {number|undefined} The result of the calculation or undefined if
   * the operator is not supported.
   */
  this.calculate = function (expression) {
    // Split the expression into its components.
    const expressionSplit = expression.split(` `);

    const number1 = +expressionSplit[0];
    const operator = expressionSplit[1];
    const number2 = +expressionSplit[2];

    if (operator === `+`) return number1 + number2;
    if (operator === `-`) return number1 - number2;
    if (operator in addedMethods) {
      return addedMethods[operator](number1, number2);
    } else return undefined; // Unsupported operator.
  };

  /**
   * Adds a new method to the calculator.
   *
   * @param {string} name - The name of the operator.
   * @param {function} func - The function that implements the operator.
   */
  this.addMethod = function (name, func) {
    addedMethods[name] = func;
  };
}
