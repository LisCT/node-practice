
// notes:
    // make your calles using a name of an stock, allow one name per call -> node app.js appl
        // query: appl
        // query: amzn 

// require weather to call all the info

const stock = require('./stock');

const query = process.argv.slice(2).join(' ').toUpperCase();

stock.get(query);