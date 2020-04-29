"use strict";
// 1. Create this file & link it to loops.html

// While Loops
// 2. Create a while loop that uses console.log() to create the output shown below. 2 \n 4 \n 8 \n 16 \n ... through 65536
var num = 2;
var output = "";
while (num <= 65536) {
    output += num + "\n";
    num = num * 2;
}
console.log(output);


// Do While Loop
// 1. An ice cream seller can't go home until she sells all of her cones. First write enough code that generates a random number between 50 and 100 representing the amount of cones to sell before you start your loop. Inside of the loop your code should generate another random number between 1 and 5, simulating the amount of cones being bought by her clients. Use a do-while loop to log to the console the amount of cones sold to each person. This is a way get the random numbers for this exercise.

// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5
// Math.floor(Math.random() * 5) + 1;

// The output should be similar to the following:
// 5 cones sold...  // if there are enough cones
// Cannot sell you 6 cones I only have 3...  // If there are not enough cones
// Yay! I sold them all! // If there are no more cones

var output = "";

do {
    // console.log("Total cones to sell is " + allCones);
    var buyCones = Math.floor(Math.random() * 5) + 1;
    if (buyCones <= allCones) {
        // console.log(buyCones + " cones sold...");
        output += buyCones + " cones sold..." + "\n";
        allCones -= buyCones;
        // console.log("New total is " + allCones);
        if (allCones === 0) {
            output += "Yay! I sold them all!";
        }
    } else {
        // console.log("Cannot sell you " + buyCones + " I only have " + allCones + "...");
        output += "Cannot sell you " + buyCones + " I only have " + allCones + "..." + "\n";
    }
} while (allCones >= 1);

console.log(output);