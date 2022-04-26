"use strict";

// hamburger menu
const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-links');

toggleButton.addEventListener('click', function() {
    for (var i = 0; i < navbarLinks.length; i++) {
        navbarLinks[i].classList.toggle('active');
    }
});


// header carousel
var slideIndex = 1;
showSlides(slideIndex);

function nextSlide(n) {
  	showSlides(slideIndex += n);
}

function currentSlide(n) {
  	showSlides(slideIndex = n);
}

function showSlides(n) {
  	var i;
  	var slides = document.getElementsByClassName("slide");
  	var dots = document.getElementsByClassName("dot");

  	if (n > slides.length) {
      	slideIndex = 1
    }
	 
  	if (n < 1) {
      	slideIndex = slides.length
    }

  	for (i = 0; i < slides.length; i++) {
      	slides[i].style.display = "none";  
  	}

  	for (i = 0; i < dots.length; i++) {
      	dots[i].className = dots[i].className.replace(" active", "");
  	}
	  
  	slides[slideIndex-1].style.display = "flex";  
  	dots[slideIndex-1].className += " active";
}