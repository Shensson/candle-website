// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.getElementById("myHeader");
var header_logo = document.getElementById("header-logo")

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
    header_logo.classList.add("header-logo");
    document.getElementById('header-logo').style.animationName = 'logo-fade-out'
  } else {
    header.classList.remove("sticky");
    header_logo.classList.remove("header-logo");
    document.getElementById('header-logo').style.animationName = 'logo-fade-in'
    
  }
}