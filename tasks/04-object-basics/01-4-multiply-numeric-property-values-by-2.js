// Task: https://javascript.info/object#multiply-numeric-property-values-by-2

// Initialize demo object.
let menu = {
  width: 243,
  height: 300,
  title: `My menu`
};

// Print the original demo object.
console.log(`Original Demo Object`);
console.log(menu);

// Apply the function to multiply the numeric values by 2.
multiplyNumeric(menu);

// Print the modified demo object.
console.log(`Modified Demo Object`);
console.log(menu);

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
