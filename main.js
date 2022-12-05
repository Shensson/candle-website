/* sticky header */
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky =navbar.offsetTop;

function myFunction(){
  if (window.pageYOffset >= sticky){
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}
/* search box buttons */
let searchBtn = document.querySelector('.searchBtn');
let closeBtn = document.querySelector('.closeBtn');
let searchBox = document.querySelector('.searchBox');

searchBtn.onclick = function(){
  searchBox.classList.add('active');
  closeBtn.classList.add('active');
  searchBtn.classList.add('active');
}
closeBtn.onclick = function(){
  searchBox.classList.remove('active');
  closeBtn.classList.remove('active');
  searchBtn.classList.remove('active');
}

