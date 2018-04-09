/*console.log('Loaded!');

//change the text of the main text div
var element = document.getElementById('main-text');
element.innerHTML = 'New Value';

//Move the image
var img = document.getElementById('madi');
//img.onclick = function () {
 // img.style.marginLeft = "100px";  
//};

var marginLeft = 0;
function moveRight() {
   marginLeft = marginLeft + 1;
   img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,10);
};*/



//counter code
var button = document.getElementById('button');
//var counter = 0;

button.onclick = function(){
    
    //Create a request object
    var request = new XMLHttpRequest();
    
    //Capture the response and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState === XMLHttpRequest.DONE){
            //Take some action
            if(request.status === 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
        //Not done yet
    };
    
    
    //Render the variable in the correct span
    
    //counter = counter + 1;
    //var span = document.getElementById('count');
    //span.innerHTML = counter.toString();
    
    //Make the request
    request.open('GET','http://kritikasuman2016.imad.hasura-app.io/counter',true);
    request.send(null);
    
};

//Submit name
var nameInput = document.getElementById('name');
var name =  nameInput.value;
var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    //Make arequest to the server and send the name
    
    //Compare a list of names and render it as a list
    var names = ['name1','name2','name3','name4'];
    var list ='';
    for(var i=0, i<names.length; i++){
        list += '<li>'+names[i]+'</li>';
    }
    vr ul = document.getElementById('nameList');
    ul.innerHTML = list;
    
};    




