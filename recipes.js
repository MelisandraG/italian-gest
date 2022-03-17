const cards = document.querySelector(".cards");

const pastaRecipes = [
  {
    recipeName: "Pasta alla Gricia",
    imageUrl:
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80",
    ingredients:
      "1 tablespoon extra-virgin olive oil; 6 ounces guanciale (salt-cured pork jowl), cut into ¾-inch pieces; 8 ounces rigatoni; Kosher salt; 2 teaspoons coarsely ground black pepper, preferably ground with a mortar and pestle; 3 ounces Pecorino Romano, finely grated on the small holes of a box grater (about 3 cups)",
    instructions:
      "Step 1 Heat oil in a large skillet over medium-low. Cook guanciale, stirring often, until it starts to brown and crisp, 10–15 minutes; it will shrink dramatically as the fat renders. Transfer to a small bowl with a slotted spoon; reserve skillet (do not wipe out).; Step 2 Meanwhile, cook pasta in a large pot of boiling lightly salted water, stirring occasionally, until pasta is about halfway cooked (not quite al dente); drain, reserving 1 ½ cups pasta cooking liquid. Step 3 Add ¾ cup pasta cooking liquid to reserved skillet and bring to a gentle boil over medium heat, swirling often to encourage drippings and liquid to emulsify, about 1 minute. Add pasta and cook, tossing often and adding more pasta cooking liquid as needed, until pasta is al dente and a thick, glossy sauce forms, 5–7 minutes (this second cooking is why you undercook the pasta initially).;Step 4 Increase heat to medium-high. Add guanciale, pepper, and two-thirds of Pecorino; toss well to combine and melt cheese. Serve pasta topped with remaining Pecorino.",
    difficulty: "Beginner", 
    diet: "Vegetarian" 
  },
  {
    recipeName: "Vegan Pasta alla Vodka (Sorta)",
    imageUrl:
      "https://images.unsplash.com/photo-1585672840829-d4ed3abbfb27?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1404&q=80",
    ingredients:
      "4 (very generous) servings; ¾cup raw cashews; ¼ cup extra-virgin olive oil, plus more for serving; 1 large onion, thinly sliced; 5 garlic cloves, coarsely chopped; ½ tsp. Diamond Crystal or ¼ tsp. Morton kosher salt; ½ tsp. crushed red pepper flakes; 1 4.5-oz. tube or ½ cup double-concentrated or regular tomato paste; 1 14.5-oz. can whole peeled tomatoes; 1 lb. short, chunky pasta (such as rigatoni, conchiglie, or casarecce); ¼ cup vodka; Torn basil leaves (for serving); Vegan Parmesan (for serving; optional); Freshly ground black pepper; 1 lemon, sliced into wedges",
    instructions:
      "Step 1 Place ¾ cup raw cashews in a blender, preferably high-powered. Pour boiling water over to cover and let soak 30 minutes. (If you set the cashews aside and then prep and measure all of the remaining ingredients, they should be ready to go right on time!); Step 2 Heat ¼ cup extra-virgin olive oil in a large Dutch oven or other heavy pot over medium heat. Add 1 large onion, thinly sliced, and 5 garlic cloves, coarsely chopped, season with kosher salt, and cook, stirring often, until softened and onion is translucent, 5–7 minutes. Add ½ tsp. crushed red pepper flakes and cook, stirring to release flavor, 30 seconds. Add one 4.5-oz. tube or ½ cup double-concentrated or regular tomato paste and cook, stirring often and reducing heat if needed, until it starts to stick to bottom of pot but is still bright red in color, 3–4 minutes. Add one 14.5-oz. can whole peeled tomatoes and cook, stirring occasionally and crushing tomatoes with spoon, until thickened slightly and starting to stick to bottom of pot, about 5 minutes.; Step 3 When tomato sauce is nearly done, cook 1 lb. short, chunky pasta (such as rigatoni, conchiglie, or casarecce) in a large pot of boiling salted water, stirring occasionally, until al dente. Drain pasta, reserving 1½ cups pasta cooking liquid.; Step 4 Drain cashews and return to blender. Add 1 cup fresh water and blend on high until smooth and creamy (you can’t overblend, so really go for it!). Add tomato sauce and ½ tsp. Diamond Crystal or ¼ tsp. Morton kosher salt and blend until smooth. Return sauce to pot and set over low heat to keep warm.; Step 5 When pasta is about 2 minutes from being done, stir ¼ cup vodka into sauce. Increase heat to medium-low and bring to a simmer; cook off alcohol, about 1 minute.; Step 6 Transfer pasta to sauce (it’s okay if some water clings to the noodles) and add ½ cup reserved pasta cooking liquid. Reduce heat to low and cook, stirring and adding more pasta cooking liquid ¼ cup at a time as needed, until pasta is coated in sauce, about 2 minutes; season with salt. (Note: This pasta stiffens as it sits. To refresh the pot for a second—or third—helping, stir in more reserved pasta cooking liquid to loosen.); Step 7 Divide pasta among bowls and top with torn basil leaves and vegan Parmesan (if using). Season with freshly ground black pepper and drizzle more oil over. Serve with lemon wedges for squeezing over.",
    difficulty: "Advanced", 
    diet: "Vegan" 
  }
];

const pizzaRecipes = [
  {
    recipeName: "Detroit-Style Pepperoni Pizza",
    imageUrl:
      "https://images.unsplash.com/photo-1534308983496-4fabb1a015ee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=876&q=80",
    ingredients:
      "Extra-virgin olive oil (for pan); Bread flour (for surface); ½ batch (360 g) Master Bread Dough; 8 oz. low-moisture mozzarella or brick cheese; ¾ cup store-bought marinara sauce; 4 oz. pepperoni, sliced; ½ tsp. dried oregano; ½ cup (lightly packed) basil leaves",
    instructions:
      "Step 1 To make this recipe, start by preparing a half-batch of the Master Bread Dough.; Step 2 Lightly brush Detroit-style pizza pan, 13x9  baking pan, or two 8x8 pans with extra-virgin olive oil. Lightly flour work surface with bread flour and turn ½ batch (360 g) Master Bread Dough out onto surface. If using a Detroit-style pizza pan or a 13x9 pan, pull edges of dough into the center, then turn over and hold opposite sides of the dough with your hands so the sides of your pinkies are touching the surface and rotate dough, gently working it into a round as you go. If using two 8x8 pans, divide dough in half and form using the same method as above. Gently transfer dough to prepared pan. Rub dough with oil and cover with a kitchen towel. Let rise in a warm, draft-free spot until dough expands a bit and is smooth and more pliable, about 1 hour.; Step 3 Meanwhile, cut 8 oz. low-moisture mozzarella or brick cheese into small cubes. You should have 2 heaping cups.; Step 4 Place a rack in middle of oven; preheat to 450°. Dimple dough with your fingers, gently pushing out to edges of pan. Scatter cheese evenly over dough all the way to the edges. Spoon ¾ cup store-bought marinara sauce over pizza in three even rows. Next, distribute 4 oz. pepperoni, sliced, evenly over sauce. Sprinkle with ½ tsp. dried oregano.; Step 5 Bake pizza until crust is deep golden brown, 35–40 minutes. (You can also check doneness with an instant-read thermometer. It should register 190° when inserted into a thick part of the crust.) Remove from oven and top with ½ cup (lightly packed) basil leaves. Let cool in pan 5 minutes before slicing.",
    difficulty: "Medium", 
    diet: "Vegetarian"
  },
  {
    recipeName: "Pizza Dough",
    imageUrl:
      "https://images.unsplash.com/photo-1617343251257-b5d709934ddd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    ingredients:
      "1 ¼-oz. envelope active dry yeast (about 2¼ tsp.); 2 teaspoons sugar; 2 tablespoons kosher salt; 3 ½ cups 00 flour, plus more for surface; ¼ cup extra-virgin olive oil, plus more for bowl; Semolina flour (for dusting)",
    instructions:
      "Step 1 Whisk yeast, sugar, and 1¼ cups warm (not hot) water in a small bowl. Let stand in a warm place until yeast is foamy, about 10 minutes.; Step 2 Mix salt and 3½ cups 00 flour in the bowl of a stand mixer fitted with the dough hook. With the mixer on low speed, mix in yeast mixture and ¼ cup oil. Continue to mix, gradually increasing speed to medium-high, until dough is smooth and elastic.; Step 3 Transfer dough to a lightly floured surface and give it a few turns by hand to finish kneading it; it will still be slightly sticky. Transfer dough to a large oiled bowl; turn to coat, cover with a kitchen towel or plastic wrap, and let rise in a warm place until doubled in size, 1–1½ hours.; Step 4 Punch down dough to deflate and turn out onto a well-floured work surface. Divide into 8 pieces (about 4 oz. each); shape each into a ball. Cover with a kitchen towel and let stand 15 minutes before stretching dough. Or, transfer balls to a floured rimmed baking sheet and chill until cold.; Step 5 Dust a large work surface with a mixture of 00 flour and semolina flour. If dough has been chilled, transfer a ball to work surface and let stand until still cool but not cold (it should register about 60° on an instant-read thermometer).; Step 6 Working one at a time, press and stretch dough balls into 9”–10” rounds, sprinkling with more 00 and semolina flour as needed to keep dough from sticking (use as little as you can). Using one hand as a guide, shape a slightly thicker rim around edge. If dough resists or shrinks back as you shape it, let it rest before proceeding; do not overwork dough. (Alternatively, you can roll dough out with a rolling pin.);Step 7 Heat a 10”–12” cast-iron skillet over medium heat until very hot, about 5 minutes. Working one at a time, carefully transfer dough to skillet and cook, flipping once and rotating crust to encourage even cooking, until barely tan and browned in a few spots, about 5 minutes total. Press any thicker parts against the pan to help cook through. Transfer crusts to wire racks or baking sheets as you work, brushing off any excess flour. Let cool.; Step 8 Do ahead: Parbaked crusts can be refrigerated overnight or frozen, well wrapped, up to 2 weeks.",
    difficulty: "Advanced", 
    diet: "Vegan"
  }
];

const allRecipes = [pastaRecipes, pizzaRecipes];


function createRecipeCard(recipeName, imageUrl) {
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

  // Step1: Create the cardBody div, add the class card-body and add it to the card
  const cardBody = document.createElement("div");
  cardBody.classList.add("card-body");
  card.appendChild(cardBody);

  // Step2: Create the cardTitle h2, add the class card-title,
  // set the text inside the tag to the "title" parameter of this function
  // and add it to the cardBody
  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = recipeName;
  cardBody.appendChild(cardTitle);

  // Step3: Create the cardButton button, add the class card-button,
  // set the text inside the tag to be "Adopt Now"
  // and add it to the cardBody
  const cardButton = document.createElement("button");
  cardButton.classList.add("card-button");
  cardButton.innerHTML = "Adopt Now";
  cardBody.appendChild(cardButton);
}

for (let i = 0; i < allRecipes.length; i++) {
    for (let j = 0; j < allRecipes[i].length; j++) {
        createRecipeCard(allRecipes[i][j].recipeName, allRecipes[i][j].imageUrl);
  }
}

/* const result = allRecipes.filter(filter => filter.diets=== "Vegetarian");
console.log(result);
*/

// function to filter VEGETARIAN

function filterObject(array, key, value){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j][key] === value){
            createRecipeCard(array[i][j].recipeName, array[i][j].imageUrl);

            }
        }
    }
}
// test function ---> filterObject(allRecipes, "diet", "Vegan");

//ORIGINAL CODE
/*
function findObjectByKey(array, key, value) {
    for (var i = 0; i < array.length; i++) {
        if (array[i][key] === value) {
            return array[i];
        }
    }
    return null;
}*/
