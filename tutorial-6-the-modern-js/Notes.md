# Notes from the Modern JavaScript Tutorial




## Ninja Code
[This](https://javascript.info/ninja-code) is a *really* good documentation. Every single coders on Earth should read a doc like this.




## Object References and Copying
And I misunderstood [this](https://javascript.info/object-copy) for a long time! Objects are copied by reference, so they say:
```javascript
let user = {name: 'John'};

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference
```

Sure, and I thought this would be work too:
```javascript
let user = {name: 'John'};

let admin = user;

admin = {name: 'Pete'}; // initialized a whole new object

alert(user.name); // I thought this would be 'Pete'!
```

But as I see, this is not how references work! When a whole new object is initialized, the reference is essentially changed, so that does not impact the `user` object here.




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




## Array Methods
### Types of Methods
Summary of this section will be useful perhaps. There is a "cheat sheet" which separated the methods into following types:
1. To add or remove elements
2. To search among elements
3. To iterate over elements
4. To transform the array
5. And an additional one

Now I think, I can distinguish between them. `filter` is really used to filter out some elements in an array, and `map` really maps every element.

Of course I can use `for` loop in any of these cases. But as I learn from this book—the functions are *fine-tuned* to do their specific jobs, and thus much faster.

### To shuffle an array
[This](https://javascript.info/array-methods#shuffle-an-array) problem, at first, looked very trivial. Solved it using `array.sort()`, and got very pleased—how amazingly the sort function can be used to shuffle!

And then got a slap on my face. Woah—this just doesn't work! According to the above reference:
> Why it doesn't work? Generally speaking, `sort` is a “black box”: we throw an array and a comparison function into it and expect the array to be sorted. But due to the utter randomness of the comparison the black box goes mad, and how exactly it goes mad depends on the concrete implementation that differs between engines.

This made sense too. `sort` was tuned for sorting, not doing the complete opposite! And then I came to know about [Fisher-Yates](https://en.wikipedia.org/wiki/Fisher%E2%80%93Yates_shuffle) algorithm. Very simple, yet very effective.

I love good algorithms.

My mind is blowing out.




## Map and Set
* As they quote:
  > The alternative to `Set` could be an array of users, and the code to check for duplicates on every insertion using arr.find. But the performance would be much worse, because this method walks through the whole array checking every element. `Set` is much better optimized internally for uniqueness checks.




## Date and Time
### Not `getYear()`, but `getFullYear()`
As they explain:
> Many JavaScript engines implement a non-standard method `getYear()`. This method is deprecated. It returns 2-digit year sometimes. Please never use it. There is `getFullYear()` for the year.

### Others
* `Date.now()` gives the current time in milliseconds, *without* creating an intermediate `Date` object—thus giving a better performance.




## Recursion
1. Now I know, I knew nothing about recursion. A simple-looking recursion takes ages more than its loop counterpart. Why do we implement recursion in the first place anyway?
2. An [interesting case](https://javascript.info/recursion#output-a-single-linked-list-in-the-reverse-order), where the loop version essentially does the same job as recursion.




## Rest Parameters and Spread Syntax
1. The `...` in JavaScript means either rest parameters or spread syntax.
2. Spread syntax is really useful while copying an object like `let objNew = { ...objOld };`




## Variable Scope, Closure
### Surprise Optimizations of V8, and Debugging
Here's some beauty, again. I knew a bit about lexical environments due to our damned Compiler course. Now I came to know, how V8 engine optimizes these environments. That is, they analyze variable usage and if an outer variable is not used—it is removed.

And that causes surprises in debug mode, so much so that the authors say, if we are debugging Chrome/Edge/Opera, sooner or later we will meet this. :3

### Dead Zones
Programming languages never fail to surprise. Like the following snippet:
```javascript
let x = 1;

function func () {
	console.log(x); // What will be printed?

	let x = 2;
}

func();
```

No, it's not 1.

And no, it's not 2 either. It's en error!

Why? Here comes the concept of `<uninitialized>` variables. When an execution block starts, it 'knows' about all the variables, and they are marked as `<uninitialized>`. It looks like this:
```javascript
// 1. Start of lexical environment. Variable `str` is known and marked as `<uninitialized>`.

let str; // 2. Now the variable is marked as `undefined`.

str = `Lennon`; // 3. And now this has a value.
```

This is the reason why the first code snippet ends up with an error. In the newly created lexical environment, `x` is `<uninitialized>`, and printing that would not work.

Details: https://javascript.info/closure#step-1-variables

Corresponding Task: https://javascript.info/closure#is-variable-visible

### Another Weird Behaviour of JavaScript
[This](https://javascript.info/closure#sort-by-field) problem initially looked simple, with an immediate solution like this:
```javascript
let users = [
	{name: 'John', age: 20, surname: 'Johnson'},
	{name: 'Pete', age: 18, surname: 'Peterson'},
	{name: 'Ann', age: 19, surname: 'Hathaway'},
];

function byField (fieldName) {
	return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
}
```

This *is* the correct solution, but the problem was with checking. I tried it like this:
```javascript
users.sort(byField('name'));
console.log(users);
users.sort(byField('age'));
console.log(users);
```

And surprisingly, both the console logs are printed being sorted by age.

If I swap the sorts:
```javascript
users.sort(byField('age'));
console.log(users);
users.sort(byField('name'));
console.log(users);
```

Then both the logs are printed being sorted by name. It seems like the last sort is *the* sort—which doesn't make sense.

So I tried to add a debugger:
```javascript
users.sort(byField('name'));
console.log(users);
debugger;
users.sort(byField('age'));
console.log(users);
```

When the program halts at `debugger`, `users` is printed being sorted by name, and when resumed, the next print is sorted by age.

**I could not figure out yet why and how this happens.**




## The Old `var`
Source: https://javascript.info/var
1. `var` has no block-scope—that's pretty interesting. A simple `i` in for loop is visible outside the loop.<br>This. Is. Ugly.
2. A `var` with same name can be declared twice. That's also ugly.
3. All the `var` declarations are hoisted to the top. Not so much ugly—but who on Earth codes like this?




## Function object, NFE
### On Overriding `toString` of a function
[This](https://javascript.info/function-object#sum-with-an-arbitrary-amount-of-brackets) task made me think a lot. Came up with a non-pretty solution, then adapted the authors' one.

But now there seems to be a problem with overriding the `toString` method of a function. Say, we do it like this:
```javascript
function testFunc () {
	return 0;
}

testFunc.toString = function() {
	return `A string!`;
};
```

Then the `alert` and `console.log` functions behaves very differently:
```javascript
alert(testFunc); // Prints `A string!`
console.log(testFunc); // Prints the whole function. 😒
console.log(`${testFunc}`); // Prints `A string!`
```

I can indeed wrap the function inside a `` `${}` ``, but that's not the neat way.

Still couldn't figure out how to deal with this.
