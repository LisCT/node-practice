const fs = require('fs');


// Start the Q1 Q2 Answer
init ();

// 1- What Floor does santo end up on
// ( --> up 1 floor
// ) --> down 1 floor

function question1(){
    
    fs.readFile('./puzzle.txt', (err, data) => {

        if(err){

            console.log('error');

        }else{

            //console.time('santa-time');

            const directions = data.toString();
            const direcctionArrays = directions.split('');

            const answer = direcctionArrays.reduce((acc, current) => {

                if(current === '(') {

                    return acc +=1

                }else if( current === ')') {

                    return acc -= 1
                    
                }

            }, 0);

            //console.timeEnd('santa-time');

            console.log('Santa ends in floor: ', answer);

        }

    });
}

// 2- when does santa first enter the basement;
function question2(){
    
    fs.readFile('./puzzle.txt', (err, data) => {

        if(err){

            console.log('error');

        }else{

            //console.time('santa-time');

            const directions = data.toString();
            const direcctionArrays = directions.split('');
            let accumutator = 0;
            let counter = 0;

            const answer = direcctionArrays.some((current) => {
                
                if(current === '(') {

                    accumutator +=1

                }else if( current === ')') {

                     accumutator -= 1
                    
                }

             
                counter ++;

                return accumutator < 0;

            })

            //console.timeEnd('santa-time');

            console.log('He went to the basement: ', counter);

        }

    });
}


function init () {

    question1();
    question2();

}