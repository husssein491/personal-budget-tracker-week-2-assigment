# SpendWise Dashboard — Week 5

## Project Description
SpendWise is a personal budgeting dashboard built using HTML, CSS, and JavaScript. This Week 5 version introduces JavaScript to collect budget information, calculate spending, and display a budget summary in the browser console.

## Features
- Collects the monthly budget using a JavaScript prompt.
- Collects total expenses using a JavaScript prompt.
- Calculates the remaining balance.
- Displays labelled results in the browser console.
- Uses reusable JavaScript functions.
- Maintains the existing SpendWise dashboard design.

## JavaScript Concepts Implemented

### 1. Variables
The variables `monthlyBudget`, `totalExpenses`, `budgetInput`, `expensesInput`, and `remainingBalance` store budgeting information and user input.

### 2. Data Types
The `Number()` function converts the values entered by the user from text into numbers so they can be used in calculations.

### 3. User Input
The `prompt()` function asks the user to enter a monthly budget and total expenses.

### 4. Budget Calculations
The application subtracts total expenses from the monthly budget to calculate the remaining balance.

### 5. Reusable Functions
The `calculateBalance(budget, expenses)` function performs the balance calculation. It can be reused with different budget and expense values.

### 6. Console Output
The `console.log()` function displays the monthly budget, total expenses, and remaining balance with clear labels.

## Project Files
- `index.html` — contains the SpendWise dashboard structure and links to the CSS and JavaScript files.
- `style.css` — styles the dashboard and makes the layout responsive.
- `script.js` — collects user input and performs budget calculations.
- `README.md` — explains the project and its JavaScript concepts.

## How to Run
1. Open `index.html` in a web browser.
2. Enter your monthly budget when prompted.
3. Enter your total expenses when prompted.
4. Right-click the page and select **Inspect**, then open the **Console** tab to view the results.

## Example
If the monthly budget is KSh 20,000 and total expenses are KSh 7,500:

- Monthly Budget: KSh 20,000
- Total Expenses: KSh 7,500
- Remaining Balance: KSh 12,500

## Limitations
This is a beginner JavaScript project. The budget information is entered through prompts and is not saved after the page is refreshed. The application currently displays calculated results in the browser console.

## Technologies Used
HTML5, CSS3, JavaScript, Git, and GitHub.
