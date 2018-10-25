var express = require('express');
let routes = require('./routes/routes.js');
let bodyParser = require('body-parser');
let mongoose = require('mongoose');

//initialize the app
var app = express();

//setup server port
var port = process.env.PORT || 8080;

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    console.log(res);
    res.status(200);
    next();
});
//configure bodyparser to handle post request
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

//connect to mongoose and set connection variable
mongoose.connect('mongodb://localhost:27017/stackbitz');

var db = mongoose.connection;


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

