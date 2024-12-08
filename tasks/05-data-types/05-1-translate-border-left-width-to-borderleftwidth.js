// Task: https://javascript.info/array-methods#translate-border-left-width-to-borderleftwidth

console.log(camelize(`three-words-here`));
console.log(camelize(`two-words`));
console.log(camelize(`one`));
console.log(camelize(``));
console.log(camelize(`-hyphen-before`));
console.log(camelize(`hyphen-after-`));
console.log(camelize(`-hyphen-before-and-after-`));
console.log(camelize(`-`));
console.log(camelize(`--`));
console.log(camelize(`-before`));
console.log(camelize(`after-`));

/**
 * Converts a dash-separated string to camelCase.
 *
 * @param {string} str - The dash-separated string to convert.
 * @returns {string} - The camelCase version of the string.
 */
function camelize(str) {
  // Split the string by dashes.
  let wordsOfStr = str.split(`-`);

  // If there is only one word, return the string as it is.
  if (wordsOfStr.length === 1) return str;

  // Capitalize the first letter of each word except the first word and empty
  // words.
  wordsOfStr = wordsOfStr.map((word, index) => {
    if (index === 0 || word === ``) return word;
    return word[0].toUpperCase() + word.slice(1);
  });

  return wordsOfStr.join(``);
}