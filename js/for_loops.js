"use strict";
// 1. Create this file & link it to loops.html

// 2. Create a function named showMultiplicationTable that accepts a number and console.logs the multiplication table for that number (just multiply by the numbers 1 through 10). Example: 7 x 1 = 7 \n ... 7 x 10 = 70
function showMultiplicationTable(num) {
    for (var i = 1; i <= 10; i++) {
        console.log(num + " x " + i + " = " + num * i);
    }
}

showMultiplicationTable(7);

// 3. Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and output to the console whether each number is odd or even. Example: 123 is odd \n 80 is even ...

// reuse isEven function
function isEven(number) {
    return number % 2 === 0;
}

// generate 10 random numbers and log the number & is odd / is even
// declaring/assigning random has to be done INSIDE the for loop
for (var i = 1; i <= 10; i++) {
    // generate a random number between 20 and 200
    var random = Math.floor((Math.random() * 180) + 20);
    console.log(i + " output " + random + " is " + (isEven(random) ? "even" : "odd"));
}

// 4. Create a for loop that uses console.log to create the output shown below. Example: 1 \n 22 \n 333 \n ... 999999999 (number pyramid)
for (var i = 1; i < 10; i++) {
    console.log(i.toString().repeat(i));
}

// 5. Create a for loop that uses console.log to create the output shown below. Example: 100 \n 95 \n ... 5
for (var i = 100; i >= 5; i -= 5) {
    console.log(i);
}