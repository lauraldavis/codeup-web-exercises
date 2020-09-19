"use strict";

// 1. Create js/commits.js and link it to commits.html file
// 2. Use the GitHub API personal access token in keys.js
// 3. Create a function that accepts anyone's GitHub username and returns a promise that resolves returning repo & commits

// fetch('https://api.github.com/users');
// 'GET /users/:username/events'
// looking for most recent push "event", look at the type property, use filter(), new Date(), .toDateString()
// there is a type property (push event) for each event, in order by most recent event, filter out specific events by the date (timestamp)


// add event listener to button1
document.getElementById("button1").addEventListener("click", getCommits);

// get GitHub API user event data
function getCommits(username = 'lauraldavis') {

    const gitHubAPIUsers = fetch(`https://api.github.com/users/${username}/events`, {headers: {'Authorization': `token ${GITHUB_KEY}`}});

    return gitHubAPIUsers
        .then(response => response.json())
        // gets all events:
        // .then(events => console.log(events))
        // .then(events => console.log(new Date(events[0].created_at).toDateString()))

        // gets just the push events (console logs the date)
        // .then(events => console.log(events.filter(user => user.type === "PushEvent")))
        // .then(events => console.log(new Date(events.filter(user => user.type === "PushEvent")[0].created_at).toDateString()))

        // return the date string rather than log it
        // this is the promises exercise solution
        // .then(events => new Date(events.filter(user => user.type === "PushEvent")[0].created_at).toDateString())

        // experiment with getting a list of commits by repo with date
        // .then(events => {
        //         events.forEach( event => {
        //             if(event.type === "PushEvent") {
        //                 console.log(event.created_at, event.type)
        //             } else {
        //                 // do nothing
        //             }
        //         })
        // })

        .then(events => {
            console.log(events.filter(user => user.type === "PushEvent"));

            // display data
            let output = `<p>Data refreshed: ${new Date()}</p>`
            output += '<h3>Commit Count - Distinct (Total) / Push Datetime / Repo Name</h3><ul>';
            events.forEach(function(event) {
                if (event.type === "PushEvent") {
                    output += `<li>${event.payload.distinct_size} 
                             (${event.payload.size}) 
                             ${new Date(event.created_at).toLocaleString('en-us',{weekday:'short', month:'short', day:'numeric', year:'numeric', hour: '2-digit', minute: '2-digit'}).toUpperCase()} 
                             ${event.repo.name}</li>`;
                }
            });
            output += '</ul>';
                // event.actor.login is same as ${username}
                // event.payload.commits
                //      .sha,
                //      .author
                //      .message
            document.getElementById('output').innerHTML = output;
            })
            .catch(error => console.log(error));
            // display error
            document.getElementById('output').innerHTML = err;

    // getCommits().then(console.log);
}

// test w/ other users
// getLastPush('jreich5').then(console.log);
