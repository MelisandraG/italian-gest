import {allRecipes} from "./data.js";

const cards = document.querySelector(".cards");

function createRecipeCard(recipeName, imageUrl, ingredients, instructions, difficulty, difficultyImage, diet, prepTime, dietImage, nutriScore) {
  const card = document.createElement("div");
  card.classList.add("card");
  cards.appendChild(card);

  const cardHeader = document.createElement("div");
  cardHeader.classList.add("card-header");
  card.appendChild(cardHeader);

  const cardImg = document.createElement("div");
  cardImg.style.backgroundImage = `url(${imageUrl})`;
  cardImg.classList.add("card-img");
  cardHeader.appendChild(cardImg);

  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  cardHeader.appendChild(cardBody);

  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = recipeName;
  cardBody.appendChild(cardTitle);

  const cardFooter = document.createElement("div");
  cardFooter.classList.add("card-footer");
  card.appendChild(cardFooter);

  const cardFooterLeft = document.createElement("div");
  cardFooterLeft.classList.add("card-footer-left");
  cardFooter.appendChild(cardFooterLeft);

  const cardFooterRight = document.createElement("div");
  cardFooterRight.classList.add("card-footer-right");
  cardFooter.appendChild(cardFooterRight);

  const cardFooterLeft1 = document.createElement("div");
  cardFooterLeft1.classList.add("card-footer-left-1");
  cardFooterLeft.appendChild(cardFooterLeft1);

  const cardFooterLeft2 = document.createElement("div");
  cardFooterLeft2.classList.add("card-footer-left-2");
  cardFooterLeft.appendChild(cardFooterLeft2);

  const clock = document.createElement("img");
  clock.src = "/src/media/icons/clock.svg";
  clock.classList.add("clock");
  cardFooterLeft1.appendChild(clock);

  const preparationTime = document.createElement("p");
  preparationTime.classList.add("prep-time");
  preparationTime.innerHTML = prepTime;
  cardFooterLeft1.appendChild(preparationTime);

  const difficultyString = document.createElement("p");
  difficultyString.classList.add("difficulty-string");
  difficultyString.innerHTML = difficulty;
  cardFooterLeft2.appendChild(difficultyString);

  const difficultyImg = document.createElement("img");
  difficultyImg.src = difficultyImage;
  difficultyImg.classList.add("difficulty-img");
  cardFooterLeft2.appendChild(difficultyImg);



  let modal = document.querySelector(".modal");
  let span = document.getElementsByClassName("close")[0];
  let title = document.querySelector("#title");

  card.onclick = function(){
      modal.style.display = "flex";
      modalTitle.innerHTML = recipeName;
      modalImage.style.backgroundImage = "url(" + imageUrl + ")"; 
      //img.getElementById("modalImage").src = imageUrl;
      modalIngredients.innerHTML = ingredients;
      modalInstructions.innerHTML = instructions;
      modalDifficulty.innerHTML = difficulty;
      modalDiet.innerHTML = diet;
  }

  card.addEventListener("click", function() {
    document.body.style.overflow = "hidden";
  });

  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
      document.body.style.overflow = "auto";
    }
  }
} 


/*for (let i = 0; i < allRecipes.length; i++) {
    for (let j = 0; j < allRecipes[i].length; j++) {
        createRecipeCard(allRecipes[i][j].recipeName, allRecipes[i][j].imageUrl, allRecipes[i][j].ingredients, allRecipes[i][j].instructions, allRecipes[i][j].difficulty, allRecipes[i][j].diet)
  }
}
*/
// function to filter VEGETARIAN

function filterObject(array, key, value){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j][key] === value){
                createRecipeCard(allRecipes[i][j].recipeName, allRecipes[i][j].imageUrl, allRecipes[i][j].ingredients, allRecipes[i][j].instructions, allRecipes[i][j].difficulty, allRecipes[i][j].diet, allRecipes[i][j].dietImage, allRecipes[i][j].difficultyImage, allRecipes[i][j].prepTime )
            }
        }
    }
}

/// LOCAL STORAGE

let storage = localStorage.getItem("recipe");
console.log("storage: "+storage);

switch (storage) {
    case "pasta":
        while(cards.firstChild){
            cards.removeChild(cards.firstChild);
        };
        filterObject(allRecipes, "category", "Pasta");
        break;
    case "pizza":
        while(cards.firstChild){
            cards.removeChild(cards.firstChild);
        };
        filterObject(allRecipes, "category", "Pizza");
        break;
    case "risotto":
        while(cards.firstChild){
            cards.removeChild(cards.firstChild);
        };
        filterObject(allRecipes, "category", "Risotto");
        break;
    case "fish":
        while(cards.firstChild){
            cards.removeChild(cards.firstChild);
        };
        filterObject(allRecipes, "category", "Fish");
        break;
    case "meat":
        while(cards.firstChild){
            cards.removeChild(cards.firstChild);
        };
        filterObject(allRecipes, "category", "Meat");
        break;
    case "dessert":
        while(cards.firstChild){
            cards.removeChild(cards.firstChild);
        };
        filterObject(allRecipes, "category", "Dessert");
        break;
    case "all":
        while(cards.firstChild){
            cards.removeChild(cards.firstChild);
        };
        for (let i = 0; i < allRecipes.length; i++) {
            for (let j = 0; j < allRecipes[i].length; j++) {
                createRecipeCard(allRecipes[i][j].recipeName, allRecipes[i][j].imageUrl, allRecipes[i][j].ingredients, allRecipes[i][j].instructions, allRecipes[i][j].difficulty, allRecipes[i][j].diet)
            }
        }
        break;
    default:
        for (let i = 0; i < allRecipes.length; i++) {
            for (let j = 0; j < allRecipes[i].length; j++) {
                createRecipeCard(allRecipes[i][j].recipeName, allRecipes[i][j].imageUrl, allRecipes[i][j].ingredients, allRecipes[i][j].instructions, allRecipes[i][j].difficulty, allRecipes[i][j].diet)
            }
        }
        break;
}


const btnAll = document.querySelector("#buttonAll");
btnAll.addEventListener("click", function() {
  while(cards.firstChild){
  cards.removeChild(cards.firstChild);
  };
  for (let i = 0; i < allRecipes.length; i++) {
    for (let j = 0; j < allRecipes[i].length; j++) {
        createRecipeCard(allRecipes[i][j].recipeName, allRecipes[i][j].imageUrl, allRecipes[i][j].ingredients, allRecipes[i][j].instructions, allRecipes[i][j].difficulty, allRecipes[i][j].diet)
  }
}
});

const btnPasta = document.querySelector("#buttonPasta");
btnPasta.addEventListener("click", function() {
  while(cards.firstChild){
  cards.removeChild(cards.firstChild);
  };
  filterObject(allRecipes, "category", "Pasta");
});

const btnPizza = document.querySelector("#buttonPizza");
btnPizza.addEventListener("click", function() {
  while(cards.firstChild){
  cards.removeChild(cards.firstChild);
  };
  filterObject(allRecipes, "category", "Pizza");
});

const btnRisotto = document.querySelector("#buttonRisotto");
btnRisotto.addEventListener("click", function() {
  while(cards.firstChild){
  cards.removeChild(cards.firstChild);
  };
  filterObject(allRecipes, "category", "Risotto");
});

const btnFish = document.querySelector("#buttonFish");
btnFish.addEventListener("click", function() {
  while(cards.firstChild){
  cards.removeChild(cards.firstChild);
  };
  filterObject(allRecipes, "category", "Fish");
});

const btnMeat = document.querySelector("#buttonMeat");
btnMeat.addEventListener("click", function() {
  while(cards.firstChild){
  cards.removeChild(cards.firstChild);
  };
  filterObject(allRecipes, "category", "Meat");
});

const btnDessert = document.querySelector("#buttonDessert");
  btnDessert.addEventListener("click", function() {
  while(cards.firstChild){
  cards.removeChild(cards.firstChild);
  };
  filterObject(allRecipes, "category", "Dessert");
});



  const categoryBtn = document.getElementById("test"); 
  categoryBtn.addEventListener("click", function() {
  while(cards.firstChild){
  cards.removeChild(cards.firstChild);
  };
  filterObject(allRecipes, "category", "Pasta");
});

function categoryTest(allRecipes, cards){
  window.location.replace = "../../recipes.html";
  while(cards.firstChild){
    cards.removeChild(cards.firstChild);
  };
  filterObject(allRecipes, "category", "Pasta");
}



//{location.href = "../../recipes.html"; while(cards.firstChild){ cards.removeChild(cards.firstChild);}; filterObject(allRecipes, "category", "Pasta");}



