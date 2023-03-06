// This version works
// First off, check index.js is connected to index.html
console.log("js is working");

// CUSTOM FUNCTIONS

function showAllExpenseNotes(data) {
  let notesElement = document.getElementById("expenseNotes");
  let notesHTML = `<div>`;
  data.forEach(function (expenseItem) {
    notesHTML = notesHTML + `<div>${expenseItem.notes}</div>`;
  });
  notesHTML = notesHTML + `</div>`;
  notesElement.innerHTML = notesHTML;
  console.log(notesHTML);
}

function showAllExpenseDates(data) {
  let dateElement = document.getElementById("expenseDates");
  let dateHTML = `<div>`;
  data.forEach(function (expenseItem) {
    dateHTML = dateHTML + `<div>${expenseItem.date}</div>`;
  });
  dateHTML = dateHTML + `</div>`;
  dateElement.innerHTML = dateHTML;
  console.log(dateHTML);
}

function showAllExpenseAmounts(data) {
  let amountElement = document.getElementById("expenseAmounts");
  let amountHTML = `<div>`;
  data.forEach(function (amountItem) {
    amountHTML = amountHTML + `<div>${amountItem.amount}</div>`;
  });
  amountHTML = amountHTML + `</div>`;
  amountElement.innerHTML = amountHTML;
  console.log(amountHTML);
}

function showAllExpenseTypes(data) {
  // Assign a variable to the empty 'Expense type' column in the 'Spending dashboard'
  let expenseElement = document.getElementById("expenseTypes");
  //  Assign a variable to a new object that contains only the opening tag of an HTML div
  let expenseHTML = `<div>`;
  // Loop through each of the user's exenses. These are the array items in the data object
  data.forEach(function (expenseItem) {
    //  Prepare to show each  expense (type) in newly created divs. Update the variable for the new div object so that during each loops, the existing object remains, but a new div is appended to show the expense (type) from the user's expense (array item) that is currently being looped through. The expense (type) value will show inside the newly appended div.
    expenseHTML = expenseHTML + `<div>${expenseItem.expense}</div>`;
  });
  // Add a closing div tag to the end of the newly created div that contains all the individual loops' expense values.
  expenseHTML = expenseHTML + `</div>`;
  // Put all the expense values into the frontend, by putting in the newly created and updated object.
  expenseElement.innerHTML = expenseHTML;
  // Print that object on the console for debugging.
  // console.log(expenseHTML);
}

// Retrieve the user's expenses from the database
function retrieveExpenses() {
  // Fetch the file containing the user's responses to the 'Add an expense' form. This is first retrieved from the cloud database and then hosted on a local server as an API, using a middleware function.
  fetch("http://localhost:5000/expense/list")
    // Convert the fetched response to a JSON format.
    .then((res) => res.json())
    // Pass this JSON response through my custom function
    .then((data) => {
      console.log(data);
      // See the user's expenses in JSON format in a table in the console so I can debug
      console.table(data);
      // Call custom functions that will put the user's responses about expense types, $$, amounts and notes into the frontend (in the 'Spending dashboard')
      showAllExpenseTypes(data);
      showAllExpenseAmounts(data);
      showAllExpenseDates(data);
      showAllExpenseNotes(data);
    });
}

// Show the 'Add' button on the main dashboard after the user clicks the 'Add Expense' button in the 'Add an expense' popup
function showAddButton() {
  // Check the function has been called
  // console.log("show Add button has been called");
  // Assign a variable within this function scope to the 'Add' button wrapper
  let addButtonWrap = document.getElementById("addButtonWrap");
  //  Change the CSS display setting to show the 'Add' button on the dashboard
  addButtonWrap.style.display = "flex";
}

//  Hide the 'Add an Expense' popup on the dashboard when the 'Add Expense' button is clicked
function hidePopUp() {
  // Assign a variable name to the div wrapping the 'Add an expense' popup
  let popUpWrap = document.getElementById("popUpWrap");
  // Hide the popup by changing its wrapper's CSS display setting
  popUpWrap.style.display = "none";
  showAddButton();
}

// Show the 'Add an Expense' popup on the dashboard when the 'Add' button is clicked
function showPopUp() {
  // Assign a variable name to the div wrapping the 'Add an expense' popup
  let popUpWrap = document.getElementById("popUpWrap");
  // Show the popup by changing its wrapper's CSS display setting
  popUpWrap.style.display = "flex";
}

// Hide the 'Add' button when it is clicked
function handleAddButtonClick() {
  // Check the function has been called
  // console.log("You clicked the add button");
  // Assign a variable to the 'Add' button wrapper
  let addButtonWrap = document.getElementById("addButtonWrap");
  // Hide the 'Add' button by changing its wrapper's CSS display setting
  addButtonWrap.style.display = "none";
  // Call a function to show the popUp wrapper
  showPopUp();
}

// LISTENERS ON THE HOME PAGE

// Set the 'Add' button (on the main dashboard) to call a function when it is clicked
let addButton = document.getElementById("addButton");
addButton.addEventListener("click", handleAddButtonClick);

// Set the 'Add Expense' button (inside the 'Add Expense' popup) to call a function when it is clicked
let addExpenseButton = document.getElementById("addExpense");
addExpenseButton.addEventListener("click", hidePopUp);

//  Set the 'Show my spending' button (on the main dashboard) to call a function when it is clicked
document
  .getElementById("showButton")
  .addEventListener("click", retrieveExpenses);
