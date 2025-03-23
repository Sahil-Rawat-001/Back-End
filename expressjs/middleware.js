// Middleware in express are functions which had access to the request,response objects and next() function
// They can modify request and response objects, end the request-response cycle, call the next middleware function.



/*
    1. Middleware functions are executed in the order they are defined.
    2. They can perform tasks like authentication, logging, or error handling.
    3. Middleware helps separate concerns and manage complex routes efficiently.
*/

// Here we also do middleware chaining

const express = require('express');

const app = express();


// middleware 1 : log request method and url
app.use( (req,res,next) => {

    console.log(`${req.method} request to ${req.url}`);
    next(); // this pass the control to the next middle ware
});


//  middleware 2 : add a custom header
app.use( (req,res,next) => {

    res.setHeader('X-Custom-Header', 'Middleware Chaining Example');
    next(); // if we do not pass this next() function then the rest of the code does not execute
});


// Route handler

app.get('/', (req,res) => {

    res.send('Node js');
});

app.listen(8000, (err) => {

    if(err) console.log(`Error: ${err.message}`);
    console.log('server started');
});


