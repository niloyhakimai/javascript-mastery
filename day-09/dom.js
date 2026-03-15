// Select the entire property card by its ID
let villa = document.getElementById("luxury-villa");
// console.log(villa);

// Select the title using querySelector (remembering the '.' for class)
let title = document.querySelector(".title");

// 1. Using innerText to change only the visible text
title.innerText = "My Dream Villa";

// Select the price using getElementsByClassName (returns an HTMLCollection)
let price = document.getElementsByClassName("price");

// 2. Using innerHTML to insert HTML tags along with text
// We use price[0] because getElementsByClassName returns a list (HTMLCollection), 
// and our target is the first (and only) item in that list.
price[0].innerHTML = "<strong>$10,000,000</strong>";




let btn = document.querySelector(".btn-buy");
// console.log(btn.getAttribute("class"))
btn.setAttribute("disabled", "true")
btn.setAttribute("style", "background-color : red; color:white; cursor: not-allowed;")


let newAbdge = document.createElement("p")
newAbdge.innerText = "Top rated property"
newAbdge.setAttribute("class", "badge-style")

let myCard = document.getElementById("luxury-villa")
myCard.prepend(newAbdge)
myCard.classList.add("premium-theme")
// console.log(myCard)

// console.log(myCard.classList);

