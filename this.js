
//slider
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}


//hamburger
var t =document.getElementById('container');
var x = document.getElementsByClassName('dot'); 
var z = document.getElementsByClassName('menue22'); 

console.log(t);

t.addEventListener("click",function(){
    x[0].classList.toggle('fox0');
    x[1].classList.toggle('fox1');
    x[2].classList.toggle('fox2');
    z[0].classList.toggle('vis');
});