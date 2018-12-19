
const https = require('https'); // require https 
const http = require('http'); // require https 
const querystring = require('querystring'); // require querystring
const api = require('./api.json'); //requiere the api key
const printError = require('./printError'); // require to print out error message
const printWeather = require('./printMessage'); // requeire to print out temp details

// getting the weather (API call)
function get(query){

    // from openweathermap API
    const parameters = {
        APPID: api.key,
        units: 'imperial'
    }

    // zip code 
    const zipCode = parseInt(query);

    if (!isNaN(zipCode)) {

      parameters.zip = zipCode + ',us';

    } else {

      parameters.q = query + ',us';

    }

    const url = `https://api.openweathermap.org/data/2.5/weather?${querystring.stringify(parameters)}`

    try{

        const request = https.get(url, response => {

            if(response.statusCode === 200){

                let body = "";

                response.on('data', data => {

                    body += data;

                });

                response.on('end', () => {

                    try{

                        const weather = JSON.parse(bodyd);

                        // print data
                        printWeather.message(weather);
                    
                    } catch(error){

                        printError.error('There was an error parsing the weather');

                    }
                  

                });

            }else{

                const message = `There was an error getting the weather in "${query}". (${http.STATUS_CODES[response.statusCode]}) -- ${response.statusCode}`;

                printError.error(message);

            }

        });

       request.on('error', error => printError.error(`Error in the url request. (${error}`));
        
    }catch(error){

        printError.error('There was an error requesting the url for the weather');
        
    }

}

module.exports.get = get;