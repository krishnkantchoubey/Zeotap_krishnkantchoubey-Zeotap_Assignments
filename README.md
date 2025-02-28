<h1>📝 Assignment 1:</h1>
Web Application Mimicking Google Sheets
🎯 Objective
The goal of this project is to develop a web application that closely resembles Google Sheets, focusing on its user interface and core functionalities, such as data entry, mathematical operations, data validation, and UI interactions.

🚀 Features
📊 Spreadsheet Interface
✔ Google Sheets-like UI – Implements a familiar spreadsheet layout with a toolbar, formula bar, and structured cells.
✔ Drag & Drop Support – Enables moving formulas, cell content, and selections dynamically.
✔ Cell Dependencies – Automatically updates formulas when referenced cell values change.
✔ Cell Formatting – Supports bold, italics, font size, and color formatting.
✔ Row & Column Management – Allows adding, deleting, and resizing rows and columns.

🔢 Mathematical Functions
Supports essential spreadsheet functions:
✅ SUM(range) – Returns the sum of selected cells.
✅ AVERAGE(range) – Calculates the average of selected cells.
✅ MAX(range) – Finds the maximum value in a range.
✅ MIN(range) – Finds the minimum value in a range.
✅ COUNT(range) – Counts numerical values in a range.

🛠 Data Quality Functions
Ensures data consistency with:
✔ TRIM(text) – Removes leading/trailing spaces.
✔ UPPER(text) – Converts text to uppercase.
✔ LOWER(text) – Converts text to lowercase.
✔ REMOVE_DUPLICATES(range) – Eliminates duplicate rows.
✔ FIND_AND_REPLACE(find, replace, range) – Finds and replaces text within a range.

🖊 Data Entry & Validation
✔ Supports various data types (numbers, text, dates).
✔ Implements basic data validation (e.g., restricting numeric cells to numbers only).

🎁 Bonus Features
💡 Advanced functions (e.g., additional mathematical & data validation formulas).
💡 Relative & absolute cell references for formula handling.
💡 Save & load spreadsheets functionality.
💡 Data visualization using charts & graphs.

📌 Evaluation Criteria
UI Fidelity – How closely the UI mimics Google Sheets.
Functionality – Accuracy and completeness of implemented features.
Usability – User-friendly, intuitive design.
Code Quality – Clean, maintainable, and scalable code.
Bonus Features – Additional enhancements for a better user experience.
🏗 Tech Stack & Data Structures
Frontend: HTML, CSS, JavaScript (React.js)
Backend (Optional): Node.js with Express
Data Storage: Local Storage / IndexedDB (for saving spreadsheets)
Data Structures Used:
2D Arrays – For storing spreadsheet data.
HashMaps – For optimized cell referencing.
