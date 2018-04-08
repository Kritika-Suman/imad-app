//We are importing certain software packages, these are very commonly used libraries.
var express = require('express');//Used to create the web server
var morgan = require('morgan');//Used to handle what request is comming and how to respond to it
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    
 'article-one': {
    
    tittle: 'Article One | Kritika Suman',
    heading: 'Article One',
    content: 
    
                <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                </p>
            
                <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my first article.
                </p>
            
                <p>
                    This is the content for my first article. This is the content for my first article. This is the content for my first article.This is the content for my first article.This is the content for my first article.This is the content for my   first article.
                </p>
            
},
 'article-two': {
    
    tittle: 'Article Two | Kritika Suman',
    heading: 'Article Two',
    content: 
    
                <p>
                    This is the content for my second article. 
                </p>
            
},
 'article-three': {
    
    tittle: 'Article O ThreeKritika Suman',
    heading: 'Article Three',
    content: 
    
                <p>
                    This is the content for my three article.
                </p>
            
}

};

function createTemplate(data){
    
    var tittle = data.tittle;
    var heading = data.heading;
    var content = data.content;
    
    var htmlTemplate = '
    
<!DOCTYPE html>
<html>
    
    <head>
        
        <tittle>${tittle}</tittle>
        <meta name="viewport" content="width-device-width, initial-scale-1" />
        
        <link href="/ui/style.css" rel="stylesheet" />
        
    </head>
    
    <body
        
        <div class="container">
        
            <div>
                <a href="\">Home</a>     
            </div>
        
            <hr>
        
            <h3>
                ${heading}
            </h3>
        
            <div>
                Apr 8, 2018
            </div>
        
            <div>
            
                ${content}
                
            </div>
        
        </div>
        
    </body>

</html>

';

return htmlTemplate;
    
}

app.get('/', function (req, res) {//handling specific URLs
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:aticleName', function (req,res){
//articleName == article-one
//articles[articleName] == {} content object for article one

var articleName = req.params.articleName;//feature of express framework
res.send(createTemplate(atricles[articleName]));
}
);

app.get('/ui/style.css', function (req, res) {//handling specific URLs
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
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
