let success = document.querySelector(".success");
let close2 = document.getElementsByClassName("close")[0];
let title = document.querySelector("#title");

card.onclick = function(){
    // modal.style.display = "flex";
    // modalTitle.innerHTML = recipeName;
    // modalImage.src = imageUrl; 
    // //img.getElementById("modalImage").src = imageUrl;
    // modalIngredients.innerHTML = ingredients;
    // modalInstructions.innerHTML = instructions;
    // modalDifficulty.innerHTML = difficulty;
    // modalDiet.innerHTML = diet;
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
