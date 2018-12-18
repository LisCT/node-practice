// HTTP REQUEST

// problem: we need a simple way to look at a user's badge count and Javascript points.
// solution: Use Node.js to connect to treehouse's API to get profile information to print out

// improvements
    // You could make the first argument passed up to app.js a given topic area.
    // You could then see how many points a student has in that topic area.

const profile = require('./profile');

// calling the user to get the data, receive the username in the terminal example: node ./app.js chalkers

const users = process.argv.slice(2);

users.forEach( profile.get );