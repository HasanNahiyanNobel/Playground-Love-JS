/**
 * Task: https://javascript.info/number#sum-numbers-from-the-visitor
 */
console.log(`https://javascript.info/number#sum-numbers-from-the-visitor`);

// Disabling prompts for the convenience of further tasks.
/*let num1 = parseFloat(prompt(`Enter a number`));
let num2 = parseFloat(prompt(`Enter another number!`));

console.log(`Sum of the numbers: ` + (num1 + num2));*/

/**
 * Task: https://javascript.info/number#repeat-until-the-input-is-a-number
 *
 * Note: That's way more harder than one would think.
 * This happened mainly because javascript converts several variations of string to number. For example, an empty string with only whitespaces is parsed as 0. Weird.
 * The solution of javascript.info is insufficient, as it would parse that whitespace-only-string case as the number 0.
 * I tried a more correct version of this—checking whether it is an whitespace-only-string first, and then used `isFinite()` to determine whether it is a number.
 */
console.log(`https://javascript.info/number#repeat-until-the-input-is-a-number`);

function readNumber () {
	// Disabling the whole function for the convenience of further tasks.
	/*let number = prompt(`Enter a number`);

	// If CANCEL is clicked, `number` will have a null value.
	// If input contains nothing or only whitespaces, we are returning null here—that's why `trim()` is used.
	if (number === null || number.trim() === '') {
		return null;
	}
	if (isFinite(number)) {
		return +number;
	}

	// Loop recursively
	return readNumber();*/
}

console.log(readNumber());

/**
 * Task: https://javascript.info/number#a-random-number-from-min-to-max
 */
console.log(`https://javascript.info/number#a-random-number-from-min-to-max`);

function random (min, max) {
	return min + Math.random() * (max - min);
}

/**
 * Task: https://javascript.info/number#a-random-integer-from-min-to-max
 *
 * Note: This task has an interesting wrong solution!
 */
console.log(`https://javascript.info/number#a-random-integer-from-min-to-max`);

function randomInteger (min, max) {
	return Math.floor(min + Math.random() * (max - min));
}

console.log(randomInteger(1, 100));
console.log(randomInteger(1, 100));
console.log(randomInteger(1, 100));
console.log(randomInteger(1, 100));
console.log(randomInteger(1, 100));

/**
 * Task: https://javascript.info/string#uppercase-the-first-character
 */
console.log(`https://javascript.info/string#uppercase-the-first-character`);

function ucFirst (str) {
	return str[0].toUpperCase() + str.substring(1, str.length);
}

console.log(ucFirst(`john`));

/**
 * Task: https://javascript.info/string#check-for-spam
 */
console.log(`https://javascript.info/string#check-for-spam`);

function checkSpam (str) {
	let loweredStr = str.toLowerCase();
	return loweredStr.includes(`viagra`) || loweredStr.includes(`xxx`);
}

console.log(checkSpam(`buy ViAgRA now`));
console.log(checkSpam(`free xxxxx`));
console.log(checkSpam(`innocent rabbit`));

/**
 * Task: https://javascript.info/string#truncate-the-text
 */
console.log(`https://javascript.info/string#truncate-the-text`);

function truncate (str, maxLength) {
	if (str.length <= maxLength) {
		return str;
	}
	return str.substring(0, maxLength - 1) + `…`;
}

console.log(truncate('What I\'d like to tell on this topic is:', 20));
console.log(truncate('Hi everyone!', 20));

/**
 * Task: https://javascript.info/string#extract-the-money
 */
console.log(`https://javascript.info/string#extract-the-money`);

function extractCurrencyValue (str) {
	return str.substring(1, str.length);
}

console.log(extractCurrencyValue('$120'));

/**
 * Task: https://javascript.info/array#array-operations
 */
console.log(`https://javascript.info/array#array-operations`);

styles = [`Jazz`, `Blues`];
console.log(styles);
styles.push(`Rock-n-Roll`);
console.log(styles);
styles[(styles.length - 1) / 2] = `Classics`;
console.log(styles);
console.log(styles.shift());
console.log(styles);
styles.unshift(`Rap`, `Reggae`);
console.log(styles);

/**
 * Task: https://javascript.info/array#sum-input-numbers
 */
console.log(`https://javascript.info/array#sum-input-numbers`);

// Disabling the whole solution for the convenience of further tasks.

/*function sumInput () {
	let values = [];
	let sumOfValues = 0;
	while (true) {
		let readValue = prompt(`Enter a number`);
		if (readValue === null || readValue.trim() === '' || !isFinite(readValue)) {
			return sumOfValues;
		}
		values.push(+readValue);
		sumOfValues += +readValue;
	}
}

console.log(sumInput());*/

/**
 * Task: https://javascript.info/array#a-maximal-subarray
 */
console.log(`https://javascript.info/array#a-maximal-subarray`);

function getMaxSubSum (arr) {
	let currentSum = 0;
	let maxSum = 0;
	for (let number of arr) {
		currentSum = Math.max(currentSum + number, 0);
		maxSum = Math.max(maxSum, currentSum);
	}
	return maxSum;
}

console.log(getMaxSubSum([-1, 2, 3, -9])); // == 5 (the sum of highlighted items)
console.log(getMaxSubSum([2, -1, 2, 3, -9])); // == 6
console.log(getMaxSubSum([-1, 2, 3, -9, 11])); // == 11
console.log(getMaxSubSum([-2, -1, 1, 2])); // == 3
console.log(getMaxSubSum([100, -9, 2, -3, 5])); // == 100
console.log(getMaxSubSum([1, 2, 3])); // == 6 (take all)
console.log(getMaxSubSum([])); // == 0 (for empty array)

/**
 * Task: https://javascript.info/array-methods#translate-border-left-width-to-borderleftwidth
 */
console.log(`https://javascript.info/array-methods#translate-border-left-width-to-borderleftwidth`);

function camelize (string) {
	let splitArray = string.split(`-`);
	return splitArray.map((item, index) => {
		item = index === 0 ? item : item[0].toUpperCase() + item.substring(1);
		return item;
	}).join(``);
}

console.log(camelize('background-color')); // == 'backgroundColor'
console.log(camelize('list-style-image')); // == 'listStyleImage'
console.log(camelize('-webkit-transition')); // == 'WebkitTransition'

/**
 * Task: https://javascript.info/array-methods#filter-range
 */
console.log(`https://javascript.info/array-methods#filter-range`);

function filterRange (array, a, b) {
	let filteredArray = [];
	for (let element of array) {
		if (element >= a && element <= b) {
			filteredArray.push(element);
		}
	}
	return filteredArray;
}

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);
console.log(filtered); // 3,1 (matching values)
console.log(arr); // 5,3,8,1 (not modified)

/**
 * Task: https://javascript.info/array-methods#filter-range-in-place
 */
console.log(`https://javascript.info/array-methods#filter-range-in-place`);

function filterRangeInPlace (array, a, b) {
	array.forEach((item, index) => {
		if (!(a <= item && item <= b)) {
			array.splice(index, 1);
		}
	});
}

let arr2 = [5, 3, 8, 1];
filterRangeInPlace(arr2, 1, 4); // removed the numbers except from 1 to 4
console.log(arr2); // [3, 1]

/**
 * Task: https://javascript.info/array-methods#sort-in-decreasing-order
 */
console.log(`https://javascript.info/array-methods#sort-in-decreasing-order`);

let arr3 = [5, 2, 1, -10, 8];

arr3.sort((a, b) => b - a);

console.log(arr3); // 8, 5, 2, 1, -10

/**
 * Task: https://javascript.info/array-methods#copy-and-sort-array
 */
console.log(`https://javascript.info/array-methods#copy-and-sort-array`);

function copySorted (array) {
	return array.slice().sort();
}

let arr4 = ['HTML', 'JavaScript', 'CSS'];
let sorted4 = copySorted(arr4);

console.log(sorted4); // CSS, HTML, JavaScript
console.log(arr4); // HTML, JavaScript, CSS (no changes)

/**
 * https://javascript.info/array-methods#create-an-extendable-calculator
 */
console.log(`https://javascript.info/array-methods#create-an-extendable-calculator`);
