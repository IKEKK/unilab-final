
var mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

var navbar = document.querySelector('.scroll')

window.onscroll = function() {

// pageYOffset or scrollY
if (window.pageYOffset > 0) {
navbar.classList.add('scrolled')
} else {
navbar.classList.remove('scrolled')
}
}

