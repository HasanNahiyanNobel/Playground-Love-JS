/**
 * All about document object models.
 * From tutorial: https://www.youtube.com/watch?v=wKBu_dEaF9E&list=PL4cUxeGkcC9haFPT7J25Q9GRB_ZkFrQAc&index=6
 */



/**************************************************************************************************
Query selector
 **************************************************************************************************/
console.log('\tQuery selector'.toUpperCase());

/**
 * My Note: The querySelector function works *after* the document is ready. So it's better to declare these javascripts at the bottom of the page.
 * Corresponding issue and solution: https://stackoverflow.com/q/20495960
 */

let element;
element = document.querySelector('p');
console.log(element);
element = document.querySelector('div');
console.log(element);
element = document.querySelector('div.box');
console.log(element);
element = document.querySelector('div.box.button');
console.log(element);

/**
 * My Note: However, the querySelector returns just the first element found. To select all, we have to use querySelectorAll (of course).
 */

let elements;
elements = document.querySelectorAll('a');
console.log(elements);
console.log(elements[1]);

// Printing using callback function
elements.forEach(element => {
	console.log(element);
});



/**************************************************************************************************
Getting elements by ID, class name, or tag name
 **************************************************************************************************/
console.log('\tGetting elements by ID, class name, or tag name'.toUpperCase());

/**
 * What to Notice:
 * IDs are unique for an element, where classes and tag names are not. So we can get only one element by ID, but we may get multiple elements by class tag name.
 */

// Get an element by ID, then print
const elementByID = document.getElementById('sum');
console.log(elementByID);

// Get elements by class, then print
const elementsByClass = document.getElementsByClassName('box');
console.log(elementsByClass);

// Get elements by tag name, then print
const elementsByTagName = document.getElementsByTagName('p');
console.log(elementsByTagName);



/**************************************************************************************************
Changing text inside elements
 **************************************************************************************************/
console.log('\tChanging text inside elements'.toUpperCase());

// Change the first paragraph
const changeableParagraph = document.querySelector('p');
console.log(changeableParagraph.innerText);
changeableParagraph.innerText = 'এইটা আমাদের নতুন প্যারাগ্রাফ!';

// Changing all the paragraphs.
const allTheParagraphs = document.querySelectorAll('p');
allTheParagraphs.forEach(paragraph => {
	console.log(paragraph.innerText);
	/**
	 * Commenting out the following line—as this is a potential destructive action. Takes the text only, without hyperlinks, and results in removal of every hyperlink.
	 */
	// paragraph.innerText += '::::এই লেখাটা নতুন করে আসলো!';
});

// Changing inner HTMLs instead of text
const allTheBoxes = document.querySelectorAll('.box');
allTheBoxes.forEach(box => {
	box.innerHTML = '<b><i>' + box.innerHTML + '</i></b>';
});



/**************************************************************************************************
Changing attributes
 **************************************************************************************************/
console.log('\tChanging attributes'.toUpperCase());

// Changing link attributes
const links = document.querySelectorAll('a');
links.forEach(link => {
	// Print the attribute
	console.log(link.getAttribute('href'));
	// And change it!
	link.setAttribute('href', 'https://www.google.com');
});

// Changing backgrounds of boxes
const boxes = document.querySelectorAll('div.box');
boxes.forEach(box => {
	/**
	 * Commenting out the following line, as this is also destructive. This kind of changing removes all the existing style attributes—which we usually don't want. In this case, this is resetting the border color of the first box.
	 */
	// box.setAttribute('style', 'background: cornflowerblue');
});

// Changing background of boxes again, but this time not destroying the other attributes
boxes.forEach(box => {
	/**
	 * Commenting this one out too, as it overrides hover action.
	 */
	// box.style.backgroundColor = 'cornflowerblue';
});



/**************************************************************************************************
Changing classes
 **************************************************************************************************/
console.log('\tChanging classes'.toUpperCase());

boxes.forEach(box => {
	box.classList.add('button');
});
