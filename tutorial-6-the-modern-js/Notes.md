# Notes from the Modern JavaScript Tutorial


## Ninja Code
Source: https://javascript.info/ninja-code

A *really* good documentation. Every single coders on Earth should read a doc like this.


## Numbers
### Rough Notes
* `let billion = 1_000_000_000`: A sweet way to write large numbers. JS just ignores the underscores inside a number.
* And of course, the sweeter way `let billion = 1e9` exists too!'
* Knew, but still, `trunc` and `floor` is not the same—to be exact—in case of negative numbers.

### How detect whether the input is a number?
[This](https://javascript.info/number#repeat-until-the-input-is-a-number) and [this](https://javascript.info/array#sum-input-numbers) made me think, a lot. Was way more harder than one would assume.

Three immediate solution feels like:
1. `!isNaN(input)` (which gives the same output as `+input === +input`)
2. `isNaN(parseFloat(input))`
3. `isFinite(input)`

But are any of them correct in every scenario?

I tested these functions in several scenarios the file `tutorial-6-the-modern-js/scripts/what-is-a-number.js`, and generated output as markdown. This is what the output looks like:

| `input` | `!isNaN(input)` or <br>`+input === +input` | `!isNaN(parseFloat(input))` | `isFinite(input)` | Comment |
| :---: | :---: | :---: | :---: | :--- |
| 123 | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> ||
| '123' | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> ||
| 12.3 | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> ||
| '12.3' | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> ||
| '&nbsp;&nbsp; 12.3&nbsp;&nbsp; ' | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | Empty whitespace trimmed, as expected. |
| 1_000_000 | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | Numeric separator understood, also expected. |
| '1_000_000' | <div style="color:orangered">false</div> | <div style="color:limegreen">true</div> | <div style="color:orangered">false</div> | Surprise! JS just won't parse numeric separator inside a string. For details, check [this](https://github.com/tc39/proposal-numeric-separator/issues/32) issue. (Why then parsing as float worked though? Well, it didn't. 😉) |
| '0b11111111' | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | Binary form understood, as it should've. |
| '0o377' | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | Octal form understood too. |
| '0xFF' | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | Of course hex is understood. Did anybody think otherwise? 😒 |
| '' | <div style="color:limegreen">true</div> | <div style="color:orangered">false</div> | <div style="color:limegreen">true</div> | Should empty string be a number? |
| '&nbsp;&nbsp;&nbsp;&nbsp;' | <div style="color:limegreen">true</div> | <div style="color:orangered">false</div> | <div style="color:limegreen">true</div> | Should a whitespace-only string be a number? |
| 'abc' | <div style="color:orangered">false</div> | <div style="color:orangered">false</div> | <div style="color:orangered">false</div> | Everybody agrees, not a number. |
| '12.34Ab!@#$' | <div style="color:orangered">false</div> | <div style="color:limegreen">true</div> | <div style="color:orangered">false</div> | Ah! Now it's quite understandable what `parseFloat()` does. Not impressive to me, but may come handy in certain cases. |
| '10e100' | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | 10<sup>100</sup> is a number indeed.<br>**But caution!** It's way greater than the maximum safe integer value 2<sup>53</sup> (about 9×10<sup>15</sup>). Read [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER) for details. |
| '10e1000' | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | <div style="color:orangered">false</div> | Say with me, [help!](https://www.youtube.com/watch?v=2Q_ZzBGPdqE) <br>Though not as crazy as it may seem. In JavaScript, a value larger than ~10<sup>308</sup> is rounded to infinity, that's why. <br>And yes, `isNaN()` considers infinity as a number, and `parseFloat()` parses infinity as infinity. |
| null | <div style="color:limegreen">true</div> | <div style="color:orangered">false</div> | <div style="color:limegreen">true</div> | Now this is awkward. In JS, when a conversion is needed, null becomes zero, and we get a finite number. <br>Then why `parseFloat(null)` should return a `NaN` here? Someone please explain this design concept to me. |
| undefined | <div style="color:orangered">false</div> | <div style="color:orangered">false</div> | <div style="color:orangered">false</div> | As expected. |
| Infinity | <div style="color:limegreen">true</div> | <div style="color:limegreen">true</div> | <div style="color:orangered">false</div> | As explained before, `isNaN()` considers infinity as a number, and `parseFloat()` parses infinity as infinity. |

So...which of them is 'correct'?

Should be clear by now, it depends largely on what we need. For example, we may want to consider a null input as 0. In that case `isFinite()` will work fine.

Again, perhaps we will take a little help from `isNaN()` when 10<sup>10000000000</sup> is needed to be considered a valid number (although the question remains—why would it be, and how do we handle that)!

Of course, we can manually exclude any of the scenarios.

In my case, I needed exactly the outputs of `isFinite()`, except for the null case. So my code looked like this:
```
if (input === null) {
	// Null input
} else if (isFinite(input)) {
	// Input is a number. Empty or whitespace-only string is considered 0.
} else {
	// Not a number.
}
```


## Strings
Source: https://javascript.info/string
* To write: about backticks


## Arrays
Source: https://javascript.info/array
* `for..of` vs. `for..in` (https://javascript.info/array#loops)
* So, the simplest way to clear the array is: `arr.length = 0;` (https://javascript.info/array#a-word-about-length)
