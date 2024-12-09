// Task: https://javascript.info/array-methods#map-to-objects

let john = { name: `John`, surname: `Smith`, id: 1 };
let pete = { name: `Pete`, surname: `Hunt`, id: 2 };
let mary = { name: `Mary`, surname: `Key`, id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => {
  let fullName = `${user.name} ${user.surname}`;
  let id = user.id;
  return { fullName, id };
});

console.log(usersMapped);
