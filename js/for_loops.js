"use strict";
// 1. Create this file & link it to loops.html

// 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10). Example: 7 x 1 = 7 \n ... 7 x 10 = 70
function showMultiplicationTable(num) {
    var output = "";
    for (var i = 1; i <= 10; i++) {
        // console.log(num + " x " + i + " = " + num * i);
        // more usable function would output / return a single string, so should concat each loop and output the result at the end
        output += num + " x " + i + " = " + num * i + "\n";
    }
    return output;
}

console.log(showMultiplicationTable(7));

// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. Example: 123 is odd \n 80 is even ...

// reuse isEven function
function isEven(number) {
    return number % 2 === 0;
}

// generate 10 random numbers and log the number & is odd / is even
// declaring/assigning random has to be done INSIDE the for loop
// refactored to create a single output string - more easily convertible to a function (would also be better to break into smaller functions)
var message = "";
for (var i = 1; i <= 10; i++) {
    // generate a random number between 20 and 200, good reference https://www.w3schools.com/js/js_random.asp
    var random = Math.floor((Math.random() * 200 - 20 + 1) + 20);
    // console.log(i + " output " + random + " is " + (isEven(random) ? "even" : "odd"));
    message += i + " output " + random + " is " + (isEven(random) ? "even" : "odd") + "\n";
}
console.log(message);

// 4. Create a for loop that uses console.log to create the output shown below. Example: 1 \n 22 \n 333 \n ... 999999999 (number pyramid)
// refactored to return a single output string rather than console logging each line, and wrapped it in a function.
function displayNumPyramid() {
    var output = "";
    for (var i = 1; i < 10; i++) {
        output += i.toString().repeat(i) + "\n";
    }
    return output;
}
console.log(displayNumPyramid());

// 5. Create a for loop that uses console.log to create the output shown below. Example: 100 \n 95 \n ... 5
// refactored to return a single output string rather than console logging each line
var output = "";
for (var i = 100; i >= 5; i -= 5) {
    output += i + "\n";
}
console.log(output);