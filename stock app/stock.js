const https = require('https');
const http = require('http');
const printMessaje = require('./printMessage');
const printError = require('./printError');

function get(stock){

    try{
        
        const request = https.get(`https://api.iextrading.com/1.0/stock/market/batch?symbols=${stock}&types=quote`, response => {

            if(response.statusCode === 200){
                
                let body = '';

                response.on('data', data => {

                    body += data;

                });

                response.on('end', () => {
                    
                    try{

                        const data = JSON.parse(body);

                        printMessaje.message(data, stock);

                    }catch(error){

                        printError.error('There was an error parsing the stock', stock);

                    }

                }); 

            }else{

                const message = `There was an error getting the stock in "${stock}". (${http.STATUS_CODES[response.statusCode]}) -- ${response.statusCode}`;

                printError.error(message, stock);
            }

        });

        request.on('error', error => printError.error(`Error in the url request. (${error}`, stock));

    }catch(error){

        printError.error('There was an error requesting the url for the weather', stock);

    }

}

module.exports.get = get;