/**
 * Task: https://javascript.info/call-apply-decorators#spy-decorator
 */

console.log(`https://javascript.info/call-apply-decorators#spy-decorator`);

// My hard-coded bad solution
/*function spy (func) {
	return function(...arguments) {
		if (work.calls === undefined) {
			work.calls = [];
			work.calls.push(arguments);
		} else {
			work.calls.push(arguments);
		}
		func.apply(this, arguments);
	};
}*/

// Solution by the authors—which is no less beautiful than it should be.
function spy (func) {
	let wrapper = function(...args) {
		wrapper.calls.push(args);
		func.apply(this, args);
	};

	wrapper.calls = [];

	return wrapper;
}

function work (a, b) {
	console.log(a + b); // work is an arbitrary function or method
}

work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
	console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}

/**
 * Task: https://javascript.info/call-apply-decorators#delaying-decorator
 */

console.log(`https://javascript.info/call-apply-decorators#delaying-decorator`);

function f (x) {
	console.log(x);
}

// My solution, which does pass all the arguments, but does NOT pass the context `this`.
/*function delay (func, delayTime) {
	return function(...args) {
		setTimeout(func, delayTime, args[0]);
	};
}*/

// Solution by the authors
function delay (func, delayTime) {
	return function() {
		// Authors say, arrow function doesn't have its own `this` and `arguments`, so they are taken from the wrapper.
		setTimeout(() => func.apply(this, arguments), delayTime);

		// Still, I do not understand why the following wouldn't work:
		// setTimeout(func.apply, delayTime, this, arguments);
	};
}

let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

/*f1000('test1'); // shows "test" after 1000ms
f1500('test2'); // shows "test" after 1500ms*/

/**
 * Task: https://javascript.info/call-apply-decorators#debounce-decorator
 */

console.log(`https://javascript.info/call-apply-decorators#debounce-decorator`);

let startOfThisTask = Date.now();

// Solution with debug prints
/*function debounce (func, delayTime) {
	let wrapper = function(arg) {
		clearTimeout(wrapper.timerId); // In the first iteration, it'll be just `clearTimeout(undefined)`, which results in `undefined`, but not an error!
		console.log(`Cleared timeout at: ${Date.now() - startOfThisTask}\n\tNew arg: ${arg}`); // Debug print
		wrapper.timerId = setTimeout(() => {
			console.log(`Printed '${arg}' at time ${Date.now() - startOfThisTask}`); // Debug print
			return func.apply(this, arguments);
		}, delayTime);
	};

	return wrapper;
}*/

// Solution without debug prints
function debounce (func, delayTime) {
	let wrapper = function() {
		clearTimeout(wrapper.timerId);
		wrapper.timerId = setTimeout(() => func.apply(this, arguments), delayTime);
	};

	return wrapper;
}

f = debounce(console.log, 1000);

f('a');
setTimeout(() => f('b'), 200);
setTimeout(() => f('c'), 500);

// debounced function waits 1000ms after the last call and then runs: console.log('c')

/**
 * Just some tests.
 */

// Test 1
/*function testFunc () {
	console.log(arguments);
	console.log(typeof arguments);
	for (let arg of arguments) {
		console.log(arg);
	}
}*/

// Test 2
/*console.log(testFunc.arguments);*/

// Test 3
/*
function testFunc (arg1) {
	console.log(arg1);
	for (let arg of arguments) {
		console.log(arg);
	}
}
*/

// Test 4
/*function testFunc (arg1, ...args) {
	console.log(arg1);
	for (let arg of args) {
		console.log(arg);
	}
}*/

// testFunc(9, 3, 7, 0);

/**
 * Task: https://javascript.info/call-apply-decorators#throttle-decorator
 */

console.log(`https://javascript.info/call-apply-decorators#throttle-decorator`);

function f2 (a) {
	console.log(a);
}

function throttle (func, delayInMs) {
	let wrapper = function() {
		if (wrapper.isFirst) {
			wrapper.isFirst = false;
			func.apply(this, arguments);
			console.log(`\tPrinted at: ${Date.now() - startTime} ms`);
		} else {
			clearInterval(wrapper.lastIntervalId);
			wrapper.lastFunc = func;
			wrapper.lastIntervalId = setInterval(() => {
				wrapper.lastFunc.apply(this, arguments);
				console.log(`\tPrinted at: ${Date.now() - startTime} ms`);
			}, delayInMs);
		}
	};

	wrapper.isFirst = true;

	return wrapper;
}

// f1000 passes calls to f at maximum once per 1000 ms
let f2_1000 = throttle(f2, 1000);

let startTime = Date.now();

f2_1000(1); // shows 1
f2_1000(2); // (throttling, 1000ms not out yet)
f2_1000(3); // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored

// Stop after 4.5 seconds, before which there should be 4 prints of 3.
setTimeout(() => clearInterval(f2_1000.lastIntervalId), 4500);
