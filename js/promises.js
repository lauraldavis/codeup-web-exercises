"use strict";

    // 1. Create js/promises.js and link it in an html file
    // 2. Generate a GitHub API personal access token (add to keys.js)
    // 3. Create a function that accepts anyone's GitHub username and returns a promise that resolves returning just the date of the last commit that user made.


    // fetch('https://api.github.com/users');
    // 'GET /users/:username/events'
    // looking for most recent push "event", look at the type property, use filter(), new Date(), .toDateString()
    // there is a type property (push event) for each event, in order by most recent event, filter out specific events by the date (timestamp)

    const getLastPush = (username = 'lauraldavis') => {

        const gitHubAPIUsers = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_KEY}`}});

        return gitHubAPIUsers
            .then(response => response.json())
            // gets all events:
            // .then(events => console.log(new Date(events[0].created_at).toDateString()))

            // gets just the push events (console logs the date)
            // .then(events => console.log(new Date(events.filter(user => user.type === "PushEvent")[0].created_at).toDateString()))

            // return the date string rather than log it
            .then(events => new Date(events.filter(user => user.type === "PushEvent")[0].created_at).toDateString())

            .catch(error => console.log(error));
    };
    getLastPush().then(console.log);


    // test w/ other users
    // getLastPush('jreich5').then(console.log);


    // Create Your Own Promise
    // 1. Write a function named wait that accepts a number as a param and returns a promise that resolves after the passed #milliseconds
    // Bonus
    // 1. Make sure the promise resolves with the milliseconds in the return, so you can make the console log message more dynamic

    const wait = num => {
        return new Promise((resolve) => {
            setTimeout(() => {
                if (typeof num === "number") {
                    let secondPlural = (num <= 1000) ? "second" : "seconds";
                    return console.log(`You'll see this after ${num / 1000} ${secondPlural}`);
                } else {
                    return console.log(`${num} is not valid, please enter a number`)
                }
            }, num);
        });
    };

    wait(1000);
    wait(3000);
    wait(5500);
    wait("test-non-numeric");


