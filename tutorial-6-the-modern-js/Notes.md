# Notes from the Modern JavaScript Tutorial


## Ninja Code
Source: https://javascript.info/ninja-code


## ?
* Task: https://javascript.info/number#repeat-until-the-input-is-a-number
*
* Note: That's way more harder than one would think.
* This happened mainly because javascript converts several variations of string to number. For example, an empty string with only whitespaces is parsed as 0. Weird.
* The solution of javascript.info is insufficient, as it would parse that whitespace-only-string case as the number 0.
* I tried a more correct version of this—checking whether it is an whitespace-only-string first, and then used `isFinite()` to determine whether it is a number.


## Strings
Source: https://javascript.info/string
* To write: about backticks


## Arrays
Source: https://javascript.info/array
* `for..of` vs. `for..in` (https://javascript.info/array#loops)
* So, the simplest way to clear the array is: `arr.length = 0;` (https://javascript.info/array#a-word-about-length)
* I think `+number` is more effective than `parseFloat(number)`. The second one causes to parse strings like `12.34abcd` as `12.34`.
* But in case of `9e600`, `+number` fails, as it returns `Infinity`. But `isFinite(number)` works correctly.
