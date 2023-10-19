let slideIndex = 0;
showSlides();

function showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlides, 6000); 
}

function plusSlides(n) {
    showSlidesManual(slideIndex += n);
}

function showSlidesManual(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}





window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.querySelector(".pandas-header").classList.add("scrolled");
    } else {
        document.querySelector(".pandas-header").classList.remove("scrolled");
    }
}

var isExtended = false;

function mySearch() {
    isExtended = !isExtended;
    var header = document.querySelector('.pandas-header');
    header.classList.toggle('extended');
    var searchDiv = document.getElementById('searchDiv');
    if (isExtended) {
        searchDiv.style.display = "block";
        document.getElementById('searchInput').focus();
      } else {
        searchDiv.style.display = "none";
      }
  
  }

  function returnHeader() {
    var header = document.querySelector('.pandas-header');
    header.classList.remove('extended');
    isExtended = false;
    var searchDiv = document.getElementById('searchDiv');
    searchDiv.style.display = "none";
  }
