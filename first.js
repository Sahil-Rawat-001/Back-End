// console.log("Hello sahil rawat");

var http = require('http');


// res.writeHead() method is the status code, 200 means that all is OK, 
// the second argument is an object containing the response headers


// http.createServer() has a req argument that represents the request from the client,
//  as an object (http.IncomingMessage object).
// This object has a property called "url" which holds the part of the url that comes after the domain name:



http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(req.url);
  res.end('Hello');
}).listen(8080);