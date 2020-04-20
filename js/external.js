"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

// 2. Use a prompt to ask for the user's favorite color. Use the user's response to alert a message that says that the color entered is your favorite color too.
//
// For example, if the user enters "blue", your code should alert a message that says:
//
// "Great, blue is my favorite color too!"

var favoriteColor = prompt("What is your favorite color?");
alert("Great, " + favoriteColor + " is my favorite color too!");

/* 3. Complete exercise 3 from the previous lesson, but write your code in the external.js file instead of in the console.
*  When the exercise asks you to use a number, instead use a prompt to ask the user for that number.
*  Use an alert to show the results of each problem.
*/

// 3. Write some JavaScript code, that is, variables and operators, to describe the following scenarios. Do not worry
// about the real operations to get the values, the goal of these exercises is to understand how real world conditions
// can be represented with code.

// 3a. You have rented some movies for your kids: The little mermaid (for 3 days), Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it). If price for a movie per day is $3, how much
// will you have to pay?
var dailyRateDollars = Number(prompt("Enter the daily movie rental price in dollars:"));
var littleMermaidDays = Number(prompt("How many days rental for The Little Mermaid?:"));
var brotherBearDays = Number(prompt("How many days rental for Brother Bear?:"));
var herculesDays = Number(prompt("How many days rental for Hercules:"));
var totalDays = littleMermaidDays + brotherBearDays + herculesDays;
var totalPaymentDue = totalDays * dailyRateDollars;
alert("3a. The total movie rental payment due will be: $" + totalPaymentDue.toFixed(2));

// 3b. Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different
// rate per hour. Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week?
// You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
var googleDollarsPerHr = Number(prompt("Enter your contractor rate per hour (in dollars) for Google:"));
var amazonDollarsPerHr = Number(prompt("Enter your contractor rate per hour (in dollars) for Amazon:"));
var facebookDollarsPerHr = Number(prompt("Enter your contractor rate per hour (in dollars) for Facebook:"));
var googleHrsWorked = Number(prompt("Enter your hours worked this week for Google:"));
var amazonHrsWorked = Number(prompt("Enter your hours worked this week for Amazon:"));
var facebookHrsWorked = Number(prompt("Enter your hours worked this week for Facebook:"));
var googleWeeklyPayDollars = googleDollarsPerHr * googleHrsWorked;
var amazonWeeklyPayDollars = amazonDollarsPerHr * amazonHrsWorked;
var facebookWeeklyPayDollars = facebookDollarsPerHr * facebookHrsWorked;
var totalWeeklyPayDollars = googleWeeklyPayDollars + amazonWeeklyPayDollars + facebookWeeklyPayDollars;

alert("3b. Your total paycheck for this week is: $" + totalWeeklyPayDollars.toFixed(2));

// 3c. A student can be enrolled in a class only if the class is not full and the class schedule does not conflict
// with her current schedule.
var seatsAvailable = confirm("Confirm that the class is not full"); // boolean
var noScheduleConflict = confirm("Confirm that the class schedule does not conflict"); // boolean
var canEnroll = (seatsAvailable && noScheduleConflict);
alert("3c. This student can enroll: " + canEnroll);

// 3d. A product offer can be applied only if a person buys more than 2 items, and the offer has not expired.
// Premium members do not need to buy a specific amount of products.
var minItemsForDiscount = 2;
var isProductOfferCurrent = true;
var itemsPurchasedCount = Number(prompt("Enter the number of items you are purchasing:"));
var isPremiumMember = confirm("Confirm (click OK) if you are a Premium Member. Cancel if you are not."); // boolean
var isProductDiscountValid = isProductOfferCurrent && (itemsPurchasedCount > minItemsForDiscount || isPremiumMember);

alert("3d. Is the product offer valid for this purchase?: " + isProductDiscountValid);

