const express = require('express');
const loginRoute = require('./login.js');
const homeRoute = require('./home.js');
const app = express();

app.use('/', loginRoute);
app.use('/home', homeRoute);

app.get('/', (req,res) => {
    try{
        return res.status(200).send('Hey, You are in Home Page');
    } catch (error){
        console.log(`Error: ${error}`);
        res.status(400).json({err: 'Not found'});
    }
})


app.listen(8080, (err) => {

    if(err) console.log(`Error: ${err}`);
    console.log('Server started at port 8080');
});