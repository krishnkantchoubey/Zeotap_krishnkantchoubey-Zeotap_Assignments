📝 Assignment 1: Web Application Mimicking Google Sheets
🎯 Objective
The goal of this project is to develop a web application that closely resembles Google Sheets, focusing on its user interface and core functionalities like data entry, mathematical functions, data quality checks, and key UI interactions.

🚀 Features
📊 Spreadsheet Interface
Google Sheets-like UI: Implements a familiar spreadsheet layout, including a toolbar, formula bar, and structured cells.
Drag & Drop: Supports dragging formulas, cell content, and selections like Google Sheets.
Cell Dependencies: Dynamically updates formulas when referenced cell values change.
Cell Formatting: Supports basic formatting like bold, italics, font size, and colors.
Row & Column Management: Allows adding, deleting, and resizing rows and columns.
🔢 Mathematical Functions
Supports essential spreadsheet functions:

SUM(range): Returns the sum of selected cells.
AVERAGE(range): Calculates the average of selected cells.
MAX(range): Finds the maximum value in a range.
MIN(range): Finds the minimum value in a range.
COUNT(range): Counts numerical values in a range.
🛠 Data Quality Functions
Ensures data consistency and cleanliness with:

TRIM(text): Removes leading/trailing spaces.
UPPER(text): Converts text to uppercase.
LOWER(text): Converts text to lowercase.
REMOVE_DUPLICATES(range): Eliminates duplicate rows.
FIND_AND_REPLACE(find, replace, range): Replaces text within a range.
🖊 Data Entry & Validation
Supports various data types (numbers, text, dates).
Implements basic data validation (e.g., restricting numeric cells to numbers only).
🧪 Testing & Debugging
Users can test functions with sample data.
Clearly displays function execution results.
🎁 Bonus Features
More advanced mathematical and data quality functions.
Support for relative & absolute cell references.
Ability to save & load spreadsheets.
Data visualization (charts & graphs).
📌 Evaluation Criteria
UI Fidelity: Closely mimics Google Sheets.
Functionality: Completeness & accuracy of implemented features.
Usability: Intuitive and user-friendly interface.
Code Quality: Clean, maintainable, and scalable code.
Bonus Features: Additional functionalities for a better user experience.
🏗 Tech Stack & Data Structures
Frontend: HTML, CSS, JavaScript
Backend: (Optional) Node.js with Express
Data Storage: Local Storage / IndexedDB (for saving spreadsheets)
Data Structures:
2D Arrays: For storing spreadsheet data.
HashMaps: For optimized cell referencing.
