// problem: we need a simple way to look at a user's badge count and Javascript points.
// solution: Use Node.js to connect to treehouse's API to get profile information to print out

// require https module
const https = require('https');

// to print msg to console

function printMessage(username, badgeCount, points){

    const messages = `${username} has ${badgeCount} total badge(s) and ${points} in Javascript`;

    console.log(messages);

}

function getProfile(username){

    const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

        let body = "";
        // Read the data 

        response.on('data', data => {

            body += data.toString();

        });

        // end handle of the response
        response.on('end', () => {

            // Parse the data
            const profile = JSON.parse(body);
        
            // print the data 
            printMessage(username, profile.badges.length, profile.points.JavaScript);
            
        });

    });

}

// calling the user to get the data, receive the username in the terminal 

const users = process.argv.slice(2);

users.forEach( getProfile );