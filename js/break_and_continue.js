"use strict";
// 1. Create this file & link it to loops.html

// 2. Prompt the user for an odd number between 1 and 50. Use a loop and a break statement to continue prompting the user if they enter invalid input.

// reuse the isEven function
function isEven(number) {
    return number % 2 === 0;
}

// use a do-while loop because you want to prompt the user for input at least once
// https://javascript.info/while-for
// https://www.plus2net.com/javascript_tutorial/while-loop.php
do {
    var num = parseInt(prompt("Please enter an odd number from 1 to 50", ""));
    if (num >= 1 && num < 50 && !isEven(num)) { // this line is a good candidate for separating out in a function
        break;
    }
} while (true);

// 3. Use a loop and the continue statement to output all the odd numbers between 1 and 50, except for the number the user entered.
// refactored to return a single output string rather than console logging each line
output = "Number to skip is: " + num + "\n";
for (var i = 1; i <= 50; i += 2) {
    // print odd numbers between 1 and 50 (Here is an odd number: n) except
    // for the user entered number print Yikes! Skipping number: n
    if (i === num) {
        output += "Yikes! Skipping number: " + num + "\n";
        continue;
    }
    output += "Here is an odd number: " + i + "\n";
}
console.log(output);
