# SpendWise — Week 6: Interactive Budget Dashboard

## Project Description

SpendWise is a personal budgeting dashboard built with HTML, CSS, and JavaScript. This version allows users to add expenses, view expense records, calculate total spending, and see their remaining budget directly on the webpage.

## Improvements Made This Week

- Added an interactive expense form.
- Allowed users to enter an expense name, amount, and category.
- Stored multiple expense records in a JavaScript array.
- Calculated total expenses and remaining budget.
- Displayed expense records dynamically on the webpage.
- Added budget feedback messages.
- Improved form, button, and expense-list styling.
- Added responsive styling for smaller screens.

## JavaScript Concepts Implemented

### 1. Conditional Statements

The `if`, `else if`, and `else` statements check the remaining balance and display a suitable message when the user is within budget, has used the entire budget, or has exceeded the budget.

### 2. Arrays

The `expenses` array stores multiple expense objects. Each object contains an expense name, amount, and category.

### 3. Loops

`for` loops process the expense array to calculate total spending and display expense records.

### 4. DOM Manipulation

JavaScript uses `document.getElementById()` to access webpage elements. It updates text with `textContent`, creates elements with `document.createElement()`, and displays expense records using `appendChild()`.

### 5. Event Listeners

An event listener responds when the user submits the expense form. The `event.preventDefault()` method prevents the page from reloading during form submission.

### 6. Functions

The `calculateTotal()` function calculates total spending. The `updateDashboard()` function updates the totals, remaining balance, budget message, and expense list.

### 7. Input Validation

The application checks that the expense name is not empty, the amount is a valid positive number, and a category has been selected.

## How Budget Calculations Work

The application adds all expense amounts to calculate total spending.

Remaining balance = Monthly budget − Total expenses.

The current example uses a monthly budget of KSh 20,000.

## Project Files

- `index.html` — dashboard structure and expense form.
- `style.css` — dashboard styling, interactive form styling, and responsive layout.
- `script.js` — expense data, calculations, conditional statements, loops, DOM updates, and event handling.
- `README.md` — project description and documentation.

## How to Run

1. Open `index.html` in a web browser.
2. Enter an expense name, amount, and category.
3. Click **Add Expense**.
4. View the expense record, total spending, remaining balance, and budget message.

## Testing

Test by adding multiple expenses, checking the updated total, submitting invalid or incomplete information, and adding expenses until the budget is exceeded.

## Challenges and Solutions

- **Challenge:** The dashboard originally displayed static information.
  **Solution:** JavaScript was added to update expense records and totals dynamically.

- **Challenge:** Multiple expenses needed to be managed together.
  **Solution:** An array stores expense records, and loops process them.

- **Challenge:** Invalid input could affect calculations.
  **Solution:** Conditional statements validate expense details before storing them.

## Limitations

Expense records are stored in memory and disappear when the page is refreshed. The monthly budget is currently set to KSh 20,000 in the JavaScript code. Data persistence and user-entered budgets can be added in a future version.

## Technologies Used

HTML5, CSS3, JavaScript, Git, and GitHub.
