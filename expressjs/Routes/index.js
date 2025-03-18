const express = require('express');

const homepageroute = require('./home.js');
const loginpageroute = require('./login');

const app = express();


// handling requests
app.use('/',homepageroute);
app.use('/',loginpageroute);

app.listen(8080, (err) => {

    if(err) console.log(err.message);
    console.log('server started....')
})

