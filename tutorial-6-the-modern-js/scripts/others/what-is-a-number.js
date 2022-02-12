/**
 * Well, how to check whether input is a number?
 * JavaScript gives us a handful of very likely solutions, which seems to work at first, and then fails in a special case.
 *
 * In this script, I tried to compare three ways:
 * <ol>
 *   <li> <code>!isNan(input)</code> (which gives the same output as <code>+input === +input</code>)
 *   <li> <code>!isNan(parseFloat(input))</code>
 *   <li> <code>isFinite(input)</code>
 * </ol>
 *
 * Here the inputs are taken from an array, and the outputs are printed in the console.
 *
 * For further documentation, a markdown table is generated and also printed in the console.
 *
 * Note: JavaScript does not print numeric separator inside a number. In that single case, the markdown output was manually corrected. Also, the comments were manually added later, of course.
 *
 */

let inputs = [
	123, '123', 12.3, '12.3', '   12.3   ',
	1_000_000, '1_000_000',
	'0b11111111', '0o377', '0xFF',
	'', '    ',
	'abc', '12.34Ab!@#$',
	'10e100', '10e1000',
	null, undefined, Infinity];

let markdownOutput = `| \`input\` | \`!isNaN(input)\` or <br>\`+input === +input\` | \`!isNaN(parseFloat(input))\` | \`isFinite(input)\` | Comment |
| :---: | :---: | :---: | :---: | :--- |\n`;

for (let input of inputs) {
	let outputs = [];
	outputs.push(!isNaN(input));
	outputs.push(!isNaN(parseFloat(input)));
	outputs.push(isFinite(input));

	if (typeof input === 'string') {
		// Output with quotations
		console.log(`'${input}'`);
		markdownOutput += `| '${input}'`;
	} else {
		// Output without quotes
		console.log(input);
		markdownOutput += `| ${input}`;
	}

	for (let output of outputs) {
		console.log('\t' + output);
		if (output === true) {
			markdownOutput += ` | <div style="color:limegreen">true</div>`;
			// markdownOutput += ` | ✔️`;
		} else {
			markdownOutput += ` | <div style="color:orangered">false</div>`;
			// markdownOutput += ` | ❌`;
		}
	}

	markdownOutput += ` ||\n`;
}

// Replace two or more whitespaces with $nbsp;
markdownOutput = markdownOutput.replaceAll(`  `, `&nbsp;&nbsp;`);

// Print markdown to console
console.log(markdownOutput);
