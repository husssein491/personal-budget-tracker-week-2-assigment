// SpendWise Week 6: Interactive Budget Tracker

// Store the monthly budget
let monthlyBudget = 20000;

// Store multiple expenses in an array
let expenses = [];

// Get HTML elements
const expenseForm = document.getElementById("expense-form");
const expenseNameInput = document.getElementById("expense-name");
const expenseAmountInput = document.getElementById("expense-amount");
const expenseCategoryInput = document.getElementById("expense-category");
const expenseList = document.getElementById("expense-list");
const totalExpensesDisplay = document.getElementById("total-expenses");
const remainingBalanceDisplay = document.getElementById("remaining-balance");
const budgetMessage = document.getElementById("budget-message");

// Function to calculate total expenses using a loop
function calculateTotal() {
    let total = 0;

    for (let i = 0; i < expenses.length; i++) {
        total += expenses[i].amount;
    }

    return total;
}

// Function to update the dashboard
function updateDashboard() {
    let total = calculateTotal();
    let balance = monthlyBudget - total;

    totalExpensesDisplay.textContent =
        "Total Expenses: KSh " + total.toLocaleString("en-KE");

    remainingBalanceDisplay.textContent =
        "Remaining Balance: KSh " + balance.toLocaleString("en-KE");

    // Use conditionals to check the budget
    if (balance < 0) {
        budgetMessage.textContent = "Warning: You have exceeded your budget!";
    } else if (balance === 0) {
        budgetMessage.textContent = "You have used your entire budget.";
    } else {
        budgetMessage.textContent = "You are within your budget. Keep it up!";
    }

    // Display all expense records on the webpage
    expenseList.replaceChildren();

    if (expenses.length === 0) {
        expenseList.textContent = "No expenses added yet.";
    } else {
        for (let i = 0; i < expenses.length; i++) {
            const expenseRow = document.createElement("div");
            expenseRow.className = "activity-row";

            const expenseDetails = document.createElement("span");
            expenseDetails.textContent =
                expenses[i].name + " (" + expenses[i].category + ")";

            const expenseAmount = document.createElement("strong");
            expenseAmount.textContent =
                "KSh " + expenses[i].amount.toLocaleString("en-KE");

            expenseRow.append(expenseDetails, expenseAmount);
            expenseList.appendChild(expenseRow);
        }
    }

    // Show results in the browser console too
    console.log("Total Expenses: KSh " + total);
    console.log("Remaining Balance: KSh " + balance);
}

// Handle the form submission
expenseForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = expenseNameInput.value.trim();
    const amount = Number(expenseAmountInput.value);
    const category = expenseCategoryInput.value;

    // Validate the user's input
    if (name === "" || !Number.isFinite(amount) || amount <= 0 || category === "") {
        budgetMessage.textContent = "Please enter a valid name, amount, and category.";
        return;
    }

    // Add the new expense to the array
    expenses.push({
        name: name,
        amount: amount,
        category: category
    });

    // Update the webpage
    updateDashboard();

    // Clear the form
    expenseForm.reset();
});

// Display the initial dashboard
updateDashboard();