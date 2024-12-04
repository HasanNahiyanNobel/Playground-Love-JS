// Task: https://javascript.info/string#truncate-the-text

console.log(
    truncate(`What I'd like to tell on this topic is:`, 20),
);
console.log(
    truncate(`Hi everyone!`, 20),
);

/**
 * Truncates the given string to the specified maximum length.
 *
 * If the string is longer than the maximum length, it is truncated and an
 * ellipsis character (`…`) is appended to the end.
 *
 * @param {string} str - The string to truncate.
 * @param {number} maxlength - The maximum length of the truncated string.
 * @returns {string} The truncated string with an ellipsis if it was truncated.
 */
function truncate(str, maxlength) {
  return str.length > maxlength ? str.slice(0, maxlength - 1) + `…` : str;
}