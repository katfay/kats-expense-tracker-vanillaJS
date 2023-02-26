/* Commenting out Express functions until vanilla JS functionality built */

/*
const express = require("express"); /* Imports express module into index.js */

/*
require("dotenv").config();
*/

/* console.log(process.env.DB_HOST); Remove this after you have tested it is working*/

console.log("node started");
console.log("js is working");

let addButton = document.getElementById("#addButton");

addButton.addEventListener("click", handleAddButtonClick);

function handleAddButtonClick() {
  alert("You clicked the add button");
}
