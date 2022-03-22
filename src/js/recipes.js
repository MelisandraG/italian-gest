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

const risottoRecipes = [
    {
    recipeName:"Shrimp Scampi with Green Onions and Orzo",
    imageUrl:"https://images.unsplash.com/photo-1581073746562-e7fd2422f0eb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80",
    ingredients:"3/4 cup orzo (rice-shaped pasta); 4 tablespoons (1/2 stick) butter, divided; 2 tablespoons olive oil; 2 garlic cloves, peeled; 1 pound uncooked large shrimp, peeled, deveined; 4 green onions, thinly sliced; 1/3 cup dry white wine",
    instructions:"Step 1 Cook orzo in large saucepan of boiling salted water until tender but still firm to bite, stirring occasionally.; Step 2 Meanwhile, melt 2 tablespoons butter with oil in heavy large skillet over medium-high heat. Using garlic press, squeeze in garlic; stir 10 seconds. Add shrimp and sauté 2 minutes. Add green onions and toss until shrimp are just opaque in center, about 1 minute longer. Add wine and toss until wine boils, about 1 minute. Mix in remaining 2 tablespoons butter and season to taste with salt and pepper.; Step 3 Drain pasta; transfer to large bowl. Top with shrimp and onion-garlic butter.",
    difficulty: "Advanced", 
    diet: "Vegan"
    },
    { 
    recipeName:"Risotto With Mushrooms and Thyme",
    imageUrl:"https://images.unsplash.com/photo-1637361874063-e5e415d7bcf7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    ingredients:"1 Tbsp. kosher salt, plus more;6 Tbsp. extra-virgin olive oil; ½ large white onion, finely chopped; 2 cups carnaroli or Japanese sushi rice; 1 cup dry white wine; 5 Tbsp. unsalted butter, cut into pieces; 2 oz. Parmesan, finely grated; ¼ cup extra-virgin olive oil; 1 lb. mushrooms (such as shiitake, crimini, or maitake), trimmed, caps torn into 2 pieces; Kosher salt; Freshly ground pepper; 5 sprigs thyme; 5 garlic cloves, crushed; 2 Tbsp. unsalted butter; 2 Tbsp. white wine vinegar or fresh lemon juice; 1 oz. Parmesan, finely grated",
    instructions:"Step 1 Combine 1 Tbsp. salt and 10 cups water in a medium pot. Bring to a boil, then reduce heat to medium to maintain a bare simmer.; Step 2 heat oil in a 6-qt. Dutch oven over medium. Add onion and a pinch of salt and cook, stirring often, until onion is translucent and starting to soften, 6–8 minutes. Add ½ cup water and cook, stirring often, until water evaporates and onion is sizzling in oil and tender, about 5 minutes. Taste onion; if it’s still firm at all, add a splash of water and continue to cook until meltingly soft.; Step 3 Add rice and stir well to coat with oil. Cook, stirring constantly, until grains are translucent around the edges and make a clattering sound when they hit against the pot, about 5 minutes. Add wine and another pinch of salt. Bring to a simmer and cook, stirring occasionally, until wine evaporates, about 2 minutes.; Step 4 Reduce heat to medium, then add hot salted water to rice in ¾-cup increments, stirring constantly and allowing liquid to absorb fully before adding more, until rice is al dente and suspended in a fluid, not-too-thick creamy liquid, 25–30 minutes. It should take 2–3 minutes for each addition to be absorbed; if things are moving faster than this, reduce heat to medium-low. The finished texture should be more of a liquid than a solid. Start checking rice about 15 minutes after the first water addition; the grains should be tender but not mushy, with a slightly firm center that doesn’t leave a chalky residue between your teeth after tasting. Do not overcook!;Step 5 Remove pot from heat, add butter, and stir until melted. Gradually add Parmesan, stirring until cheese is melted and liquid is creamy but very loose; stir in more hot salted water if needed. Taste and season with more salt.; Step 6 Heat oil in a large skillet over medium-high until shimmering. Add mushrooms; cook, tossing occasionally, until they begin to soften and release some liquid, about 3 minutes. Season with salt and pepper; cook, tossing occasionally, until deeply browned and tender, 8–10 minutes. Add thyme, garlic, and butter and cook, tossing occasionally until garlic softens and  butter is golden brown, about 3 minutes. Remove from heat and add vinegar. Toss to coat, scraping up any browned bits. Pluck out thyme.; Step 7 Divide risotto among warm bowls. Top each with a few grinds of pepper and spoon mushroom mixture over. Serve with Parmesan alongside.",
    difficulty: "Advanced", 
    diet: "Vegan"
    }
];

const dessertRecipes =[
    {
    recipeName:"Classic Cannoli",
    imageUrl:"https://images.unsplash.com/photo-1611292984550-6dd8def2e668?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1007&q=80",
    ingredients:"150g plain flour; 1 tbsp golden caster sugar; large pinch bicarbonate of soda; ½ tsp cinnamon; 1 tsp cocoa powder; 30g butter; 1 egg, separated; 50ml dry marsala or white wine; rapeseed oil or sunflower oil for deep-frying (see tip); 50g dark chocolate, melted; handful pistachio kernels, finely chopped; icing sugar, to dust; 250g ricotta, drained and beaten until fluffy; 100g mascarpone; 2 tbsp finely chopped candied peel; 2 tbsp icing sugar; cannoli moulds",
    instructions:"STEP 1 Tip the flour, sugar, bicarb, cinnamon and cocoa (if using) into a bowl with a pinch of salt. Add the butter and rub it into the dry ingredients until there are no more lumps. Mix the egg yolk and marsala and add this to the bowl, then mix the whole lot together and knead to a smooth dough. Wrap and rest in the fridge. (Can be made ahead and fried the next day.); STEP 2 Fill a deep-fat fryer, wok or deep saucepan a third of the way up with oil. Cut the dough into pieces and, working one piece at a time, roll them out as thinly as you can – use a pasta machine if you have one. Heat the oil and keep an eye on it until it reaches 180C. Lay the dough out on a lightly floured surface and cut out circles about 11cm across. Wrap each one around a cannoli mould, using some of the egg white to stick the top edge down and they're ready for frying.It's important to take care when cooking with hot oil. Read our guide on how to deep-fry safely to avoid accidents in the kitchen.; STEP 3 Deep-fry the cannoli (with their moulds) one at a time, making sure they cook all over. They should take about 45-60 seconds in all and should be visibly golden brown (keep cooking a little longer if they aren't) and the dough will bubble and blister. Carefully take each one out of the oil using the tongs and shake the cannoli off the mould very carefully onto kitchen paper. As you fry each one, make sure the oil stays at 180C at all times and doesn’t get any hotter. These will keep for 2-3 days in an airtight container.; STEP 4 When the cannoli are cold, dip the end of each one into chocolate, then dip some of those into the pistachios. Leave to cool and harden. Beat the ricotta and mascarpone together, then stir in the candied peel and sugar. Spoon the mixture into a piping bag with a wide star nozzle and pipe it into the cannoli. Serve soon after filling.",
    difficulty: "Advanced", 
    diet: "Vegan"
    },
    { 
    recipeName:"Quick & easy tiramisu",
    imageUrl:"https://images.unsplash.com/photo-1593545024944-b3c74435b9f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    ingredients:"3 tsp instant coffee granules; 3 tbsp coffee liqueur (or Camp Chicory & Coffee Essence); 250g tub mascarpone; 85g condensed milk; 1 tsp vanilla extract; 4-6 sponge fingers; 1 tbsp cocoa powder.",
    instructions:"STEP 1 Mix the coffee granules with 2 tbsp boiling water in a large jug and stir to combine. Add the coffee liqueur and 75ml cold water. Pour into a shallow dish and set aside. STEP 2; Make the cream layer by beating the mascarpone, condensed milk and vanilla extract with an electric whisk until thick and smooth. STEP 3; Break the sponge fingers into two or three pieces and soak in the coffee mixture for a few secs. Put a few bits of the sponge in the bottom of two wine or sundae glasses and top with the cream. Sift over the cocoa and chill for at least 1 hr before serving.",
    difficulty: "Advanced", 
    diet: "Vegan"
    }
];
const fishRecipes =[
    {
    recipeName:"Fish pie mac ’n’ cheese",
    imageUrl:"https://images.pexels.com/photos/5060461/pexels-photo-5060461.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    ingredients:"650ml milk; 40g plain flour; 40g butter; 2 tsp Dijon mustard; 150g mature cheddar , grated; 180g frozen peas; handful of parsley , chopped; 300g macaroni; 300g fish pie mix (smoked fish, white fish and salmon); green salad , to serve (optional)",
    instructions:"STEP 1 Pour the milk into a large pan and add the flour and butter. Set over a medium heat and whisk continuously until you have a smooth, thick white sauce. Remove from the heat, add the mustard, most of the cheese (save a handful for the top), peas and parsley.; STEP 2 Meanwhile, boil the pasta in a large pan of water following pack instructions until just cooked. Drain.; STEP 3 Heat the oven to 200C/180C fan/gas 6. Tip the pasta into the sauce and add half the fish, stir everything together then tip into a large baking dish. Top with the rest of the fish, pushing it into the pasta a little, then scatter with the remaining cheese. Bake for 30 mins until golden, then serve with salad, if you like. Can be chilled and eaten within three days or frozen for up to a month. Defrost in the fridge, then reheat in a microwave or oven until piping hot.",
    difficulty: "Advanced", 
    diet: "Vegan"
    },
    { 
    recipeName:"Gnocchi fish pie",
    imageUrl:"https://images.unsplash.com/photo-1616170687881-32188ae1b6d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    ingredients:"350g gnocchi; 200ml semi-skimmed milk; 2 tbsp cornflour; 400g fish pie mix , or a mix of salmon, smoked haddock and prawns; 4 spring onions , sliced; 1 tbsp chopped chives , or 1/2 tbsp finely chopped tarragon; 150ml reduced-fat crème fraîche; 1 tsp capers , drained; 200g frozen peas; 1 tsp olive oil; 250g long-stem broccoli or green beans, steamed, to serve",
    instructions:"STEP 1 Put the gnocchi in a deep ovenproof frying pan and cover with boiling water and a pinch of salt. Simmer for 2-3 mins, then drain and leave to steam-dry.; STEP 2 Combine a splash of the milk with the cornflour until you have a smooth paste, then add to the rest of the milk. Pour the mixture into the frying pan, then add the fish pie mix and spring onions, and bring to a gentle simmer. Cook, stirring frequently, until the sauce has thickened and the fish is just cooked, about 4-5 mins. Season well. Stir in the herbs, crème fraîche, capers and peas, and bring back to a simmer.; STEP 3 Heat the grill to medium-high. Arrange the gnocchi over the filling, then brush with the oil and season with some black pepper. Grill for 5-10 mins, or until the gnocchi has puffed up and is starting to turn golden on top. Serve with the broccoli or green beans on the side.",
    difficulty: "Advanced", 
    diet: "Vegan"
    }
];
const meatRecipes =[{
    recipeName:"Classic Italian lasagne",
    imageUrl:"https://images.unsplash.com/photo-1574894709920-11b28e7367e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    ingredients:"250g pack fresh lasagne sheets; olive oil, for greasing; large handful grated parmesan; 110g unsalted butter; 1 celery stick, finely chopped; 1 carrot, finely chopped; 1 small red onion, finely chopped; 25g dried porcini, soaked for 10 mins in hot water, drained and roughly chopped; 1 rosemary sprig, leaves picked and chopped; 1kg trimmed beef or veal flank, finely chopped (ask your butcher to do this for you); 125ml dry white wine; 400g can good-quality chopped tomatoes; 1l full-fat milk; 1 bay leaf; 75g unsalted butter; 125g ‘00’ pasta flour; good grating of nutmeg; 100g parmesan, finely grated; 2 egg yolks",
    instructions:"STEP 1 For the ragu, melt the butter in a large flameproof casserole dish over a medium heat until foaming. Add the celery, carrot, onion, porcini, rosemary and some seasoning, and fry for 5 mins.; STEP 2 Season the meat, add to the dish and cook for 5 mins until browned. Pour in the wine, add the tomatoes and bring to the boil.; STEP 3 Reduce the heat to low, put the lid on the dish and cook for 1hr 30 mins, removing the lid for the final 30 mins so the sauce can reduce. The meat should be tender but not too broken up, and the sauce should be thick. Taste for seasoning. You can cook it for longer if you have time - the flavour will only improve.; STEP 4 For the béchamel sauce, pour the milk into a saucepan with the bay leaf. Bring to a simmer, turn off the heat and set aside. In a heavy-based saucepan, melt the butter over a medium heat, then whisk in the flour and hot milk. Whisk vigorously until smooth, then cook for 10-15 mins until very thick. Remove the bay leaf and season, grating in nutmeg to taste. Stir in the parmesan and egg yolks, then set aside to cool.; STEP 5 Heat oven to 180C/160C fan/gas 4. Working in batches of three, plunge the pasta sheets into a pan of boiling salted water for 20 secs, just to soften, then immediately put in a bowl of ice-cold water.; STEP 6 Rub oil onto the base and sides of a large baking dish. Put a layer of pasta on the base, then add a layer of ragu, followed by a layer of béchamel sauce. A good tip, for really defined layers, is to pipe the béchamel sauce over.; STEP 7 Repeat this process until you have used all the pasta and ragu, and finish with a layer of béchamel sauce on top. Sprinkle the top with a generous layer of parmesan.; STEP 8 Bake in the oven for 40-45 mins or until bubbling and golden brown, then remove from the oven and leave to settle for 10 mins.; STEP 9 Cut the lasagne into squares and let it sit for another 10 mins before serving – this keeps the layers defined and helps it cool down more quickly.",
    difficulty: "Advanced", 
    diet: "Vegan"
    },
    { 
    recipeName:"Porchetta ragu",
    imageUrl:"https://images.unsplash.com/photo-1601556123240-462c758a50db?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    ingredients:"2 tbsp olive oil; 800g pork shoulder, diced; 3 pork sausages; 1 onion, chopped; 1 carrot, chopped; 1 celery stick, chopped; 2 large garlic cloves, crushed; 2 tsp fennel seeds, crushed; pinch of chilli flakes (optional); 200ml white wine; 2 bay leaves; 2 rosemary sprigs, leaves picked and finely chopped; ½ bunch of thyme; 100ml chicken stock; 3 tbsp tomato purée; 2 x 400g cans chopped tomatoes; 2 tbsp double cream; 1 lemon, zested; ½ bunch of parsley, finely chopped; 500g rigatoni pasta; grated parmesan, to serve",
    instructions:"STEP 1 Heat half the oil in a large casserole over a medium-high heat, and fry the diced pork for 5 mins, stirring often until browned. Transfer to a bowl using a slotted spoon and set aside. Squeeze the sausagemeat from the skins into the pan, and fry for 2-3 mins until browned. Scoop into the bowl with the diced pork.; STEP 2 Reduce the heat to low and fry the onion, carrot and celery for 5 mins in the remaining oil. Add the garlic, fennel seeds and chilli flakes and fry for 1 min more. Return the meat to the pan along with the wine. Bring to a simmer and cook until the liquid has reduced by about half. Add the bay, rosemary, thyme, stock, tomato purée and chopped tomatoes, and return to a simmer. Season. Cover and cook over a low heat for 2 hrs 30 mins, or until the pork is falling apart.; STEP 3 Remove the lid, discard the bay and turn up the heat slightly. Simmer for 5-10 mins, or until slightly reduced, stirring often. Stir in the cream, lemon zest and parsley. Season to taste.; STEP 4 Cook the pasta following pack instructions. Toss with the ragu, and serve sprinkled with parmesan.",
    difficulty: "Advanced", 
    diet: "Vegan"
    }
];

const allRecipes = [pastaRecipes, pizzaRecipes, risottoRecipes, dessertRecipes, fishRecipes, meatRecipes];


function createRecipeCard(recipeName, imageUrl, ingredients, instructions, difficulty, diet) {
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
  card.appendChild(cardBody);


  const cardTitle = document.createElement("h2");
  cardTitle.classList.add("card-title");
  cardTitle.innerHTML = recipeName;
  cardBody.appendChild(cardTitle);

  let modal = document.querySelector(".modal");
  let span = document.getElementsByClassName("close")[0];
  let title = document.querySelector("#title");

    card.onclick = function(){
        modal.style.display = "flex";
        modalTitle.innerHTML = recipeName;
        modalImage.src = imageUrl; 
        //img.getElementById("modalImage").src = imageUrl;
        modalIngredients.innerHTML = ingredients;
        modalInstructions.innerHTML = instructions;
        modalDifficulty.innerHTML = difficulty;
        modalDiet.innerHTML = diet;
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
} 


for (let i = 0; i < allRecipes.length; i++) {
    for (let j = 0; j < allRecipes[i].length; j++) {
        createRecipeCard(allRecipes[i][j].recipeName, allRecipes[i][j].imageUrl, allRecipes[i][j].ingredients, allRecipes[i][j].instructions, allRecipes[i][j].difficulty, allRecipes[i][j].diet)
  }
}

// function to filter VEGETARIAN

function filterObject(array, key, value){
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j][key] === value){
                createRecipeCard(allRecipes[i][j].recipeName, allRecipes[i][j].imageUrl, allRecipes[i][j].ingredients, allRecipes[i][j].instructions, allRecipes[i][j].difficulty, allRecipes[i][j].diet)
            }
        }
    }
}
filterObject(allRecipes, "diet", "Vegan");


