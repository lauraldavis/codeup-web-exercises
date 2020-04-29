"use strict";
// 1. Create this file & link it to loops.html

// 2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.
function isEven(number) {
    return number % 2 === 0;
}

// https://javascript.info/while-for
// https://www.plus2net.com/javascript_tutorial/while-loop.php
do {
    var num = parseInt(prompt("Please enter an odd number from 1 to 50", ""));
    if ( num >= 1 && num < 50 && !isEven(num) ) {break;}
} while ( true );

// 3. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
console.log("Number to skip is: " + num);
for (var i = 1; i <= 50; i += 2) {
    // print odd numbers between 1 and 50 (Here is an odd number: n) except
    // for the user entered number print Yikes! Skipping number: n
    if (i === num) {
        console.log("Yikes! Skipping number: " + num);
        continue;
    }
    console.log("Here is an odd number: " + i);
}
