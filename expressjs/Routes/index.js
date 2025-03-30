const express = require("express");
const loginRoute = require("./login.js");
const homeRoute = require("./home.js");
const app = express();
const fs = require("fs");

// middleware function
const logRequests = (req, res, next) => {
    
  const logEntry = `Request made to ${req.url} on ${ new Date().toISOString().replace("T", " ").split(".")[0]} \n`;

  // usign fs.appendFile() method
  fs.appendFile("./expressjs/Routes/log.txt", logEntry, (err) => {
    if (err){
     console.log(`Error: ${err.message}`);
     return next();
    } 
  });

  console.log(`log saved successfully!`);
  next();
};

// Middle ware
app.use(logRequests);
app.use("/", loginRoute);
app.use("/home", homeRoute);



app.get("/", (req, res) => {
    return res.status(200).send("Hey, You are in Home Page");
});


app.listen(8080, (err) => {
  if (err) console.log(`Error: ${err}`);
  console.log("Server started at port 8080");
});
