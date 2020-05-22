"use strict";

(function() {

    // 1. Create js/map-filter-reduce.js and copy users data into it.

    const users = [
        {
            id: 1,
            name: 'ryan',
            email: 'ryan@codeup.com',
            languages: ['clojure', 'javascript'],
            yearsOfExperience: 5
        },
        {
            id: 2,
            name: 'luis',
            email: 'luis@codeup.com',
            languages: ['java', 'scala', 'php'],
            yearsOfExperience: 6
        },
        {
            id: 3,
            name: 'zach',
            email: 'zach@codeup.com',
            languages: ['javascript', 'bash'],
            yearsOfExperience: 7
        },
        {
            id: 4,
            name: 'fernando',
            email: 'fernando@codeup.com',
            languages: ['java', 'php', 'sql'],
            yearsOfExperience: 8
        },
        {
            id: 5,
            name: 'justin',
            email: 'justin@codeup.com',
            languages: ['html', 'css', 'javascript', 'php'],
            yearsOfExperience: 9
        }
    ];

    // 2. Use .filter to create an array of user objects where each user object has at least 3 languages in the languages array.

    const arr3Languages = users.filter(u => u.languages.length >= 3);
    console.log(arr3Languages);


    // 3. Use .map to create an array of strings where each element is a user's email address

    const arrEmails = users.map(u => u.email);
    console.log(arrEmails);


    // 4. Use .reduce to get the total years of experience from the list of users. Once you get the total of years you can use the result
    // to calculate the average.
    const sumYrs = users.reduce((sum, usr) => sum += usr.yearsOfExperience, 0);
    const avgYrs = sumYrs / users.length;
    console.log(`Total years of experience is: ${sumYrs}.\nAverage years of experience is: ${avgYrs}.`);


    // 5. Use .reduce to get the longest email from the list of users.
    // var bestSalesPerson =  salesPeople.reduce((bestSalesPerson, person) => (bestSalesPerson.units > person.units) ? bestSalesPerson : person, {units: 0});
    const longestEmail = users.reduce((longestEmail, usr) => (longestEmail.email.length > usr.email.length) ? longestEmail : usr, {email: 0});
    console.log(longestEmail.email);


    // 6. Use .reduce to get the list of user's names in a single string. Example: Your instructors are: ryan, luis, zach, fernando, justin.
    const userName = users.reduce((userName, user) => userName + `${user.name} `, "");
    console.log(userName);

    // Bonus

    // 1. Use .reduce to get the unique list of languages from the list of users.
    const userLang = users.reduce((userLang, user) => userLang + `${user.languages} `, "");
    console.log(userLang);

    // const uniqLang = userLang.split().filter((element, index) => userLang.indexOf(element) === index);
    // console.log(uniqLang);



})();