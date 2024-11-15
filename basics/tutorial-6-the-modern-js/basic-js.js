/*******************************************************************************
 * Constants and Variables
 ******************************************************************************/
const MASTER_DIV = document.getElementById(`master-div`);
const OUTPUT_DIV = document.getElementById('output-div');
const LIGHT_MODE = `light`;
const DARK_MODE = `dark`;

/*******************************************************************************
 * Functions
 ******************************************************************************/

/**
 * Prints output as HTML.
 * @param {string} output - A string to be printed as output.
 */
function printOutput(output) {
  OUTPUT_DIV.innerHTML += output;
}

/**
 * Sets light/dark mode when the user-device mode changes.
 * @param colourScheme Mode to be set (light or dark).
 */
function setColourTheme(colourScheme) {
  if (colourScheme === DARK_MODE) {
    MASTER_DIV.classList.add(`bg-dark`);
    MASTER_DIV.classList.add(`text-light`);
  } else {
    MASTER_DIV.classList.remove(`bg-dark`);
    MASTER_DIV.classList.remove(`text-light`);
  }
}

/*******************************************************************************
 * Execution Point of the Script
 ******************************************************************************/

// Set colour theme to dark if initially the device is in dark mode.
// Concept from: https://stackoverflow.com/a/57795495
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
  setColourTheme(DARK_MODE);
}

// Listen to light/dark mode change, and set theme accordingly.
// Concept from: https://stackoverflow.com/a/57795495
window.matchMedia(`(prefers-color-scheme: dark)`).
    addEventListener(`change`, event => {
      const currentColourScheme = event.matches ? DARK_MODE : LIGHT_MODE;
      setColourTheme(currentColourScheme);
    });