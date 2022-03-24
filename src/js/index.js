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

const filterBtnPasta = document.querySelector("#buttonPasta");
const filterBtnPizza = document.querySelector("#buttonPizza");
const filterBtnRisotto = document.querySelector("#buttonRisotto");
const filterBtnMeat = document.querySelector("#buttonMeat");
const filterBtnFish = document.querySelector("#buttonFish");
const filterBtnDessert = document.querySelector("#buttonDessert");

filterBtnPasta.addEventListener("click" , function() {
  filterBtnPasta.classList.toggle("filterToggled");
});

filterBtnPizza.addEventListener("click" , function() {
  filterBtnPizza.classList.toggle("filterToggled");
});

filterBtnRisotto.addEventListener("click" , function() {
  filterBtnRisotto.classList.toggle("filterToggled");
});

filterBtnMeat.addEventListener("click" , function() {
  filterBtnMeat.classList.toggle("filterToggled");
});

filterBtnFish.addEventListener("click" , function() {
  filterBtnFish.classList.toggle("filterToggled");
});

filterBtnDessert.addEventListener("click" , function() {
  filterBtnDessert.classList.toggle("filterToggled");
});


