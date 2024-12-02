// Task: https://javascript.info/object#check-for-emptiness

let schedule = {}; // An empty object.
console.log(isEmpty(schedule));
schedule[`8:30`] = `get up`; // Now the object has a property.
console.log(isEmpty(schedule));

// Function Declaration(s)
/**
 * Checks if an object is empty (has no enumerable properties).
 *
 * @param {Object} obj - The object to check for emptiness.
 * @returns {boolean} - Returns `true` if the object is empty, otherwise
 * `false`.
 */
function isEmpty(obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}
