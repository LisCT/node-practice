// print error messages
function printError(error, user){
    
    const message = `${error}. For the user ${user}.`;

    const codeError = new Error(message);

    console.error(codeError.message);

}

module.exports.error = printError;