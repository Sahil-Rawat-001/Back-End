const express = require('express')

// this will create a router object
const router  =  express.Router();


// handling requests using router
router.get( '/login', (req,res,next) => {

    res.send('This is hello from login');
});

module.exports = router;