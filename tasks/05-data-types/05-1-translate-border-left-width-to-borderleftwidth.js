// Task: https://javascript.info/array-methods#translate-border-left-width-to-borderleftwidth

console.log(camelize(`background-color`));
console.log(camelize(`list-style-image`));
console.log(camelize(`-webkit-transition`));

/**
 * Converts a dash-separated string to camelCase.
 *
 * @param {string} str - The dash-separated string to convert.
 * @returns {string} - The camelCase version of the string.
 */
function camelize(str) {
  return str
    .split(`-`)
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join(``);
}
