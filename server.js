//We are importing certain software packages, these are very commonly used libraries.
var express = require('express');//Used to create the web server
var morgan = require('morgan');//Used to handle what request is comming and how to respond to it
var path = require('path');

var Pool = require('pg').Pool;

var crypto = require('crypto');

var config = {
    
    user : 'kritikasuman2016',
    database : 'kritikasuman2016',
    host : 'db.imad.hasura-app.io',
    port : '5432',
    password : 'db-kritikasuman2016-99836'//process.env.DB_PASSWERD
    
};

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {//handling specific URLs
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

function hash (input,salt){
    //How do we create a hash ?
    var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'sha512');
    return hashed.toString('hex');
}

app.get('/hash/:input',function(req,res){
    
    var hashedString = hash(req.params.input,'this-is-some-random-straing');
    res.send(hashedString);
    
});

var pool = new Pool(config);
app.get('/test-db', function(req,res){
    
    //make a select request
    
    //return the respaonse with the results
    pool.query('SELECT * FROM test', function(err,result){
        if(err){
           res.status(500).send(err.toString()); 
        }else{
            res.send(JSON.stringify(result.rows));
        }
        
    });
    
});

var counter = 0;
app.get('/counter', function(req,res){
    
    counter = counter + 1;
    res.send(counter.toString());
    
});

var names = [];
app.get('/submit-name', function(req,res){//URL: /submit-name?name=xxxx
    //Get the name from the request
    var name = req.query.name;
    
    names.push(name);
    //JSON : Javascript Object Notation - used to stringyfy 
    res.send(JSON.stringify(names));
    
});


app.get('/article-one/:articleName', function (req,res){
   //res.sendFile(path.join(__dirname, 'ui', 'article-one.html'));
  
   pool.query("SELECT * FROM article WHERE title = ' " + req.params.articleName + " ' " ,function(err,result){
       if(err){
           res.status(500).send(err.toString());
       }else{
           if(result.rows.length===0){
               res.status.(404).send('Article not found');
           }else{
               var articleData = result.rows[0];
               res.sendFile(path.join(__dirname, 'ui', 'article-one/articleData'));
              // res.send(JSON.stringify(articleData));
           }
       }
   });
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



var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
