var PORT = 8000;
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var session = require('express-session');
var ejs = require('ejs');
var app = express();



app.use(bodyParser.urlencoded({extended: true}));
app.use(session({secret: 'mi_p@55w0rd_3S_muy_r@nd0m050!!y_muy_1337_t@mbi3n'}));

app.use(express.static('static'));

app.set('views', __dirname + '/views');
app.set('viewengine', 'ejs');


app.get('/', function (req, res){
    res.render('index.ejs');
});


app.post('/', function (req, res){
    res.redirect('/');
});
  
app.listen(PORT, function(){
    console.log('listening on port '+PORT);
})
