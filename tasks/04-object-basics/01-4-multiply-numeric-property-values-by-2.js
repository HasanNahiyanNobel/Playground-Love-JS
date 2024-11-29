// Task: https://javascript.info/object#multiply-numeric-property-values-by-2

// Initialize demo object.
let menu = {
  width: 243,
  height: 300,
  title: "My menu"
};

// Print the original demo object.
printOutput(`<p class="lead">Original Demo Object</p>`);
printObject(menu);

// Apply the function to multiply the numeric values by 2.
multiplyNumeric(menu);

// Print the modified demo object.
printOutput(`<p class="lead">Modified Demo Object</p>`);
printObject(menu);

// Function Declaration(s).
/**
 * Multiplies only the numeric values of an object by 2.
 *
 * This function iterates over all properties of the given object and checks
 * if the property value is a number. If it is, the value is multiplied by 2.
 *
 * @param {Object} obj - The object whose numeric property values will be
 * modified.
 */
function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] === `number`) {
      obj[key] *= 2;
    }
  }
}

/**
 * Prints the properties and values of an object.
 *
 * This function iterates over all properties of the given object and prints
 * each key-value pair as an HTML element.
 *
 * @param {Object} obj - The object whose properties and values will be printed.
 */
function printObject(obj) {
  for (let key in obj) {
    printOutput(`<p>${key}: ${obj[key]}</p>`);
  }
}
