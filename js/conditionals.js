(function() {
"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
function analyzeColor(strColor) {
    if (strColor === "blue") {
        return "blue is the color of the sky";
    } else if (strColor === "red") {
        return "Strawberries are red";
    } else {
        return "I don't know anything about " + strColor;
    }
}

console.log(analyzeColor("blue"));
console.log(analyzeColor("red"));
console.log(analyzeColor("cyan"));
console.log(analyzeColor("purple"));

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */

console.log(analyzeColor(randomColor));

/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function analyzeColorSwitch(strColor) {
    switch (strColor) {
        case  "blue":
            return "blue is the color of the sky";
            break;
        case "red":
            return "Strawberries are red";
            break;
        default:
            return "I don't know anything about " + strColor;
            break;
    }
}

/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var userColor = prompt("Enter the name of a color:").toLowerCase();
alert(analyzeColorSwitch(userColor));

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNum,totalAmount) {
    var discount = 0;
    switch(luckyNum) {
        case 1:
            discount = .10;
            break;
        case 2:
            discount = .25;
            break;
        case 3:
            discount = .35;
            break;
        case 4:
            discount = .50;
            break;
        case 5:
            discount = 1.0;
            break;
        default:
            discount = 0;
            break;
    }
    return (discount === 0) ? totalAmount : totalAmount - (totalAmount * discount);
}

console.log(calculateTotal(0, 100), 100);
console.log(calculateTotal(4, 100), 50);
console.log(calculateTotal(5, 100), 0);

/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 5 (the * 6 is a non-inclusive maximum, so the correct instruction would say between 0 and 5.)
var luckyNumber = Math.floor(Math.random() * 6);

var totalBill = parseFloat(prompt("Enter the total bill, in dollars and cents, Example 103.29"));
// parseFloat() is a better solution than Number() in this case.
// The toFixed() method changes a value to a string, so it's better not to use it until displaying the alert.
var newBill = calculateTotal(luckyNumber,totalBill);
var discountMessage = (totalBill === newBill) ? ". Sorry, no discount this time!" : ". Congrats, you got a discount!";
alert("Your lucky number is " + luckyNumber + ", your bill was $" + totalBill.toFixed(2) + ", your NEW bill amount is $" + newBill.toFixed(2) + discountMessage);

/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

// It's better (more flexibile/versatile) to return values instead of alerts on these 3 functions (put the alerts in the main function).
function isEven(num) {
    return (num % 2 === 0) ? "even" : "odd";
}

function plus100(num) {
    return num + 100;
}

function isPositive(num) {
    return (num >= 0) ? "positive" : "negative";
}

function enterNumber() {
    var promptInput = (confirm("Would you like to enter a number? Click OK.")) ? parseFloat(prompt("Enter a number:")) : undefined;
    // better to use parseFloat or parseInt instead of Number
    if (typeof promptInput === "undefined") {
        alert("You're no fun.");
    } else if (isNaN(promptInput)) {
        alert("Your entry is not a valid number!");
    } else {
        alert("The number you entered (" + promptInput + ") is an " + isEven(promptInput) + " number.");
        alert("The number you entered (" + promptInput + "), plus 100, equals: " + plus100(promptInput) + ".");
        alert("The number you entered (" + promptInput + ") is a " + isPositive(promptInput) + " number.");
    }
}

enterNumber();

})();