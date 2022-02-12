/**
 * Task: https://javascript.info/closure#sum-with-closures
 */

console.log(`https://javascript.info/closure#sum-with-closures`);

function magicalSum (a) {
	return function(b) {
		return a + b;
	};
}

console.log(magicalSum(1)(2));
console.log(magicalSum(5)(-1));

/**
 * Task: https://javascript.info/closure#filter-through-function
 * Note: I took way more time to solve this task than ideal.
 */

console.log(`https://javascript.info/closure#filter-through-function`);

function inBetween (a, b) {
	// Function definition version
	/*return function(item) {
		return item >= a && item <= b;
	};*/

	// Arrow function version
	return item => item >= a && item <= b;
}

function inArray (arr) {
	return item => arr.includes(item);
}

let arr = [1, 2, 3, 4, 5, 6, 7];

console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6
console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

/**
 * Task: https://javascript.info/closure#sort-by-field
 * Note: Faced a problem while validating my solution. Details in Notes.md.
 */

console.log(`https://javascript.info/closure#sort-by-field`);

let users = [
	{name: 'John', age: 20, surname: 'Johnson'},
	{name: 'Pete', age: 18, surname: 'Peterson'},
	{name: 'Ann', age: 19, surname: 'Hathaway'},
];

function byField (fieldName) {
	return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}

users.sort(byField('name'));
console.log(users);
// debugger; // Without this command, the last sort is being printed in both cases. Could not figure out the reason yet.
users.sort(byField('age'));
console.log(users);

/**
 * Task: https://javascript.info/closure#army-of-functions
 * Note: Veeery interesting one. And the simple solution is not the one I did—it's just using a for loop instead of a while.
 * That's just because a for loop creates new lexical environments on each iteration.
 */

console.log(`https://javascript.info/closure#army-of-functions`);

function makeArmy () {
	let shooters = [];

	let i = 0;
	while (i < 10) {
		let j = i;
		let shooter = function() { // create a shooter function,
			console.log(j); // that should show its number
		};
		shooters.push(shooter); // and add it to the array
		i++;
	}

	// ...and return the array of shooters
	return shooters;
}

let army = makeArmy();

// all shooters show 10 instead of their numbers 0, 1, 2, 3...
army[0](); // 10 from the shooter number 0
army[1](); // 10 from the shooter number 1
army[2](); // 10 ...and so on.
