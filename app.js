// Burger Menu

var burgerMenu = document.querySelector('#burger-menu');
var line1 = document.querySelector('#burger-menu .line:nth-of-type(1)');
var line2 = document.querySelector('#burger-menu .line:nth-of-type(2)');
var line3 = document.querySelector('#burger-menu .line:nth-of-type(3)');

var mobileNavbar = document.getElementById("mobile-navbar");

burgerMenu.addEventListener('click', () => {

    line1.classList.toggle('inactive');
    line1.classList.toggle('active');

    line2.classList.toggle('inactive');
    line2.classList.toggle('active');

    line3.classList.toggle('inactive');
    line3.classList.toggle('active');

    mobileNavbar.classList.toggle('active');
    mobileNavbar.classList.toggle('inactive');
})


// Sticky Navbar

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// get the navbar links

var navbarLinks = [...document.querySelectorAll('nav ul li a')];

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= 80) {
    navbar.classList.add("sticky");
    navbar.classList.remove("position-absolute");

    mobileNavbar.classList.add("sticky");
    mobileNavbar.classList.remove("position-absolute");

    // for (let i=0; i<navbarLinks.length; i++) {
    //     navbarLinks[i].classList.add("sticky");
    // };

  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("position-absolute");

    mobileNavbar.classList.remove("sticky");
    mobileNavbar.classList.add("position-absolute");

    // for (let i=0; i<navbarLinks.length; i++) {
    //     navbarLinks[i].classList.remove("sticky");
    // };
  }
}