// Task: https://javascript.info/string#uppercase-the-first-character

console.log(ucFirst(`john`));

/**
 * Uppercases the first character of the given string.
 *
 * @param {string} str - The string to transform.
 * @returns {string} The transformed string with the first character in uppercase.
 */
function ucFirst(str) {
  if (str.length === 0) return str;
  return str[0].toUpperCase() + str.slice(1);
}
