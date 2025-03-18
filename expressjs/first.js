const express = require('express');

const app = express();



app.get('/', (req,res) => {

    console.log(req.url);

    res.status(200);
    res.send('Hello from home page');
})


app.get('/about', (req,res) => {

    console.log(req.url);

    res.status(200);
    res.send('Hello from about page');
})

app.get('/contact', (req,res) => {

    console.log(req.url);
    console.log(req.query);

    res.set({'content-type': 'text/html'});
    res.status(200).send(`<h1> Hello, ${req.query.name} from contact page </h1>`);
})





app.listen(8080, (err) => {

    if (err) throw err;
    console.log('Server started !');
})