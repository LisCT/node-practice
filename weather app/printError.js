// print error messages

function printError(error){
    
    const message = `${error}`;

    const codeError = new Error(message);

    console.error(codeError.message);

}

module.exports.error = printError;