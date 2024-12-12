// Task: https://javascript.info/map-set#filter-anagrams

let arr = [`nap`, `teachers`, `cheaters`, `PAN`, `ear`, `era`, `hectares`];

console.log(aclean(arr));

/**
 * Filters an array of words to return only one word per set of anagrams.
 *
 * @param {Array} arr - The array of words to filter.
 * @param {string} arr[] - The words in the array.
 * @returns {Array} An array containing only one word per set of anagrams.
 */
function aclean(arr) {
  let wordsMap = new Map(arr.map(word => {
    let sortedLetters = word.toLowerCase().split(``).sort().join(``);
    return [sortedLetters, word];
  }));
  return Array.from(wordsMap.values());
}
