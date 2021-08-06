/**
 * All about functions.
 * From tutorial: https://www.youtube.com/watch?v=xUI5Tsl2JpY&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=4
 */



/**************************************************************************************************
Function declaration and expression
 **************************************************************************************************/
console.log('\tFunction declaration and expression'.toUpperCase());

/**
 * Example of function declaration.
 */
function greet () {
	console.log('Hello there!');
}

/**
 * Example of function expression. Notice the semicolon at the end of the expression—which looks awkward at first, but then completely makes sense.
 */
const speak = function () {
	console.log('Good day!');
};

greet(); // This will work.
speak(); // This will also work.
shout(); // Yap, this will work too.
// scream(); // This will NOT work, as this is a function expression, and declared AFTER calling it. Also, calling this will cause an `Uncaught Reference Error` and terminate the script.

/**
 * Example of another function declaration.
 */
function shout () {
	console.log("I am shouting!");
}

/**
 * And example of another function expression.
 */
const scream = function () {
	console.log("I AM SCREAMING!");
};



/**************************************************************************************************
Passing values to functions
 **************************************************************************************************/
console.log('\tPassing values to functions'.toUpperCase());

/**
 * Example of another function expression, which takes arguments.
 * @param time Name of the time of the day to greet.
 * @param name Name of the person to speak.
 */
const speak2 = function (time, name) {
	console.log(`Good ${time} ${name}!`);
};

speak2(); // Will print `undefined` in the places of variables.
speak2('evening', 'John'); // Will print as expected.

/**
 * Again example of an expression, which has default argument values.
 * @param time Name of the time of the day to greet.
 * @param name Name of the person to speak.
 */
const speak3 = function (time = 'day', name = 'user') {
	console.log(`Good ${time} ${name}!`);
};

speak3(); // Will print the default values.
speak3('night'); // The second argument will get the default value.
speak3('morning', 'George'); // Will print the passed values.



/**************************************************************************************************
Returning values from functions
 **************************************************************************************************/
console.log('\tReturning values from functions'.toUpperCase());

/**
 * A function to calculate area of a circle, given the radius.
 * @param radius Radius of the circle.
 * @returns {number} Area of the circle.
 */
const calculateArea = function (radius) {
	return 3.14159 * radius ** 2;
};

const area = calculateArea(5);
console.log('From calculateArea(5):', area);



/**************************************************************************************************
Arrow functions
 **************************************************************************************************/
console.log('\tArrow functions'.toUpperCase());

/**
 * Example of an arrow function which returns the area of a circle, given the radius.
 * @param radius Radius of the circle.
 * @returns {number} Area of the circle.
 */
const calculateArea2 = (radius) => {
	return 3.14159 * radius ** 2;
};

console.log('From calculateArea2(5):', calculateArea2(5));

/**
 * A more simplified arrow function.
 * When there is *exactly* one parameter, we can omit the parentheses.
 * And when there is just a return statement, we can bring it up like this, omitting the `return` keyword.
 * @param radius Radius of the circle.
 * @returns {number} Area of the circle.
 */
const calculateArea3 = radius => 3.14159 * radius ** 2;

console.log('From calculateArea3(5):', calculateArea3(5));

/**
 * Example of regular function, which we want to turn into an arrow function.
 * @returns {string} Returns a simple string.
 */
const greetRegular = function () {
	return 'Hey Jude!';
};

/**
 * Converted arrow function.
 * @returns {string} Returns a simple string.
 */
const greetArrow = () => 'Hey Jude!';

console.log(greetRegular());
console.log(greetArrow());

/**
 * My Note: Now the arrow function makes complete sense. When there is no parameter, parentheses is helpful to parse this as a human. And when there are multiple parameters, it also more parsable with parentheses.
 */

/**
 * Just an example regular function.
 * @param products God knows what.
 * @param tax Amount of tax.
 * @returns {number} Some bill, I guess.
 */
const billRegular = function (products, tax) {
	let total = 0;
	for (let i = 0; i < products.length; i++) {
		total += products[i] + products[i] * tax;
	}
	return total;
}

/**
 * Converted arrow function.
 * @param products God knows what.
 * @param tax Amount of tax.
 * @returns {number} Some bill, I guess.
 */
const billArrow = (products, tax) => {
	let total = 0;
	for (let i = 0; i < products.length; i++) {
		total += products[i] + products[i] * tax;
	}
	return total;
}

console.log(billRegular([10, 15, 30], 0.2));
console.log(billArrow([10, 15, 30], 0.2));



/**************************************************************************************************
Callbacks and Foreach
 **************************************************************************************************/
console.log('\tCallbacks and Foreach'.toUpperCase());

/**
 * Example of callback function.
 * @param callbackFunction The function to be called back.
 */
const aFunction = (callbackFunction) => {
	let value = 50;
	callbackFunction(value);
};

// Calling the callback function using regular declaration.
aFunction(function (value) {
	console.log(value);
});

// Calling the callback function using arrow function.
aFunction(value => {
	console.log(value);
})

let people = ['John', 'Paul', 'George', 'Ringo'];

// Using foreach and callback together.
people.forEach(function (person) {
	console.log(person);
});

// The same thing, using arrow function.
people.forEach(person => {
	console.log(person);
});

// Indexing the person along with name. `forEach` is defined this way—the second optional value is index.
people.forEach((person, index) => {
	console.log(index, person);
});

/**
 * An example function to call as callback
 * @param person Name of the person.
 * @param index Index of the person.
 */
const greetPerson = (person, index) => {
	console.log(`${index} - Hello ${person}!`);
}

// Using the example person inside callback. This feels more comfortable.
people.forEach(greetPerson);
