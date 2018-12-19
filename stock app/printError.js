
function printError(error, stock){

    const message = `${error}, for the stock ${stock}`;

    const codeError = new Error(message);

    console.log(codeError.message)

}

module.exports.error = printError;