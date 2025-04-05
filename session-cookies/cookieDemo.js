const express = require('express');
// we need cookie-parser middleware to implement cookies
const cookieParser = require('cookie-parser');


const app = express();
app.use(cookieParser());


// we set a cookie named 'username' with the value 'chetan_patil' and
// a max age of 900,000 milliseconds (15 minutes). 
// We also set the httpOnly option to true to make the cookie accessible only via 
// HTTP requests, preventing client-side scripts from accessing it.

app.get('/', (req,res) => {
    res.send(`Welcome to cookie tutorial`);
});

app.get('/setcookie', (req,res) => {
    res.cookie('username', 'sahil rawat', { maxAge: 900000, httpOnly: true});
    res.send('cookie set');
});

app.get('/getcookie', (req,res) => {
    const userName = req.cookies.username;
    res.send(`username: ${userName}`);
})


app.listen(3000, (err) => {
    if(err) throw err;
    console.log('server is running on port 3000');
})