// notes:
    // make your calles using names, zip code, or numbers
        // query: 90201
        // query: Los Angeles
        // query: 77450 
        // node app.js 88450 

// require weather to call all the info
const weather = require(`./weather`);

const query = process.argv.slice(2).join(' ');

weather.get(query)