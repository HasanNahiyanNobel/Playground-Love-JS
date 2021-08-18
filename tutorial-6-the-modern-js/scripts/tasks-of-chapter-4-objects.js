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

/**
 * Task: https://javascript.info/object-methods#create-a-calculator
 */
console.log('https://javascript.info/object-methods#create-a-calculator');

let calculator = {
	read() {
		// Disabling prompts for the convenience of further tasks.
		/*this.value1 = +prompt('Enter value 1', '0'); // Reading with a preceding plus sign ensures the value to be read as number.
		this.value2 = +prompt('Enter value 2', '0');*/
	},
	sum() {
		return this.value1 + this.value2;
	},
	mul() {
		return this.value1 * this.value2;
	},
};

calculator.read();
console.log('Sum = ' + calculator.sum());
console.log('Mul = ' + calculator.mul());

/**
 * Task: https://javascript.info/object-methods#chaining
 */
console.log('https://javascript.info/object-methods#chaining');

let ladder = {
	step: 0,
	up() {
		this.step++;
		return this;
	},
	down() {
		this.step--;
		return this;
	},
	showStep: function() { // shows the current step
		console.log(this.step);
		return this;
	},
};

ladder.up().up().down().showStep();

/**
 * Task: https://javascript.info/constructor-new#create-new-calculator
 */
console.log(
		'https://javascript.info/constructor-new#create-new-calculator');

function Calculator2() {
	this.read = function() {
		// Disabling prompts for the convenience of further tasks.
		/*this.value1 = +prompt('Enter value 1', '0');
		this.value2 = +prompt('Enter value 2', '0');*/
	};
	this.sum = function() {
		return this.value1 + this.value2;
	};
	this.mul = function() {
		return this.value1 * this.value2;
	};
}

let calculator2 = new Calculator2();
calculator2.read();

console.log('Sum = ' + calculator2.sum());
console.log('Mul = ' + calculator2.mul());

/**
 * Task: https://javascript.info/constructor-new#create-new-accumulator
 */
console.log('https://javascript.info/constructor-new#create-new-accumulator');

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

console.log(accumulator.value); // shows the sum of these values

function Accumulator(stringValue) {
	this.value = +stringValue;
	this.read = function() {
		// Disabling prompt for the convenience of further tasks.
		/*let readValue = +prompt('Enter a value');
		this.value += readValue;*/
	};
}
