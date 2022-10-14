let express = require('express');
let app = express();

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
  res.send('{"message": "Hello json"}');
});

























 module.exports = app;
