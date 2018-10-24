var express = require('express');
let routes = require('./routes/routes.js');

//initialize the app
var app = express();

//setup server port
var port = process.env.PORT || 8080;

//use routes in the app
app.use('/api', routes);

//send message for default URL
app.get('/', (req, res) => {
    res.send("Hello world, welcome to stackbitz");
});

//launch app to listen to specified port
app.listen(port, function(){
    console.log("Running stackbitz on port: "+port);
});

