const express = require('express');
const router = express.Router();
const { data } = require('../data/flashcardData.json');
const { cards } = data;

router.get('/', (req, res) => {

    const numberOfCards = cards.length // getting number of obj available
    const cardsId = Math.floor( Math.random() * numberOfCards ); 
    const url = `/cards/${cardsId}`;

    res.redirect(url);

});

router.get('/:id', (req, res) => {

    const { side } = req.query;
    const { id } = req.params;

    //console.log((id*1) <= 5)
    // ( 
    //     (!isNaN(id*1) && side === undefined) || 
    //     (side !== 'question' && side !== 'answer') ||
    //     ( (id*1) > 5 || (id*1) < 0) 
    //     )

    if (!isNaN(id*1) && side === undefined) {
        
        const url = `/cards/${0}?side=question`;

        return res.redirect(url);

    }

    const text = cards[id][side];
    const { hint }  = cards[id];
    const name = req.cookies.username;
    
    const templateData = { id, side, text, name }; 
   
    if (side === 'question'){

        templateData.hint = hint;
        templateData.sideToShow = 'answer';

    } else if ( side === 'answer'){

        templateData.sideToShow = 'question';

    }else{

        console.error("after side validation error")

    }

    res.render('card', templateData);

});



module.exports = router;