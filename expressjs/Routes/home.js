const express = require('express')

// this will create a router object
const router  =  express.Router();


// handling requests using router
router.get( '/home', (req,res,next) => {

    res.status(200).send('This is hello from homepage');
});

module.exports=router;