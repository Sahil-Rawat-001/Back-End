const express = require('express');

const router  = express.Router();


router.get('/', (req,res) => {

    try{

        res.status(200).send('hello from home page');
    } catch (error){

        console.log(`Error: ${error}`);
        res.status(400).json({err: 'Not found'});
    }
});


module.exports = router;


