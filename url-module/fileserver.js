const http = require('http');
const url  = require('url');
const fs   = require('fs');




// creating server
http.createServer( (req,res) =>{

    // parsing url
    const q = url.parse(req.url, true);

    const fileName = "./url-module/"+q.pathname;

    fs.readFile(fileName, (err,data) =>  {

        if(err){

            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404 not found');
        } else{

            res.writeHead(200, {'content-type': 'text/html'});
            res.write(data);
            res.end();
        }
    });



}).listen(8080, () => {

    console.log('Server started');
});