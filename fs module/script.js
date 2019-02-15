// file system
const fs = require('fs');

// Asyncronous
fs.readFile('./hello.txt', (err, data)=> {

    console.time('funchallenge');

    if(err){

        console.error('error',  err);

    }else{
        
        console.log('Async', data.toString());

    }

    console.timeEnd('funchallenge');

});

//Sync
const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());

//Append to an existing file.
// if the file doesn't exits it create it.
// fs.appendFile('./hello.txt', ' This is so cool.', err => (err) && console.log(err) )


// Create a file
// fs.writeFile('bye.txt', 'Time to say goodbye.', err => err && console.log(err));

//Delete
//fs.unlink('./bye.txt', err => err && console.log(err));