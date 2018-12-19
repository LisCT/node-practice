
function printMessage(data, stock){

    const message = `${stock} latest price is ${data[`${stock}`].quote.latestPrice}`;
   
    // print the data
    console.log(message);

}

module.exports.message = printMessage;