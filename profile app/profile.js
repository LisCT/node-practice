// require https module
const https = require('https');

// require http module
const http = require('http');

// print error messages
function printError(error){

    console.error(error.message);

}

// to print msg to console

function printMessage(username, badgeCount, points){

    const messages = `${username} has ${badgeCount} total badge(s) and ${points} in Javascript`;

    console.log(messages);

}

function get(username){

    try{

        const request = https.get(`https://teamtreehouse.com/${username}.json`, response => {

            if(response.statusCode === 200){

                let body = "";
                // Read the data 

                response.on('data', data => {

                    body += data.toString();

                });

                // end handle of the response
                response.on('end', () => {

                    try{

                        // Parse the data
                        const profile = JSON.parse(body);
                    
                        // print the data 
                        printMessage(username, profile.badges.length, profile.points.JavaScript);
                        
                    } catch (error){

                        printError(error)

                    }
                    
                });

            } else {

                const message = `There was an error getting the profile for ${username} (${http.STATUS_CODES[response.statusCode]}) -- ${response.statusCode}`;

                const statusCodeError = new Error(message);

                printError(statusCodeError);
                
            }
     
        });

        // errors
        request.on('error',  error => printError(error) );

    } catch(error){

        printError(error)

    }

}

module.exports.get = get;