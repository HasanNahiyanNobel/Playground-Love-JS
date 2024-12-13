// Task: https://javascript.info/keys-values-entries#count-properties

let user = {
  name: `John`,
  age: 30,
};

console.log(count(user));

/**
 * Counts the number of properties in the given object.
 *
 * @param {Object} obj - The object whose properties are to be counted.
 * @returns {number} The number of properties in the object.
 */
function count(obj) {
  return Object.keys(obj).length;
}
