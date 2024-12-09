// Task: https://javascript.info/array-methods#sort-users-by-age

let john = { name: `John`, age: 25 };
let pete = { name: `Pete`, age: 30 };
let mary = { name: `Mary`, age: 28 };
let jane = { name: `Jane`, age: 22 };
let mark = { name: `Mark`, age: 35 };
let emily = { name: `Emily`, age: 27 };

let arr = [pete, john, mary, jane, mark, emily];

console.log(arr);
sortByAge(arr);
console.log(arr);

/**
 * Sorts an array of user objects by their age property in ascending order.
 *
 * @param {Object[]} users - The array of user objects to sort.
 * @param {string} users[].name - The name of the user.
 * @param {number} users[].age - The age of the user.
 */
function sortByAge (users) {
  users.sort((user1, user2) => user1[`age`] - user2[`age`]);
}
