"use strict";
console.log("Welcome to intro to arrays");

/*
var arr1 = [1,2,3,4,5];
var arr2 = ["a","b","c"];
var arr3 = [6,"d",7,"e"];
// var arr4 = [[1,2,3,4,5],["a","b","c"],[6,"d",7,"e"]];
// // same thing as
// var arr4 = [arr1, arr2, arr3];
var arr5 = [true, false, 1, 0];

var arr4 = [[1,2,3,4,5],["a","b","c"],[6,"d",7,"e"]];
console.log(arr1);
console.log(arr1[0]); // returns 1
console.log(arr1[5]); // returns undefined
console.log(arr4[1]); // returns (3) ["a","b","c"]
console.log(arr4[1][2]); // returns c
*/
// You can store anything that is a JS data type in an array - string, NaN, isNaN("five") <- gets evaluated and displays true (doesn't store it that way)
var arrTest = ["test", NaN, undefined, "", null, isNaN("five")];

/*
// If you find yourself nesting arrays within arrays within arrays, look into using objects instead
console.log(arr1.length); // returns a number data type, the number of elements in the array
console.log(arr1[arr1.length - 1]); // returns the last element
var arrLength = arr1.length; // assigns 5 to variable
arr1.push(6);
console.log(arrLength); // still prints 5

// Iterating over Arrays
var colors = ["red", "orange", "yellow", "green", "blue", "violet"];
// For Loops
// for(initial variable; condition; increment){}
// for(starting point; stop condition; how to get there){}

// iterating forwards through the array - can start with 0 index or anywhere
for( var i = 0; i < colors.length; i++ ) {
    console.log(colors.[i]);
}
// iterating backwards through the array (can't go backwards with the ForEach Loop)
for( var i = colors.length - 1; i >= 0; i-- ) {
    console.log(colors.[i]);
}

// ForEach Loop - a method specifically built for arrays, takes in the parameter: function(){}
// function has 3 available parameters, must be in the specific order: element, index, array. (But you could just list the first 2 if you don't need the 3rd.)
// it has to loop through every element in the array, beginning to end in order. Useful when you need to modify every element in array.
colors.forEach(function(element, index, array){
    console.log(element, index); // red 0 / orange 1 / yellow 2, etc
    // console.log(array);
});
*/

/* ***************************************************************
* 							INTRO TO ARRAYS
*************************************************************** */


// An array is a data structure that holds an ordered list of items
// Each slot in a JavaScript array can hold any type of data


/* ***************************************************************
* 					DECLARING AN ARRAY
*************************************************************** */
// We declare an array with square brackets ==> []

// an empty array ==> []

//An array with one element ==> [1]

// An array with 5 elements ==> [1, 2, 3, 4, 5]

// An array with 3 elements all of different types ==> 	["one", 42, [8, 9, 10]]
// Notice that the array above does *not* have 5 elements, rather the last element is itself an array with 3 elements in it

//TODO TOGETHER: Declare an empty array set equal to the variable `pies` - then console.log `pies`

var pies = [];
console.log(pies);

//TODO TOGETHER: Set the following array equal to `pies` - then console.log `pies`
pies = ["apple", "cherry", "key lime", "huckleberry"];
console.log(pies);

// TODO TOGETHER: Set the following array equal to variable called `shapes`. Console.log the variable
var shapes = ['square', 'rectangle', 'circle', 'triangle'];
console.log(shapes);

// TODO: Set the following array equal to a variable called `instructors` - then console.log the variable
var instructors = ["sophie", "vivian", "david", "justin", "daniel", "fernando", "trant"];
console.log(instructors);

// TODO: Set the following array equal to a variable called `daysOfTheWeek` - then console.log the variable
var daysOfTheWeek = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"];
console.log(daysOfTheWeek);

// TODO: create an array of favorite foods and set to a variable called `favoriteFoods` - then console.log the variable
var favoriteFoods = ["tortilla chips", "guacamole", "veggie pizza", "aged gouda cheese"];
console.log(favoriteFoods);

/* ***************************************************************
* 					COUNTING AN ARRAY
*************************************************************** */

//We can also count the length of an array by using the `.length` property

// TODO TOGETHER: Log the length of shapes array
console.log(shapes.length);

// TODO: console.log the length of the instructors array
console.log(instructors.length);

// TODO: console.log the length of the daysOfTheWeek array
console.log(daysOfTheWeek.length);

// TODO: console.log the length of the favoriteFoods array
console.log(favoriteFoods.length);

/* ***************************************************************
* 				ACCESSING ARRAY ELEMENTS
*************************************************************** */
// ** NOTE ** Arrays are zero-indexed, which means the first slot in an array is 0.

// TODO TOGETHER: What do we expect the following to output?
console.log(shapes[0]); // square
console.log(shapes[1]); // rectangle
console.log(shapes[2]); // circle
console.log(shapes[3]); // triangle
console.log(shapes[4]); // undefined

// TODO: console.log each element of the instructors array
// TODO: console.log the first three elements of the daysOfTheWeek array
// TODO: console.log the first three elements of the favoriteFoods array


// TODO: create a function called `returnLastElement` that accepts an array and returns the last element of that array
function returnLastElement(arr) {
    return arr[arr.length - 1];
}

console.log(returnLastElement(shapes)); // triangle

/* ***************************************************************
* 					ITERATING ARRAYS
*************************************************************** */
//  TODO TOGETHER: Log each element of the shapes array
console.log(shapes[0]); // square
console.log(shapes[1]); // rectangle
console.log(shapes[2]); // circle
console.log(shapes[3]); // triangle

// TODO TOGETHER: Using a for loop, iterate through the shapes array and log each shape
for (var i = 0; i < shapes.length; i++) {
    console.log(shapes[i]);
}

// TODO TOGETHER: Alert "that's my favorite shape!" when your favorite shape is iterated over in the loop.
for (var i = 0; i < shapes.length; i++) {
    console.log(shapes[i]);
    if (shapes[i] === "circle") {
        alert("That's my favorite shape!");
        // break; // if you want to stop the loop when you reach that shape
    }
}

// TODO: What happens if we change var i = 1? or var i = 2;
// It starts at the index provided instead of the beginning
// TODO: What are benefits of using loops to iterate?
// Shorter simpler code
// TODO: How does the loop know when to stop iterating?
// When it reaches the last index, or a break
// TODO: Using a for loop, iterate through the instructors array and console.log each instructor
for (i = 0; i < instructors.length; i++) {
    console.log(instructors[i]);
}
// TODO: Using a for loop, iterate through the daysOfTheWeek array and console.log each day of the week
for (i = 0; i < daysOfTheWeek.length; i++) {
    console.log(daysOfTheWeek[i]);
}
// TODO: Using a for loop, iterate through the favoriteFoods array and console.log each favorite food
for (i = 0; i < favoriteFoods.length; i++) {
    console.log(favoriteFoods[i]);
}
// TODO: Refactoring the instructor loop, alert "hey, I know <INSTRUCTOR NAME HERE>" if you have had class with that instructor. If you have not had class with that instructor, alert "I haven't had class with <INSTRUCTOR NAME HERE> yet!"
for (i = 0; i < instructors.length; i++) {
    console.log(instructors[i]);
    // if(instructors[i] === "sophie" || instructors[i] === "david" || instructors[i] === "justin") {
    //     alert("hey, I know " + instructors[i]);
    //     // break; // if you want to stop the loop when you reach that shape
    // } else {
    //     alert("I haven't had class with " + instructors[i] + " yet!");
    // }
    switch (instructors[i]) {
        case "sophie":
        case "david":
        case "justin":
            alert("hey, I know " + instructors[i]);
            continue;
        default:
            alert("I haven't had class with " + instructors[i] + " yet!");
    }
}

/* ***************************************************************
* 						FOR EACH ARRAY
*************************************************************** */

// TODO TOGETHER: Using a for each loop, console.log each shape from the shapes array
shapes.forEach(function (shape) {
    console.log(shape);
});

// TODO TOGETHER: Using a for each loop, console.log each element from the following array:
var pies = ["apple", "cherry", "key lime", "huckleberry"];
pies.forEach(function (pie) {
    console.log(pie);
});

// TODO: Using a for each loop, iterate through the instructors array and console.log each instructor
instructors.forEach(function (instructor) {
    console.log(instructor);
});
// TODO: Using a for each loop, iterate through the daysOfTheWeek array and console.log each day of the week
daysOfTheWeek.forEach(function (day) {
    console.log(day);
});
// TODO: Using a for each loop, iterate through the favoriteFoods array and console.log each favorite food
favoriteFoods.forEach(function (food) {
    console.log(food);
});

