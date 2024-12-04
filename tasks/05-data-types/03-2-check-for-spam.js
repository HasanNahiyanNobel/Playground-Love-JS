// Task: https://javascript.info/string#check-for-spam

console.log(checkSpam(`buy ViAgRA now`));
console.log(checkSpam(`free xxxxx`));
console.log(checkSpam(`innocent rabbit`));

/**
 * Checks if the given string contains spam keywords.
 *
 * This function converts the input string to lowercase and checks if it
 * contains the keywords 'viagra' or 'xxx'.
 *
 * @param {string} str - The string to check for spam.
 * @returns {boolean} True if the string contains spam keywords, false
 * otherwise.
 */
function checkSpam(str) {
  const lowerStr = str.toLowerCase();
  return lowerStr.includes(`viagra`) || lowerStr.includes(`xxx`);
}
