// Task: https://javascript.info/array-methods#create-keyed-object-from-array

let users = [
  { id: `john`, name: `John Smith`, age: 20 },
  { id: `ann`, name: `Ann Smith`, age: 24 },
  { id: `pete`, name: `Pete Peterson`, age: 31 },
];

let usersById = groupById(users);
console.log(usersById);

/**
 * Groups an array of users by their id.
 *
 * @param {Array} users - The array of user objects.
 * @param {string} users[].id - The id of the user.
 * @param {string} users[].name - The name of the user.
 * @param {number} users[].age - The age of the user.
 * @returns {Object} An object where the keys are user ids and the values are
 * user objects.
 */
function groupById(users) {
  return users.reduce((groupedUsers, user) => {
    groupedUsers[user[`id`]] = user;
    return groupedUsers;
  }, {});
}
