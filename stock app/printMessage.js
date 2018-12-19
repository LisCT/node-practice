
function printMessage(data, stock){

    const message = `${stock} latest price is ${data[`${stock}`].quote.latestPrice} from ${data[`${stock}`].quote.latestSource}.`;
   
    // print the data
    console.log(message);

}

module.exports.message = printMessage;