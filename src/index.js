/* Commenting out Express functions until vanilla JS functionality built */

/*
const express = require("express"); /* Imports express module into index.js */

/*
require("dotenv").config();
*/

/* console.log(process.env.DB_HOST); Remove this after you have tested it is working*/

// Check node modules are running
console.log("node started");

// Check index.js is connected to index.html
console.log("js is working");

// Assign a variable name to the 'Add' button on the dashboard
let addButton = document.getElementById("#addButton");

// Assign a variable name to the div wrapping the 'Add an expense' popup
let popUpWrap = document.getElementById("#popUpWrap");

// Assign a click event listener, to the 'Add' button, that calls a function to handle the click
addButton.addEventListener("click", handleAddButtonClick);

// When the 'Add' button is clicked, XXX
function handleAddButtonClick() {
  console.log("You clicked the add button");
}
