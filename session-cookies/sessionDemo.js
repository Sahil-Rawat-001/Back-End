require('dotenv').config();
const express = require('express');
const app = express();



// we need express-session middleware to implement session 
const session = require('express-session');

// using session middleware
app.use(session({
    secret: process.env.SESSION_SECRET_KEY, // Secret key used to sign the session ID cookie
    resave:false, // Whether to save the session data if no changes are made
    saveUninitialized:false, // Whether to save uninitialized sessions
}));


app.get('/', (req,res) => {
    res.send('Welcome to session demo');
})

app.get('/setsession', (req,res) => {
    req.session.username = 'sahil rawat';
    res.send(`session data set`);
});

app.get('/getsession', (req,res) => {
    const sessiondata = req.session.username;
    res.send(`session data is ${sessiondata}`);
});

app.listen(3000, (err) => {
    if (err) {
        console.error(err);
    } else {
      console.log('Server is running on port 3000');
    }
})
