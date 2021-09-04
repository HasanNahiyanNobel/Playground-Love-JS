/**
 * Task: https://javascript.info/recursion#sum-all-numbers-till-the-given-one
 */

console.log(`https://javascript.info/recursion#sum-all-numbers-till-the-given-one`);

function sumToWithLoop (n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) sum += i;
	return sum;
}

function sumToWithRecursion (n) {
	if (n === 1) return 1;
	else return n + sumToWithRecursion(n - 1);
}

function sumToWithArithmeticProgression (n) {
	return n * (n + 1) / 2;
}

console.log(`Using loop...`);
console.log(`\t` + sumToWithLoop(4));
console.log(`\t` + sumToWithLoop(100));
console.log(`Using recursion...`);
console.log(`\t` + sumToWithRecursion(4));
console.log(`\t` + sumToWithRecursion(100));
console.log(`Using arithmetic progression...`);
console.log(`\t` + sumToWithArithmeticProgression(4));
console.log(`\t` + sumToWithArithmeticProgression(100));

/**
 * Task: https://javascript.info/recursion#calculate-factorial
 */

console.log(`https://javascript.info/recursion#calculate-factorial`);

function factorial (n) {
	if (n === 1) return 1;
	else return n * factorial(n - 1);
}

console.log(factorial(5));

/**
 * Task: https://javascript.info/recursion#fibonacci-numbers
 */

console.log(`https://javascript.info/recursion#fibonacci-numbers`);

function fib (n) {
	if (n === 1 || n === 2) return 1;

	let nMinus1thFibonacci = 1;
	let nMinus2ndFibonacci = 1;
	for (let i = 3; i < n; i++) {
		[nMinus1thFibonacci, nMinus2ndFibonacci] = [nMinus1thFibonacci + nMinus2ndFibonacci, nMinus1thFibonacci];
	}

	return nMinus1thFibonacci + nMinus2ndFibonacci;
}

function fibWithRecursion (n) {
	if (n === 1 || n === 2) return 1;
	else return fibWithRecursion(n - 1) + fibWithRecursion(n - 2);
}

console.log(fib(1));
console.log(fib(2));
console.log(fib(3));
console.log(fib(6));
console.log(fib(10));
console.log(fib(77));
console.log(fibWithRecursion(30)); // This bud will take a little time // TODO: Make it 40
// console.log(fibWithRecursion(77)); // This crook will run for ages

/**
 * Task: https://javascript.info/recursion#output-a-single-linked-list
 */

console.log(`https://javascript.info/recursion#output-a-single-linked-list`);

let list = {
	value: 1,
	next: {
		value: 2,
		next: {
			value: 3,
			next: {
				value: 4,
				next: null,
			},
		},
	},
};

function printListWithRecursion (list) {
	if (list === null) return;
	console.log(list.value);
	printListWithRecursion(list.next);
}

function printListWithLoop (list) {
	for (let tempList = list; tempList !== null; tempList = tempList.next) {
		console.log(tempList.value);
	}
}

console.log(`With recursion:`);
printListWithRecursion(list);
console.log(`With loop:`);
printListWithLoop(list);

/**
 * Task: https://javascript.info/recursion#output-a-single-linked-list-in-the-reverse-order
 *
 * Note from Book: Please note that the recursive solution actually does exactly the same: it follows the list, remembers the items in the chain of nested calls (in the execution context stack), and then outputs them.
 */

console.log(`https://javascript.info/recursion#output-a-single-linked-list-in-the-reverse-order`);

function printReversedListWithRecursion (list) {
	if (list === null) return;
	printReversedListWithRecursion(list.next);
	console.log(list.value);
}

function printReversedListWithLoop (list) {
	let valuesOfList = [];
	for (let tempList = list; tempList !== null; tempList = tempList.next) {
		valuesOfList.push(tempList.value);
	}
	while (valuesOfList.length > 0) {
		console.log(valuesOfList.pop());
	}
}

console.log(`Reversed list with recursion:`);
printReversedListWithRecursion(list);
console.log(`Reversed list with loop:`);
printReversedListWithLoop(list);

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
