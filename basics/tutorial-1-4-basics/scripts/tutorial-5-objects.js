/**
 * All about objects.
 * From tutorial: https://www.youtube.com/watch?v=X0ipw1k7ygU&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=5
 */



/**************************************************************************************************
Object literals
 **************************************************************************************************/
console.log('\tObject literals'.toUpperCase());

// Creating an object
let user = {
	name: 'John',
	age: 27,
	email: 'john.lennon@thebeatles.com',
	location: 'London',
	blogs: ['Being for the Benefit of Mr. Kite', 'Happiness is a Warm Gun']
};

// Viewing that object
console.log(user);

//Accessing a property using dot notation
console.log(user.name);

// Changing a property of that object
user.age = 26;
console.log(user);

// Changing/accessing a property using bracket notation
user['location'] = 'NYC';
console.log(user['location']);

// How the bracket notation is useful
const key = 'email';
console.log(user[key]);

// Viewing the type
console.log(typeof user);
console.log(typeof user.name);
console.log(typeof user.age);



/**************************************************************************************************
Methods inside objects
 **************************************************************************************************/
console.log('\tMethods inside objects'.toUpperCase());

// Creating another user to demonstrate method
let user2 = {
	name: 'George',
	age: 25,
	email: 'george.harrison@thebeatles.com',
	location: 'London',
	blogs: ['It\'s All Too Much', 'Within You, Without You', 'I Need You'],
	// A regular method
	login: function () {
		console.log(`The user ${this.name} logged in.`); // A bit weird. but `name` can't seem to access the value, so using `this.name` instead.
	},
	// An arrow method
	logout: () => {
		console.log(`The user ${this.name} logged out.`);
	},
	// The following method uses `this` keyword—which is not supported inside arrow method. So we are using regular method.
	logBlogs: function () {
		console.log('This user has written the following blogs:');
		this.blogs.forEach((blog, index) => {
			console.log(index + ' - ' + blog);
		});
	},
	// Shorthand version of function, with a java-java smell
	logBlogsAgain () {
		console.log('This user has again written the following blogs:');
		this.blogs.forEach((blog, index) => {
			console.log(index + ' - ' + blog);
		});
	}
};

// Use methods
user2.login();
user2.logout();
user2.logBlogs();
user2.logBlogsAgain();



/**************************************************************************************************
More complex objects
 **************************************************************************************************/
console.log('\tMore complex objects'.toUpperCase());

// Creating an array of objects
const blogs = [
	{title: 'Tell Me What You See', year: 1965},
	{title: 'Blackbird', year: 1968}
];

console.log(blogs);

// Creating another user to demonstrate complex objects
let user3 = {
	name: 'Paul',
	age: 27,
	email: 'paul.mccartney@thebeatles.com',
	location: 'London',
	blogs: [
		{title: 'Tell Me What You See', year: 1965},
		{title: 'Blackbird', year: 1968}
	],
	login () {
		console.log(`The user ${this.name} logged in.`);
	},
	logout () {
		console.log(`The user ${this.name} logged out.`);
	},
	logBlogs () {
		console.log('This user has written the following blogs:');
		this.blogs.forEach(blog => {
			console.log(blog.title + ' - ' + blog.year);
		})
	},
};

// Use methods
user3.logBlogs();



/**************************************************************************************************
Primitive and reference types in JS
 **************************************************************************************************/
console.log('\tPrimitive and reference types in JS'.toUpperCase());

/**
 * My Note:
 * Primitive types are: numbers, strings, booleans, null, undefined and symbols.
 * Reference types are: all types of objects, object literals, arrays, functions, dates and so on.
 *
 * The interesting thing is, when we assign value to a reference type as `objNew = objOld`, the point to the same location. So if we change the value of `objOld`, `objNew` will also essentially display the changed value.
 */

// Create two objects
const objOld = {name: 'Robert Johnson'};
const objNew = objOld;

// Print to console
console.log(objOld);
console.log(objNew);

// Change the first object
objOld.name = 'Janis Joplin';

// Print to console again
console.log(objOld);
console.log(objNew);
