const https = require('https');
const http = require('http');
const printMessaje = require('./printMessage');

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

                        console.log('There was an error parsing the weather');

                    }

                }); 

            }else{

                const message = `There was an error getting the weather in "${query}". (${http.STATUS_CODES[response.statusCode]}) -- ${response.statusCode}`;

                console.log(message);
            }

        });

        request.on('error', error => console.log(error.message));

    }catch(error){

        console.log('There was an error requesting the url for the weather');

    }

}


const query = process.argv.slice(2).join(' ').toUpperCase();

get(query);