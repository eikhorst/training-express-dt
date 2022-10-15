let express = require('express');
let app = express();
//require('dotenv').config();
var messageStyle = process.env.MESSAGE_STYLE
var response = "Hello json"

console.log('Hello World');

//  app.get("/", (req, res) => {
//    res.send("Hello Express");
//  } );
//  
//  

app.get("/", (req, res) => {
  res.sendFile(myHomePath);
});

myHomePath = __dirname + '/views/index.html'


app.use("/public", express.static( __dirname + '/public'));

app.get("/json", (req, res) => { 
  if (process.env.MESSAGE_STYLE === 'uppercase') { 
    response = response.toUpperCase();
  }
  res.json({"message": response});
});


























 module.exports = app;
