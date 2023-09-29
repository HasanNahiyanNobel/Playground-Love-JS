import {pagePrint} from './utilities.js';

let user = {
  name: `John`,
  age: 30,
}

pagePrint(user.name)

user.isAdmin = true;

Object.keys(user).forEach(prop => {
  console.log(prop);
})

function makeHuman (name, age) {
  return {
    name,
    age,
  }
}

let george = makeHuman("George", 23)

console.log(george.name);

for (let key in user) {
  console.log(user[key]);
}

/**
 * https://javascript.info/task/hello-object
 */

let user2 = {}
user2.name = `John`
user2.surname = `Smith`
user2.name = `Pete`
delete user2.name

/**
 * https://javascript.info/task/is-empty
 */

function isEmpty (obj) {
  for (let key in obj) {
    return false;
  }
  return true;
}

let user3 = {}
let user4 = {name: `John`}

isEmpty(user3)
isEmpty(user4)

/**
 * https://javascript.info/task/sum-object
 */

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sumOfSalaries (salaries) {
  let sum = 0;
  for (let key in salaries) {
    sum += salaries[key];
  }
  return sum;
}

console.log(sumOfSalaries(salaries));

/**
 * https://javascript.info/task/multiply-numeric
 */

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

function multiplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}

multiplyNumeric(menu);
