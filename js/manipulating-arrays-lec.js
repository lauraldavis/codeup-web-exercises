"use strict";
console.log("Let's manipulate some arrays");
/* ***************************************************************
* 						MANIPULATING ARRAYS
*************************************************************** */

//JavaScript has several methods we can use to manipulate arrays.
//We will be covering some of the most commonly used array methods.

/* ***************************************************************
* 						ADDING ELEMENTS
*************************************************************** */
// .push adds elements to the end of an array
// .unshift adds elements to the beginning of an array
// both return the new length of the array

var numStrings = ['three','four','five','six','seven'];

// TO DO TOGETHER: Use the .push method to add the next String in the sequence.
numStrings.push("eight"); // returns the new length of the array (6)
// TO DO TOGETHER: Use the .unshift method to add 'two' before 'three'.
numStrings.unshift("two"); // returns the new length of the array (7)
console.log(numStrings);
// TO DO: Use the .push method to add 'nine' and 'ten'.
numStrings.push("nine", "ten");
// TO DO: Use .unshift to add 'zero' and 'one'. Can this be done with one statement?
numStrings.unshift("zero", "one"); // do as one so they are in correct order (doing separately would end up with one, zero, two...)
// Console log your results.
console.log(numStrings);

/* ***************************************************************
* 						REMOVING ELEMENTS
*************************************************************** */
// returns the element you are removing

var activeCohorts = ['deimos','europa','fortuna','ganymede','ada','bayes'];

// TO DO TOGETHER: Use the .pop method to remove the last cohort in the list.
activeCohorts.pop(); // removed last element (bayes)
// TO DO TOGETHER: Use the .shift method to remove the first cohort in the list.
console.log(activeCohorts.shift()); // returns the removed element (deimos)
// What do we get when we log the return of these methods?
// The removed element

// example of using the output of the removed elements if you stored them to a variable
var graduatedCohorts = [];
graduatedCohorts.push("bayes", "deimos")
console.log(graduatedCohorts);

// TO DO: Use a combination of .pop and .shift methods until only 'fortuna' and 'ganymede' are
// left in the array. Log the updated array.
activeCohorts.pop(); // ada
activeCohorts.shift(); // europa
console.log(activeCohorts);

/* ***************************************************************
* 					LOCATING ARRAY ELEMENTS
*************************************************************** */
// indexOf starts at the front, returns the index of the first element
// lastIndexOf starts at the end, returns the index of the last element
var fruit = ['apples','oranges','grapes','bananas','apples','oranges','grapes'];

// TO DO TOGETHER: Find the first index of 'apples' in the array
fruit.indexOf("apples"); // 0
// TO DO TOGETHER: Find the last index of 'apples' in the array
fruit.lastIndexOf("apples"); // 4

// TO DO: If the last element in the fruits array is 'grapes', remove it from the list.
console.log(fruit);
if(fruit.lastIndexOf("grapes") === fruit.length - 1) {
    fruit.pop();
}
// Console log your new array.
console.log(fruit);
console.log(fruit.indexOf("not-there")); // returns -1

/* ***************************************************************
* 							SLICING
*************************************************************** */
// slicing does not modify the original array, instead it returns a new one (copy/pasting part of an array)
// arr.slice(2, 4); starts slice at index 2 and stops (exclusive) at index 4... includes everything up until index 4 (so pulls index 2 & 3)

var instructors = ['justin','david','sophie','vivian','casey','trant','daniel'];

// TO DO TOGETHER: Create a variable named ganymedeInstructors that stores an array list of
// 'justin','david', and 'sophie'. Do this with the .slice method.
var ganymedeInstructors = instructors.slice(0,3);
console.log(ganymedeInstructors);
// TO DO TOGETHER: Create a variable named fortunaInstructors that stores an array list of all
// instructors starting from 'vivian' onward.
var fortunaInstructors = instructors.slice (3);
console.log(fortunaInstructors);
console.log(instructors);
/* ***************************************************************
* 							REVERSING
*************************************************************** */
// modifies the original array and returns the array.

// TO DO TOGETHER: Take the instructors array and reverse it.
instructors.reverse();
// What will the following console log display?
console.log(instructors);

/* ***************************************************************
* 							SORTING
*************************************************************** */
// sort converts elements to their string equivalent and orders them based on the string value. (Preserving original value)
// Modified original array and returns the array.
var myString = [5, 6, "one", 1, 2, "3", "4", "as", " xylophone", "zed", true, "0", false, ":)"];
console.log(myString.sort());

// TO DO TOGETHER: Sort the instructors array.
instructors.sort();
// Take a look at the results of the console log.
console.log(instructors);

/* ***************************************************************
* 				CONVERTING BETWEEN STRINGS AND ARRAYS
*************************************************************** */
// Split turns strings into arrays using the specified delimiter
// Join turns arrays into strings using the specified delimiter
// Split does not modify the original and returns the new array

var submarine = "We all live in a yellow submarine.";

// TO DO TOGETHER: Split this string up into an array of elements
var submarineArray = submarine.split(" ");
// What will this console log display?
console.log(submarine);
console.log(submarineArray);

// TO DO: Now, join the array elements into a string. Each word should be in its own separate line.
// Log your results.
var newSubmarine = submarineArray.join("\n");
console.log(newSubmarine);

// var newSubmarine = submarineArray.join("<br>");
// For HTML this is useful for generating HTML code, but the console log does not render it as HTML
