/*
 * Constants and Variables
 */
const OUTPUT_DIV = document.getElementById('output-div');

/*
 * Functions
 */

/**
 * Prints output as HTML.
 * @param {string} output - A string to be printed as output.
 */
function printOutput(output) {
  OUTPUT_DIV.innerHTML += output;
}

/*
 * Execution point of the script
 */
