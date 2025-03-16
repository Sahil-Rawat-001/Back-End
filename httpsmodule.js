// res.writeHead() method is the status code, 200 means that all is OK, 
// the second argument is an object containing the response headers


// http.createServer() has a req argument that represents the request from the client,
//  as an object (http.IncomingMessage object).
// This object has a property called "url" which holds the part of the url that comes after the domain name:

const http = require('http');
const fs   = require("fs");


const myServer = http.createServer( (req, res) => {

    const log = `${Date.now()}: ${req.url}  New Request Recieved \n`;

    fs.appendFile('log.txt', log, (err,data) => {
        
        if(err) throw err;
        
        switch(req.url){

            case '/': res.end("HomePage");
            break
            case '/about': res.end("I am Sahil Rawat Back End Developer");
            break
            default: res.end('Hello From Server');
        }
    });
    
});

myServer.listen(8080, (err) => {

    if(err) throw err;
    console.log('server started');
});