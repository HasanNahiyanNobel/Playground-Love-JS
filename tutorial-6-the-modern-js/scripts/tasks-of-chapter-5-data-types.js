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

// TODO: Solve this.

/*function getMaximalSubarraySum (arr) {
	let startOfMaxSub = 0;
	let endOfMaxSub = 0;

	let sumOfSub = 0;
	let sumOfMaxSub = 0;

	const arrLength = arr.length;

	while (endOfMaxSub < arrLength) {
		if (sumOfSub + arr[endOfMaxSub] > sumOfSub) {
			// Another element of this subarray can be added!
			sumOfSub += arr[endOfMaxSub];
		} else {
			// This subarray can NOT be extended further. We may look for a new one.
			startOfMaxSub = endOfMaxSub;
			if (sumOfSub > sumOfMaxSub) {
				sumOfMaxSub = sumOfSub;
			}
		}
		endOfMaxSub++;
	}

	return sumOfMaxSub;
}*/

function getMaximalSubarraySum (array) {
	const arrayLength = array.length;

	let startOfSubarray = 0;

	// Skip the first negative elements
	while (array[startOfSubarray] < 0 && startOfSubarray < arrayLength) {
		startOfSubarray++;
	}

	let endOfSubarray = startOfSubarray;

	let sumOfSubArray = 0;
	let sumOfMaxSubArray = 0;

	while (endOfSubarray < arrayLength) {
		if (array[endOfSubarray] >= 0) {
			// A non-negative number will not decrease the sum of subarray, but will increase the size—so we should take it.
			sumOfSubArray += array[endOfSubarray];
			endOfSubarray++;
		} else {
			// Taking a negative number will only be worthy when sum of some of the following number(s) are greater than the negative number's absolute value.
			let startOfSubSubArray = endOfSubarray;
			let endOfSubSubArray = endOfSubarray + 1;
			let sumOfSubSubArray = array[startOfSubSubArray]; // Adding the negative number, as we are trying to check whether taking it will be worthy.
			while (endOfSubSubArray < arrayLength) {
				sumOfSubSubArray += array[endOfSubSubArray]; // Add the next element after the negative element.
				if (sumOfSubSubArray >= 0) {
					//Taking the negative number will increase the length of subarray, and will not decrease the sum.
					endOfSubarray = endOfSubSubArray;
					break;
				} else {
					// Let's cross our fingers for the next element.
				}
			}
		}
	}
}

console.log(getMaximalSubarraySum([-1, 2, 3, -9])); // == 5 (the sum of highlighted items)
console.log(getMaximalSubarraySum([2, -1, 2, 3, -9])); // == 6
console.log(getMaximalSubarraySum([-1, 2, 3, -9, 11])); // == 11
console.log(getMaximalSubarraySum([-2, -1, 1, 2])); // == 3
console.log(getMaximalSubarraySum([100, -9, 2, -3, 5])); // == 100
console.log(getMaximalSubarraySum([1, 2, 3])); // == 6 (take all)
