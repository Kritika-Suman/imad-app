//We are importing certain software packages, these are very commonly used libraries.
var express = require('express');//Used to create the web server
var morgan = require('morgan');//Used to handle what request is comming and how to respond to it
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {//handling specific URLs
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});


var counter = 0;
app.get('/counter', function(req,res){
    
    counter = counter + 1;
    res.send(counter.toString());
    
});


app.get('/article-one', function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
 });

app.get('/article-two', function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
 });
 
 app.get('/article-three', function (req,res){
   res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
 });

app.get('/ui/style.css', function (req, res) {//handling specific URLs
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {//handling specific URLs
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {//handling specific URLs
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var names = [];
app.get('/submit-name/:name', function(req,res){
    //Get the name from the request
    var name = req.params.name;
    
    names.push(name);
    //JSON : Javascript Object Notation - used to stringyfy 
    res.send(JSON.stringify(names));
    
});

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
