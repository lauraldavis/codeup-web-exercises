"use strict";

/*********************************************
 *        USING FETCH WITH PROMISES
 ******************************************** */

var pokemonPromise = fetch('https://pokeapi.co/api/v2/pokemon');
// the return of a fetch request is a promise object

//TODO: console log the results of the above Promise. What is the result?
console.log(pokemonPromise);
// object with PromiseStatus = Resolved
// to get the results, you need .then

//TODO: add a method that runs if the Promise resolves successfully
// pokemonPromise.then(response => console.log("API Request Was Successful!"))
//     .catch() => console.log("API Request Failed!"));

// more commonly you would parse the response as json

function listNames(arr){
    arr.forEach(element => (element.name));
}
pokemonPromise.then(response => response.json())
    .then(jsonResponse => jsonResponse.results)
    .then(listNames)
    .catch(error => console.log(error));

//TODO: add a method that runs if the Promise fails

//TODO: In the callback function of the .then method, parse the response into JSON

/*********************************************
 *              CHAINING PROMISES
 ******************************************** */

// TODO: Using Promise chaining, add another .then method that returns the results property of
//  the first returned response.
//    Taking a look at this second return, what are the results? What is the shape of our data?
pokemonPromise.then(response => response.json())
    .then(jsonResponse => jsonResponse.results)
    .catch(error => console.log(error));

// TODO: Finally, chain another .then method that would log all of the name properties of the
//  returned pokemon.
pokemonPromise.then(response => response.json())
    .then(jsonResponse => (jsonResponse.results))
    .then(pokemonArray => pokemonArray.forEach(pokemon => console.log(pokemon.name)))
    .catch(error => console.log(error));

// BONUS: Is there a way for us to clean up our code?

// make it more modular with functions
function jsonResponse(response){
    return response.json();
}
function listNames(arr){
    arr.forEach(element => console.log(element.name));
}
fetch('https://pokeapi.co/api/v2/pokemon').then(jsonResponse)
    .then(jsonResponse => jsonResponse.results)
    .then(listNames)
    .catch(error => console.log(error));

// Let's try working with the Star Wars API!

// TODO: Using Promises, make a fetch request to the Star Wars API

var starWarsAPIFilms = fetch("https://swapi.dev/api/films/");
console.log(starWarsAPIFilms);

// TODO: Use Promise chaining to console log the json response

starWarsAPIFilms.then(response => response.json())
    .then(jsonResponse => jsonResponse.results)
    .then(resultsArray => resultsArray.forEach(film => {
        console.log(`${film.title} ${film.episode_id}`)
    }))
    .catch(error => console.log(error));

// Checking for results (count)
// starWarsAPIFilms.then(response => response.json())
//     .then(jsonResponse => console.log(jsonResponse.count));

// TODO: chain another method that iterates through the results array and console logs the names
//  of all characters and their birth_years

var starWarsAPIPeople = fetch("https://swapi.dev/api/people/");
console.log(starWarsAPIPeople);

starWarsAPIPeople.then(response => response.json())
    .then(jsonResponse => jsonResponse.results)
    .then(resultsArray => resultsArray.forEach(person => {
        console.log(`${person.name} ${person.birth_year}`)
    }))
    .catch(error => console.log(error));

/*********************************************
 *              CUSTOM PROMISES
 ******************************************** */

// To further understand Promises, we can create our own custom Promise object
// Let's take a look at the example from the curriculum

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve('This is where the API data would be');
        } else {
            reject('Your API request failed');
        }
    }, 1500);
});

// fetch('fromSomeURL') -> returns a Promise object, or times out if not returned within 1.5 sec
// resolve -> .then
// reject -> .catch

myPromise.then(response => console.log(response))
    .catch(error => console.log(error));

// The resolve and reject functions can also be passed a value.
// These can then be used in our .resolve and .reject methods

// TODO: pass in a message argument into the resolve and reject functions
// TODO: use the passed in arguments in the callback functions

// This is a simplified example of what goes on underneath the hood of a more complex fetch
// request. The concepts we covered are similar to what you learned when using AJAX with jQuery.


// all and race
Promise.all([pokemonPromise, starWarsAPIFilms])
    .then(data => console.log(data));
// returns an array of object responses from each one
// use data[0] and data[1] to use a forEach loop to get each one

Promise.race([pokemonPromise, starWarsAPIFilms])
    .then(data => console.log(data));
// returns a response from the first API to respond
// could use to provide a backup method (although it would be a lot of extra work to develop for both APIs