# Notes from the Modern JavaScript Tutorial




## Ninja Code
[This](https://javascript.info/ninja-code) is a *really* good documentation. Every single coders on Earth should read a doc like this.




## Object References and Copying
And I misunderstood [this](https://javascript.info/object-copy) for a long time! Objects are copied by reference, so they say:
```
let user = { name: 'John' };

let admin = user;

admin.name = 'Pete'; // changed by the "admin" reference

alert(user.name); // 'Pete', changes are seen from the "user" reference
```

Sure, and I thought this would be work too:
```
let user = { name: 'John' };

let admin = user;

admin = { name: 'Pete' }; // initialized a whole new object

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
Now I know, I knew nothing about recursion. A simple-looking recursion takes ages more than its loop counterpart.

Why do I implement recursion in the first place anyway?
