const express = require('express');
const router = express.Router();

// Do work here
router.get('/', (req, res) => {

  const obj =  { anme: 'Lis', age: 100}

  //res.send('Hey! It works!');
  res.json(obj);
  
});

module.exports = router;
