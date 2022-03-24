localStorage.setItem("recipe", "all")

const testPasta = document.getElementById("categoryTestPasta").addEventListener("click", function (){
    localStorage.setItem("recipe", "pasta")
    console.log(localStorage.getItem("recipe"))
    window.location.replace("../../recipes.html")
  })

const testPizza = document.getElementById("categoryTestPizza").addEventListener("click", function (){
    localStorage.setItem("recipe", "pizza")
    console.log(localStorage.getItem("recipe"))
    window.location.replace("../../recipes.html")
})

const testRisotto = document.getElementById("categoryTestRisotto").addEventListener("click", function (){
    localStorage.setItem("recipe", "risotto")
    console.log(localStorage.getItem("recipe"))
    window.location.replace("../../recipes.html")
})
  
const testFish = document.getElementById("categoryTestFish").addEventListener("click", function (){
    localStorage.setItem("recipe", "fish")
    console.log(localStorage.getItem("recipe"))
    window.location.replace("../../recipes.html")
})
  
const testMeat = document.getElementById("categoryTestMeat").addEventListener("click", function (){
    localStorage.setItem("recipe", "meat")
    console.log(localStorage.getItem("recipe"))
    window.location.replace("../../recipes.html")
})
  
const testDessert = document.getElementById("categoryTestDessert").addEventListener("click", function (){
    localStorage.setItem("recipe", "dessert")
    console.log(localStorage.getItem("recipe"))
    window.location.replace("../../recipes.html")
})
    