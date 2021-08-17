# Notes from the Modern JavaScript Tutorial


## Ninja Code
[This](https://javascript.info/ninja-code) is a *really* good documentation. Every single coders on Earth should read a doc like this.


## Numbers
### Rough Notes
* `let billion = 1_000_000_000`: A sweet way to write large numbers. JS just ignores the underscores inside a number.
* And of course, the sweeter way `let billion = 1e9` exists too!'
* Knew, but still, `trunc` and `floor` is not the same—to be exact—in case of negative numbers.

### How detect whether the input is a number?
[This](https://javascript.info/number#repeat-until-the-input-is-a-number) and [this](https://javascript.info/array#sum-input-numbers) made me think, a lot. Was way more harder than one would assume.

Spent a whole evening behind this, did some research, finally [answered in Stack Overflow](https://stackoverflow.com/a/68821383/6606776).


## Strings
* As I understand, single and double quote string in JS exists only for historical reasons. Backticks have more advantages, and I think I'm going to use backticks from now on.


## Arrays
### `for..of` vs. `for..in`
`for..of` is specially optimized for arrays, where `for..in` is optimized for general objects. Because of this, the second one is 10-100 times slower according to [this](https://javascript.info/array#loops) source.

Also, as that source notes, `for..in` has another specific problem too.

### Others
So [this](https://javascript.info/array#a-word-about-length) says, the simplest way to clear the array is: `arr.length = 0`. This may become helpful in certain cases.
