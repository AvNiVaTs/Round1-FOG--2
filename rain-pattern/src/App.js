import React, { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const rows = 20; // Number of rows
  const cols = 15; // Number of columns

  // Create the grid (rows x cols) and initialize with zeros
  const createEmptyGrid = () =>
    Array.from({ length: rows }, () => Array(cols).fill(0));

  const [grid, setGrid] = useState(createEmptyGrid);

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((prevGrid) => {
        const newGrid = createEmptyGrid();

        // Loop through each column
        for (let col = 0; col < cols; col++) {
          // Loop through each row in reverse (from bottom to top)
          for (let row = rows - 1; row >= 0; row--) {
            if (prevGrid[row][col] > 0) {
              // Move the drop down one row and fade the trail
              newGrid[row][col] = prevGrid[row][col] - 5;
              if (row + 1 < rows) {
                newGrid[row + 1][col] = 10; // Move the drop to the next row
              }
            }
          }

          // Randomly add a new drop at the top of the column
          if (3*Math.random() > 2.97) {
            newGrid[0][col] = 10; // Add a new drop at the top row
          }
        }

        return newGrid;
      });
    }, 100); // Update every 100ms for smooth animation

    return () => clearInterval(interval);
  }, [cols, rows]);

  return (
    <div className="app">
      <h1>Falling Drops Animation</h1>
      <div className="grid">
        {grid.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              className="cell"
              style={{
                backgroundColor: `rgba(255, 0, 255, ${cell / 10})`, // Intensity-based color
              }}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default App;
