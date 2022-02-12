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
