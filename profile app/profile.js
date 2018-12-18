// require https module
const https = require('https');

// require http module
const http = require('http');

// require for errors
const printError = require('./printError');

// require print message. Data of the user
const printMessage = require('./printMessage');

// Module Get Profile
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
                        printMessage.message(username, profile.badges.length, profile.points.JavaScript);
                        
                    } catch (error){
                        
                        printError.error('There was an error parsing the profile', username);

                    }
                    
                });

            } else {

                const message = `There was an error getting the profile. (${http.STATUS_CODES[response.statusCode]}) -- ${response.statusCode}`;

                printError.error(message, username);
                
            }
     
        });

        // errors
        request.on('error',  error => printError.error(`Error in the url request. (${error})`, username) );

    } catch(error){

        printError.error('There was an error requesting the user url', username);

    }

}

module.exports.get = get;