// SpendWise Week 5: Budget Foundation

// 1. Variables for budgeting information
let monthlyBudget = 0;
let totalExpenses = 0;

// 2. Collect information from the user
let budgetInput = prompt("Enter your monthly budget in KSh:");
let expensesInput = prompt("Enter your total expenses in KSh:");

// 3. Convert the input into numbers
monthlyBudget = Number(budgetInput);
totalExpenses = Number(expensesInput);

// 4. Function to calculate the remaining balance
function calculateBalance(budget, expenses) {
    return budget - expenses;
}

// 5. Calculate the remaining balance
let remainingBalance = calculateBalance(
    monthlyBudget,
    totalExpenses
);

// 6. Display clearly labelled results
console.log("===== SpendWise Budget Summary =====");
console.log("Monthly Budget: KSh " + monthlyBudget);
console.log("Total Expenses: KSh " + totalExpenses);
console.log("Remaining Balance: KSh " + remainingBalance);