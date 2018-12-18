// to print msg to console

function printMessage(username, badgeCount, points){

    const messages = `${username} has ${badgeCount} total badge(s) and ${points} in Javascript`;

    console.log(messages);

}

module.exports.message = printMessage;