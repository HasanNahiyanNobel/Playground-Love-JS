/**
 * Task: https://javascript.info/object#hello-object
 */
console.log('https://javascript.info/object#hello-object');

let user = {};
user.name = 'John';
user.surname = 'Smith';
user.name = 'Pete';
delete user.name;
console.log(user);

/**
 * Task: https://javascript.info/object#check-for-emptiness
 */
console.log('https://javascript.info/object#check-for-emptiness');

let schedule = {};

console.log(isEmpty(schedule)); // true
schedule['8:30'] = 'get up';
console.log(isEmpty(schedule)); // false

function isEmpty(schedule) {
	for (let key in schedule) {
		// At least one key exists
		return true;
	}
	// There is no key
	return false;
}

/**
 * Task: https://javascript.info/object#sum-object-properties
 */
console.log('https://javascript.info/object#sum-object-properties');

let salaries = {
	John: 100,
	Ann: 160,
	Pete: 130,
};

function sumSalaries(salaries) {
	let sum = 0;
	for (let key in salaries) {
		sum += salaries[key];
	}
	return sum;
}

console.log(`Sum of salaries: ${sumSalaries(salaries)}`);

/**
 * Task: https://javascript.info/object#multiply-numeric-property-values-by-2
 */
console.log(
		'https://javascript.info/object#multiply-numeric-property-values-by-2');

// before the call
let menu = {
	width: 200,
	height: 300,
	title: 'My menu',
};

console.log(menu);
multiplyNumeric(menu);
console.log(menu);

/*
// after the call
menu = {
	width: 400,
	height: 600,
	title: 'My menu',
};
*/

function multiplyNumeric(obj) {
	for (let key in obj) {
		if (typeof obj[key] === 'number') {
			obj[key] *= 2;
		}
	}
}
