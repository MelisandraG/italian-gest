// NAVBAR JS


let mobileNav = document.querySelector(".mobileNav");
let hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click" , function() {
  mobileNav.classList.toggle("isActive");
  hamburger.classList.toggle("isActive");
});


// END OF NAVBAR JS

const filters = document.querySelector(".filters");

function handleClick(trigger) {
  filters.querySelectorAll('button').forEach(element => {
    element.classList.toggle('filterToggle', trigger === element);
  });
}


// SUBMIT POPUP