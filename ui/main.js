console.log('Loaded!');

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
   marginLeft = marginLeft + 10;
   img.style.marginLeft = marginLeft + 'px';
}
img.onclick = function(){
    var interval = setInterval(moveRight,100);
};