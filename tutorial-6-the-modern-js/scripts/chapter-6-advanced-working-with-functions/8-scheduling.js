/**
 * Task: https://javascript.info/settimeout-setinterval#output-every-second
 */

console.log(`https://javascript.info/settimeout-setinterval#output-every-second`);

function printNumbersUsingInterval (from, to) {
	if (from > to) return false;

	let nextNumber = from;

	function printNextNumber () {
		if (nextNumber > to) {
			clearInterval(id);
			return true;
		} else {
			console.log(nextNumber++);
		}
	}

	let id = setInterval(printNextNumber, 1000);
}

function printNumbersUsingTimeout (from, to) {
	if (from > to) return false;

	let nextNumber = from;

	function printNextNumber () {
		if (nextNumber > to) {
			return true;
		} else {
			console.log(nextNumber++);
			setTimeout(printNextNumber, 1000);
		}
	}

	setTimeout(printNextNumber, 1000);
}

printNumbersUsingInterval(3, 12);
// printNumbersUsingTimeout(3, 12);
