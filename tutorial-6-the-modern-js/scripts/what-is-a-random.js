/**
 * This script is a trial to see how random behaves.
 * It's more interesting than I thought.
 */

// Declare variables
let min, max, random, randomCount;

/**
 * Trial 1: Generate an integer between 0 and max, both included
 * Function: Math.round(Math.random() * max)
 */

// Initialize variables
max = 5;
random = null;
randomCount = {};

// Initialize the object, including the max+1 value
for (let i = 0; i <= max + 1; i++) {
	randomCount[i] = 0;
}

for (let i = 0; i < 100000; i++) {
	random = Math.round(Math.random() * max);
	randomCount[random]++;
}

console.log(randomCount);

/**
 * Note of trial 1: This is clearly inaccurate. 0 and max get about half the value than the others.
 * The reason is clear. The rounded value they get from is like this:
 * 0: from 0.0 to 0.49999...
 * 1: from 0.5 to 1.49999...
 * 2: from 1.5 to 2.49999...
 * 3: from 2.5 to 3.49999...
 * 4: from 3.5 to 4.49999...
 * 5: from 4.5 to 5.00000...
 *
 * A possible solution can be flooring. Starting from 0 to max+1.
 */

/**
 * Trial 2: Again generate an integer between 0 and max, both included
 * Function: Math.floor(Math.random() * (max+1))
 */

// Initialize variables
max = 5;
random = null;
randomCount = {};

// Initialize the object, including the max+1 value
for (let i = 0; i <= max + 1; i++) {
	randomCount[i] = 0;
}

for (let i = 0; i < 100000; i++) {
	random = Math.floor(Math.random() * (max + 1));
	randomCount[random]++;
}

console.log(randomCount);

/**
 * Note of trial 2: This seems to work perfectly fine!
 * What about min to max then?
 */

/**
 * Trial 3: Generate an integer between min and max, both included
 * Function: min + Math.floor(Math.random() * (max+1-min))
 */

// Initialize variables
min = 1;
max = 5;
random = null;
randomCount = {};

// Initialize the object, starting from 0, and including the max+1 value
for (let i = 0; i <= max + 1; i++) {
	randomCount[i] = 0;
}

for (let i = 0; i < 100000; i++) {
	random = min + Math.floor(Math.random() * (max + 1 - min));
	randomCount[random]++;
}

console.log(randomCount);

/**
 * Note of trial 3: This also works very fine. Thus our getRandomInteger(min, max) can be constructed.
 */

/**
 * A function to generate a random integer between min and max, both included.
 * @param min Minimum value of the integer.
 * @param max Maximum value of the integer.
 * @returns {*} the random integer.
 */
function getRandomInteger (min, max) {
	return min + Math.floor(Math.random() * (max + 1 - min));
}
