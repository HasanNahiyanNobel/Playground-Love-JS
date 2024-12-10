// Task: https://javascript.info/array-methods#shuffle-an-array

let arr = [
  `Lennon`, `Joplin`, `Waters`, `Cobain`, `Reynolds`, `Barnett`,
];

// Shuffle and print 5 times.
for (let i = 0; i < 5; i++) {
  shuffle(arr);
  console.log(arr);
}

/**
 * Shuffles an array in place using the Fisher-Yates algorithm.
 * @param {Array} arr - The array to shuffle.
 */
function shuffle (arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}
