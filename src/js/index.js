// NAVBAR JS


let mobileNav = document.querySelector(".mobileNav");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click" , function() {
  mobileNav.classList.toggle("isActive");
  hamburger.classList.toggle("isActive");
});


// END OF NAVBAR JS


// FILTER SELECT ARROW

const arrow = document.querySelector(".dropdown-arrow");
const filterSelect = document.querySelector(".filter-select");
filterSelect.addEventListener("mouseover", function(){
  arrow.fill = "color:white !important"
});


// END OF FILTER SELECT ARROW

