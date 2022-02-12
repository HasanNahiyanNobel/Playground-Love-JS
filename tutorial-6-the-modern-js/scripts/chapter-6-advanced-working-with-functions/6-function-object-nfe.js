/**
 * Task: https://javascript.info/function-object#set-and-decrease-for-counter
 */

console.log(`https://javascript.info/function-object#set-and-decrease-for-counter`);

function makeCounter () {
	let count = 0;

	function counter () {
		return count++;
	}

	counter.set = function(value) {
		count = value;
	};

	counter.decrease = function() {
		count--;
	};

	return counter;
}

let counter = makeCounter();

console.log(counter()); // 0
console.log(counter()); // 1

counter.set(10);
console.log(counter()); // 10

counter.decrease();
console.log(counter()); // 10 (instead of 11)

/**
 * Task: https://javascript.info/function-object#sum-with-an-arbitrary-amount-of-brackets
 * Note: For me, this one was also way harder than the others.
 */

console.log(`https://javascript.info/function-object#sum-with-an-arbitrary-amount-of-brackets`);

// Not my solution!
function sum (value) {
	let currentSum = value;

	function sumAgain (anotherValue) {
		currentSum += anotherValue;
		return sumAgain;
	}

	sumAgain.toString = function() {
		return currentSum;
	};

	return sumAgain;
}

// This weirdo conversion converts in alert, but does not convert properly in console.log unless wrapped inside `${}`.
console.log(`${sum(1)(2)}`); // == 3
console.log(`${sum(1)(2)(3)}`); // == 6
console.log(`${sum(5)(-1)(2)}`); // == 6
console.log(`${sum(6)(-1)(-2)(-3)}`); // == 0
console.log(`${sum(0)(1)(2)(3)(4)(5)}`); // == 15

/**
 * Just a test
 */

function testFunc () {
	return 0;
}

testFunc.toString = function() {
	return `A string!`;
};

alert(testFunc);
console.log(testFunc);
console.log(`${testFunc}`);
