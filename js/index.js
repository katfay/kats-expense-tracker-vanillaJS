// Check index.js is connected to index.html
console.log("js is working");

// Show the 'Add' button when the 'Add Expense' button is clicked
function showAddButton() {
  /* Check the function has been called */
  console.log("show Add button has been called");

  /* Assign a variable within this function scope to the 'Add' button wrapper */
  let addButtonWrap = document.getElementById("addButtonWrap");

  /* Change the CSS display setting to show the 'Add' button on the dashboard */
  addButtonWrap.style.display = "flex";
}

/* Hide the Add an Expenses popup on the dashboard when the 'Add Expense' button is clicked */
function hidePopUp() {
  /* Assign a variable name to the div wrapping the 'Add an expense' popup within this scope */
  let popUpWrap = document.getElementById("popUpWrap");

  /* Change the CSS display setting to hide the pop up on the dashboard */
  popUpWrap.style.display = "none";

  showAddButton();
}

/* Prevent the 'Add expense' submit button from reloading the page */
function handleAddExpenseButtonClick(event) {
  event.preventDefault();
  console.log("You clicked the 'Add expense' button");

  /* Call a function to hide the 'Add an expense' popup */
  hidePopUp();
}

/* Show the Add an Expenses popup on the dashboard when the 'Add' button is clicked */
function showPopUp() {
  /* Assign a variable name to the div wrapping the 'Add an expense' popup */
  let popUpWrap = document.getElementById("popUpWrap");

  /* Change the CSS display setting to show the pop up on the dashboard */
  popUpWrap.style.display = "flex";
}

// Hide the 'Add' button when it is clicked
function handleAddButtonClick() {
  /* Check the function has been called */
  console.log("You clicked the add button");

  /* Assign a variable to the 'Add' button wrapper */
  let addButtonWrap = document.getElementById("addButtonWrap");

  /* Change the CSS display setting to show the pop up on the dashboard */
  addButtonWrap.style.display = "none";

  // Call a function to show the popUp wrapper
  showPopUp();
}

/* Assign a variable name to the 'Add' button on the dashboard */
let addButton = document.getElementById("addButton");

/* Assign a click event listener, to the 'Add' button, that calls a function to handle the click */
addButton.addEventListener("click", handleAddButtonClick);

/* Assign a click event listener to the 'Add Expense' button inside the popup */
let addExpenseButton = document.getElementById("addExpense");

/* Assign a submit event listener, to the 'Add Expense' button, that calls a function to handle the click */
addExpenseButton.addEventListener("click", hidePopUp);

document.getElementById("showButton").addEventListener("click", showExpenses);

/*function prettifyExpenses(data) {

  });
}
*/

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
  let expenseElement = document.getElementById("expenseTypes");
  let expenseHTML = `<div>`;
  data.forEach(function (expenseItem) {
    expenseHTML = expenseHTML + `<div>${expenseItem.expense}</div>`;
  });
  expenseHTML = expenseHTML + `</div>`;
  expenseElement.innerHTML = expenseHTML;
  console.log(expenseHTML);
}

function showExpenses() {
  fetch("http://localhost:3000/expense/list")
    .then((res) => res.json())
    .then((data) => {
      console.table(data);
      console.log(data);
      showAllExpenseTypes(data);
      showAllExpenseAmounts(data);
      showAllExpenseDates(data);
      showAllExpenseNotes(data);
    });
}
