Expense Tracker App

Overview
Expense Tracker is a mobile application developed using React Native. It allows users to record their daily expenses by category and visually track their spending habits through a dynamic pie chart. The application offers functionalities like adding, listing, and deleting expenses.

Features
Add expenses with categories such as Food, Clothes, Bills, and Others.
View expenses in a list with options to delete.
Visualize expenses distribution with a pie chart.
Technologies Used
React Native
Expo
React Native Chart Kit for the pie charts
Setup
To run this project, install it locally using npm:

bash
Copy code
npm install
Then, start the project:

bash
Copy code
expo start
Usage
Upon launching the app, you will be greeted with a simple user interface displaying the current expenses and a pie chart.

Add Expense:
Click the "Add Expense" button to open the expense form.
Enter the details for the expense including the name, amount, and category.
Submit the form to see the expense added to your list and reflected in the pie chart.
View Expenses:
Scroll through the list of expenses on the main screen.
Delete Expense:
Each expense item has a 'Delete' button. Press it to remove the expense from the list and update the pie chart accordingly.
Project Structure
App.js: Main application file with state management and layout.
/srcc/add_expense.js: Contains the form to add new expenses.
/srcc/expense_component.js: Manages the display of individual expenses.
/srcc/styles.js: Contains all the styling for the application.
Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

License
MIT

Acknowledgments
Thanks to React Native and Expo for the framework and tools.
Usage of React Native Chart Kit for rendering pie charts.




