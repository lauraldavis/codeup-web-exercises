"use strict";
(function () {

    // 1. Create js/promises.js and link it in an html file
    // 2. Generate a GitHub API personal access token (add to keys.js)
    // 3. Create a function that accepts anyone's GitHub username and returns a promise that resolves returning just the date of the last commit that user made.


    // fetch('https://api.github.com/users');
    // 'GET /users/:username/events'
    // looking for most recent push "event", look at the type property, use filter(), new Date(), .toDateString()
    // there is a type property (push event) for each event, in order by most recent event, filter out specific events by the date (timestamp)

    function gitHubLastPush(username = 'lauraldavis') {

        let gitHubAPIUsers = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_KEY}`}});
        // console.log(gitHubAPIUsers);

        gitHubAPIUsers
            .then(response => response.json())
            // all events
            // .then(events => console.log(new Date(events[0].created_at).toDateString()))
            // just the push events
            .then(events => console.log(new Date(events.filter(user => user.type === "PushEvent")[0].created_at).toDateString()))

            // This doesn't work... need to figure out how to return the date value rather than log it
            // .then(events => new Date(events.filter(user => user.type === "PushEvent")[0].created_at).toDateString())
            .catch(error => console.log(error));
    }
    gitHubLastPush();


    // test other users
    // gitHubLastPush('jreich5');
    // gitHubLastPush('Shelbypol')

    // Create Your Own Promise
    // 1. Write a function named wait that accepts a number as a param and returns a promise that resolves after the passed #milliseconds
    // Bonus
    // 1. Make sure the promise resolves with the milliseconds in the return, so you can make the console log message more dynamic

    function wait(num) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (num <= 3000) {
                    resolve('Here is your data: ...');
                    return console.log(`You'll see this after ${num / 1000} second(s)`);
                } else {
                    reject('Network Connection Error!');
                    return console.log(`No response returned within ${num / 1000} second(s)`);
                }
            }, num);
        });
    }

    wait(1000);
    wait(3000);
    wait(5000);


})();