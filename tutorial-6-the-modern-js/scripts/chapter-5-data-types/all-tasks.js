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

console.log(random(0, 10));

/**
 * Task: https://javascript.info/number#a-random-integer-from-min-to-max
 *
 * Note: This task has an interesting wrong solution!
 */
console.log(`https://javascript.info/number#a-random-integer-from-min-to-max`);

function randomInteger (min, max) {
	/**
	 * CAUTION: This solution is wrong!
	 */
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

/*// This was my first solution
function Calculator () {
	this.operators = [];
	this.methods = [];

	this.calculate = function(str) {
		let splitArray = str.split(` `);

		let num1 = +splitArray[0];
		let operator = splitArray[1];
		let num2 = +splitArray[2];

		if (operator === `+`) return num1 + num2;
		else if (operator === `-`) return num1 - num2;
		else if (this.operators.includes(operator)) {
			let indexOfOperator = this.operators.indexOf(operator);
			return this.methods[indexOfOperator](num1, num2);
		}
	};

	this.addMethod = function(name, func) {
		this.operators.push(name);
		this.methods.push(func);
	};
}*/

// Solution inspired from learning source
function Calculator () {
	this.methods = {
		'-': (a, b) => a - b,
		'+': (a, b) => a + b,
	};

	this.calculate = function(str) {
		let splitArray = str.split(` `);

		let num1 = +splitArray[0];
		let operator = splitArray[1];
		let num2 = +splitArray[2];

		for (let key in this.methods) {
			if (operator === key) {
				return this.methods[key](num1, num2);
			}
		}
		return null; // If the operator is not found, a null value will be returned
	};

	this.addMethod = function(name, func) {
		this.methods[name] = func;
	};
}

let calc = new Calculator;
console.log(calc.calculate('3 + 7')); // 10
console.log(calc.calculate('3 - 7')); // -4

let powerCalc = new Calculator;
powerCalc.addMethod('*', (a, b) => a * b);
powerCalc.addMethod('/', (a, b) => a / b);
powerCalc.addMethod('**', (a, b) => a ** b);
powerCalc.addMethod('plus_twice', (a, b) => a + b + b);

console.log(powerCalc.calculate('2 ** 3')); // 8
console.log(powerCalc.calculate('56 / 8')); // 7
console.log(powerCalc.calculate('3 * 12')); // 36
console.log(powerCalc.calculate('4 plus_twice 7')); // 18

/**
 * Task: https://javascript.info/array-methods#map-to-names
 */
console.log(`https://javascript.info/array-methods#map-to-names`);

let john = {name: 'John', age: 25};
let pete = {name: 'Pete', age: 30};
let mary = {name: 'Mary', age: 28};

let users = [john, pete, mary];

/*// My initial solution
let names = [];

users.forEach(user => {
	names.push(user.name);
});*/

let names = users.map(user => user.name);

console.log(names); // John, Pete, Mary

/**
 * Task: https://javascript.info/array-methods#map-to-objects
 */
console.log(`https://javascript.info/array-methods#map-to-objects`);

let john2 = {name: 'John', surname: 'Smith', id: 1};
let pete2 = {name: 'Pete', surname: 'Hunt', id: 2};
let mary2 = {name: 'Mary', surname: 'Key', id: 3};

let users2 = [john2, pete2, mary2];

let usersMapped = users2.map(user => {
	return {
		fullName: `${user.name} ${user.surname}`,
		id: user.id,
	};
});

/*
usersMapped = [
	{ fullName: "John Smith", id: 1 },
	{ fullName: "Pete Hunt", id: 2 },
	{ fullName: "Mary Key", id: 3 }
]
*/

console.log(usersMapped);
console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith

/**
 * Task: https://javascript.info/array-methods#sort-users-by-age
 */
console.log(`https://javascript.info/array-methods#sort-users-by-age`);

function sortByAge (array) {
	array.sort((a, b) => a.age - b.age);
}

let john3 = {name: 'John', age: 25};
let pete3 = {name: 'Pete', age: 30};
let mary3 = {name: 'Mary', age: 28};

let arr5 = [pete3, john3, mary3];

sortByAge(arr5);

// now: [john, mary, pete]
console.log(arr5[1].name); // Mary
console.log(arr5[0].name); // John
console.log(arr5[2].name); // Pete

/**
 * Task: https://javascript.info/array-methods#shuffle-an-array
 *
 * This is veeeeeeery interesting!! The trivial solution (using sort) just doesn't give us the correct result!
 */
console.log(`https://javascript.info/array-methods#shuffle-an-array`);

let arrayToShuffle = [1, 2, 3, 4, 5];

function shuffle (array) {
	array.sort(() => Math.random() - 0.5);
}

shuffle(arrayToShuffle);
console.log(arrayToShuffle);
shuffle(arrayToShuffle);
console.log(arrayToShuffle);
shuffle(arrayToShuffle);
console.log(arrayToShuffle);

// THIS IS CRAZY AND MINDBLOWINGLY INTERESTING!!
let count = {
	'123': 0,
	'132': 0,
	'213': 0,
	'231': 0,
	'312': 0,
	'321': 0,
};

for (let i = 0; i < 100000; i++) {
	let arrayToShuffle = [1, 2, 3];
	shuffle(arrayToShuffle);
	count[arrayToShuffle.join(``)]++;
}

console.log(count);

// What we are trying is named Fisher-Yates Shuffle, which walks the array in reverse order
function fisherYatesShuffle (array) {
	for (let j = array.length - 1; j >= 0; j--) {
		let i = Math.floor(Math.random() * (j + 1)); // Taking a random integer between 0 and j, both included
		[array[i], array[j]] = [array[j], array[i]]; // This is what they are calling a destructive assignment. Even without a temp variable, this works!
	}
}

count = {
	'123': 0,
	'132': 0,
	'213': 0,
	'231': 0,
	'312': 0,
	'321': 0,
};

for (let i = 0; i < 100000; i++) {
	let arrayToShuffle = [1, 2, 3];
	fisherYatesShuffle(arrayToShuffle);
	count[arrayToShuffle.join(``)]++;
}

console.log(count);

/**
 * Task: https://javascript.info/array-methods#get-average-age
 */
console.log(`https://javascript.info/array-methods#get-average-age`);

function getAverageAge (arr) {
	let sumOfAges = arr.reduce((sum, item) => sum + item.age, 0);
	return sumOfAges / arr.length;
}

john = {name: 'John', age: 25};
pete = {name: 'Pete', age: 30};
mary = {name: 'Mary', age: 29};

arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28

/**
 * Task: https://javascript.info/array-methods#filter-unique-array-members
 *
 * We solve this in O(n^2), as I believe. Not good for performance, but as of our current learning, we can't do anything more about it.
 * Authors assure us, we *will*, when we move on to the Map and Set chapter.
 */
console.log(`https://javascript.info/array-methods#filter-unique-array-members`);

function unique (arr) {
	let uniqueArr = [];
	arr.forEach(item => {
		if (!uniqueArr.includes(item)) uniqueArr.push(item);
	});
	return uniqueArr;
}

let strings = [
	'Hare', 'Krishna', 'Hare', 'Krishna',
	'Krishna', 'Krishna', 'Hare', 'Hare', ':-O',
];

console.log(unique(strings)); // Hare, Krishna, :-O

/**
 * Task: https://javascript.info/array-methods#create-keyed-object-from-array
 */
console.log(`https://javascript.info/array-methods#create-keyed-object-from-array`);

// Solution: not using .reduce
/*function groupById (users) {
	let usersById = {};
	users.forEach(user => {
		usersById[user.id] = user;
	});
	return usersById;
}*/

// Solution: using .reduce. Felt more complicated.
function groupById (users) {
	return users.reduce((usersById, user) => {
		usersById[user.id] = user;
		return usersById;
	}, {});
}

users = [
	{id: 'john', name: 'John Smith', age: 20},
	{id: 'ann', name: 'Ann Smith', age: 24},
	{id: 'pete', name: 'Pete Peterson', age: 31},
];

let usersById = groupById(users);
console.log(usersById);

/*
// after the call we should have:
usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

/**
 * Task: https://javascript.info/map-set#filter-unique-array-members
 */
console.log(`https://javascript.info/map-set#filter-unique-array-members`);

// My solution
/*function againUnique (arr) {
	let uniqueSet = new Set();
	arr.forEach(item => {
		uniqueSet.add(item);
	});
	return uniqueSet.values();
}*/

// Their better solution
function againUnique (arr) {
	return Array.from(new Set(arr));
}

let values = [
	'Hare', 'Krishna', 'Hare', 'Krishna',
	'Krishna', 'Krishna', 'Hare', 'Hare', ':-O',
];

console.log(againUnique(values)); // Hare, Krishna, :-O

/**
 * Task: https://javascript.info/map-set#filter-anagrams
 */
console.log(`https://javascript.info/map-set#filter-anagrams`);

/*// My lengthy solution
function aClean (arr) {
	let uniqueKeys = new Set();
	let cleanedSet = [];
	arr.forEach(item => {
		let key = item.toLowerCase().split(``).sort().join(``);
		if (!uniqueKeys.has(key)) {
			uniqueKeys.add(key);
			cleanedSet.push(item);
		}
	});
	return Array.from(cleanedSet);
}*/

// Their better solution
function aClean (arr) {
	let cleanedObj = {};
	arr.forEach(item => {
		let key = item.toLowerCase().split(``).sort().join(``);
		cleanedObj[key] = item;
	});
	return Object.values(cleanedObj);
}

arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares'];
console.log(aClean(arr)); // "nap,teachers,ear" or "PAN,cheaters,era"

/**
 * Task: https://javascript.info/keys-values-entries#sum-the-properties
 */
console.log(`https://javascript.info/keys-values-entries#sum-the-properties`);

/*// My solution
function sumSalaries (salaries) {
	return Object.entries(salaries).reduce((sum, item) => sum + item[1], 0);
}*/

// Even better solution
function sumSalaries (salaries) {
	return Object.values(salaries).reduce((sum, value) => sum + value, 0);
}

let salaries = {
	'John': 100,
	'Pete': 300,
	'Mary': 250,
};

console.log(sumSalaries(salaries)); // 650

/**
 * Task: https://javascript.info/keys-values-entries#count-properties
 */
console.log(`https://javascript.info/keys-values-entries#count-properties`);

function countProperties (obj) {
	return Object.keys(obj).length;
}

let user = {
	name: 'John',
	age: 30,
};

console.log(countProperties(user)); // 2

/**
 * Task: https://javascript.info/destructuring-assignment#destructuring-assignment
 */
console.log(`https://javascript.info/destructuring-assignment#destructuring-assignment`);

user = {name: 'John', years: 30};

let {name, years: age, isAdmin = false} = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false

/**
 * Task: https://javascript.info/destructuring-assignment#the-maximal-salary
 */
console.log(`https://javascript.info/destructuring-assignment#the-maximal-salary`);

salaries = {
	'John': 100,
	'Pete': 300,
	'Mary': 250,
};

function topPaidPerson (salaries) {
	let wantedPerson = null;
	let maxSalary = 0;
	Object.entries(salaries).forEach(entry => {
		let [person, salary] = entry;
		if (salary > maxSalary) {
			maxSalary = salary;
			wantedPerson = person;
		}
	});
	return wantedPerson;
}

console.log(topPaidPerson(salaries));

/**
 * Task: https://javascript.info/date#create-a-date
 */
console.log(`https://javascript.info/date#create-a-date`);

let date = new Date(2012, 1, 20, 3, 12);

console.log(date);

/**
 * Task: https://javascript.info/date#show-a-weekday
 */
console.log(`https://javascript.info/date#show-a-weekday`);

function getLocalDay (date) {
	return date.getDay();
}

date = new Date(2012, 0, 3); // 3 Jan 2012
console.log(getLocalDay(date)); // tuesday, should show 2

/**
 * Task: https://javascript.info/date#which-day-of-month-was-many-days-ago
 */
console.log(`https://javascript.info/date#which-day-of-month-was-many-days-ago`);

function getDateAgo (date, days) {
	let copyDate = new Date(date);
	copyDate.setDate(date.getDate() - days);
	return copyDate.getDate();
}

date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)

/**
 * Task: https://javascript.info/date#last-day-of-month
 */
console.log(`https://javascript.info/date#last-day-of-month`);

/*// My solution
function getLastDayOfMonth (year, month) {
	let lastDay = 28;
	let date = new Date(year, month, lastDay);

	while (date.getMonth() === month) {
		date.setDate(++lastDay);
	}

	return lastDay - 1;
}*/

// Their 'wow' solution
function getLastDayOfMonth (year, month) {
	return new Date(year, month + 1, 0).getDate();
}

console.log(getLastDayOfMonth(2012, 1));
console.log(getLastDayOfMonth(2021, 7));

/**
 * Task: https://javascript.info/date#how-many-seconds-have-passed-today
 */
console.log(`https://javascript.info/date#how-many-seconds-have-passed-today`);

function getSecondsToday () {
	let today = new Date();
	return (new Date() - new Date(today.getFullYear(), today.getMonth(), today.getDate())) / 1000;
}

console.log(getSecondsToday());

/**
 * Task: https://javascript.info/date#how-many-seconds-till-tomorrow
 */
console.log(`https://javascript.info/date#how-many-seconds-till-tomorrow`);

function getSecondsToTomorrow () {
	let today = new Date();
	return (new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1) - new Date()) / 1000;
}

console.log(getSecondsToTomorrow());

/**
 * Task: https://javascript.info/date#format-the-relative-date
 */
console.log(`https://javascript.info/date#format-the-relative-date`);

function formatDate (date) {
	let timeDifferenceInSeconds = (new Date() - date) / 1000;
	let formattedDate = ``;
	if (timeDifferenceInSeconds < 1) {
		formattedDate = `right now`;
	} else if (timeDifferenceInSeconds < 60) {
		formattedDate = `${timeDifferenceInSeconds} sec. ago`;
	} else if (timeDifferenceInSeconds < 3600) {
		formattedDate = `${timeDifferenceInSeconds / 60} min. ago`;
	} else {
		// Create array ensuring every components has more than two digits
		let dateArray = [
			`0` + date.getDate(),
			`0` + (date.getMonth() + 1), // Damn month starts from 0, that's why
			`` + date.getFullYear(),
			`0` + date.getHours(),
			`0` + date.getMinutes(),
		];
		dateArray = dateArray.map(item => item.slice(-2)); // Keep only the last two digits of every component
		formattedDate = `${dateArray.slice(0, 3).join(`.`)} ${dateArray.slice(-2).join(`:`)}`;
	}
	return formattedDate;
}

console.log(formatDate(new Date(new Date - 1))); // "right now"
console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 sec. ago"
console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 min. ago"
console.log(formatDate(new Date(new Date - 86400 * 1000))); // yesterday's date like 31.12.16 20:00

/**
 * Task: https://javascript.info/json#turn-the-object-into-json-and-back
 */
console.log(`https://javascript.info/json#turn-the-object-into-json-and-back`);

user = {
	name: 'John Smith',
	age: 35,
	date: 1629306610703, // Wed Aug 18 2021 23:10:10 GMT+0600 (Bangladesh Standard Time)
};

let jsonedUser = JSON.stringify(user);
console.log(jsonedUser);

let parsedUser = JSON.parse(jsonedUser);
console.log(parsedUser);
console.log(new Date(parsedUser.date));

/**
 * Task: https://javascript.info/json#exclude-backreferences
 */
console.log(`https://javascript.info/json#exclude-backreferences`);

let room = {
	number: 23,
};

let meetup = {
	title: 'Conference',
	occupiedBy: [{name: 'John'}, {name: 'Alice'}],
	place: room,
};

// circular references
room.occupiedBy = meetup;
meetup.self = meetup;

let jsonedMeetup = JSON.stringify(meetup, function replacer (key, value) {
	return (key !== `` && value === meetup) ? undefined : value;
});

console.log(jsonedMeetup);

/* result should be:
{
  "title":"Conference",
  "occupiedBy":[{"name":"John"},{"name":"Alice"}],
  "place":{"number":23}
}
*/
