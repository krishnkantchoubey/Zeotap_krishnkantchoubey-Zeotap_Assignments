import React, { useState } from "react";
import {
  Container,
  Paper,
  TextField,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
  Tooltip,
} from "@mui/material";

// Constants
const rows = 10;
const cols = 5;

// Create an empty grid
const createGrid = () => {
  return Array.from({ length: rows }, () =>
    Array.from({ length: cols }, () => ({ value: "", formula: "" }))
  );
};

// Evaluate formulas
const evaluateFormula = (formula, grid) => {
  if (formula.startsWith("=")) {
    const expression = formula.slice(1);
    const [func, range] = expression.split("(");
    const [start, end] = range.replace(")", "").split(":");

    const [startCol, startRow] = [start.charCodeAt(0) - 65, parseInt(start.slice(1)) - 1];
    const [endCol, endRow] = [end.charCodeAt(0) - 65, parseInt(end.slice(1)) - 1];

    const values = [];
    for (let row = startRow; row <= endRow; row++) {
      for (let col = startCol; col <= endCol; col++) {
        const cellValue = parseFloat(grid[row][col].value);
        if (!isNaN(cellValue)) values.push(cellValue);
      }
    }

    switch (func.toUpperCase()) {
      case "SUM":
        return values.reduce((acc, val) => acc + val, 0);
      case "AVERAGE":
        return values.reduce((acc, val) => acc + val, 0) / values.length;
      case "MAX":
        return Math.max(...values);
      case "MIN":
        return Math.min(...values);
      case "COUNT":
        return values.length;
      default:
        return "Invalid Function";
    }
  }
  return formula;
};

// Apply data quality functions
const applyDataQualityFunction = (func, value) => {
  switch (func) {
    case "TRIM":
      return value.trim();
    case "UPPER":
      return value.toUpperCase();
    case "LOWER":
      return value.toLowerCase();
    default:
      return value;
  }
};

// Main App Component
function App() {
  const [grid, setGrid] = useState(createGrid());
  const [formulaBarValue, setFormulaBarValue] = useState("");

  // Handle cell changes
  const handleCellChange = (row, col, value) => {
    const newGrid = [...grid];
    if (value.startsWith("=")) {
      newGrid[row][col].formula = value;
      newGrid[row][col].value = evaluateFormula(value, newGrid);
    } else {
      newGrid[row][col].value = applyDataQualityFunction("TRIM", value);
    }
    setGrid(newGrid);
    setFormulaBarValue(value);
  };

  // Save spreadsheet to localStorage
  const saveSpreadsheet = () => {
    localStorage.setItem("spreadsheet", JSON.stringify(grid));
    alert("Spreadsheet saved!");
  };

  // Load spreadsheet from localStorage
  const loadSpreadsheet = () => {
    const savedGrid = JSON.parse(localStorage.getItem("spreadsheet"));
    if (savedGrid) {
      setGrid(savedGrid);
      alert("Spreadsheet loaded!");
    } else {
      alert("No saved spreadsheet found.");
    }
  };

  return (
    <Container>
      <h1>Google Sheets Clone</h1>
      <Tooltip title="Save your spreadsheet">
        <Button variant="contained" onClick={saveSpreadsheet} style={{ marginRight: 10 }}>
          Save
        </Button>
      </Tooltip>
      <Tooltip title="Load your spreadsheet">
        <Button variant="contained" onClick={loadSpreadsheet}>
          Load
        </Button>
      </Tooltip>
      <TextField
        label="Formula Bar"
        value={formulaBarValue}
        onChange={(e) => setFormulaBarValue(e.target.value)}
        fullWidth
        style={{ margin: "20px 0" }}
      />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              {Array.from({ length: cols }, (_, i) => (
                <TableCell key={i}>{String.fromCharCode(65 + i)}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {grid.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {row.map((cell, colIndex) => (
                  <TableCell key={colIndex}>
                    <TextField
                      value={cell.formula ? evaluateFormula(cell.formula, grid) : cell.value}
                      onChange={(e) =>
                        handleCellChange(rowIndex, colIndex, e.target.value)
                      }
                      fullWidth
                    />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default App;