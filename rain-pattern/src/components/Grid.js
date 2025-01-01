// src/components/Grid.jsx
import React from "react";
import "./Grid.css";

const Grid = ({ drops }) => {
  return (
    <div className="grid-wrapper">
      <div className="grid-background">
        {/* Render a static grid for the background */}
        {[...Array(20)].map((_, rowIndex) => (
          <div key={rowIndex} className="grid-row">
            {[...Array(15)].map((_, colIndex) => (
              <div key={colIndex} className="grid-cell" />
            ))}
          </div>
        ))}
      </div>

      {/* Render falling drops */}
      {drops.map((drop, index) => (
        <div
          key={index}
          className="drop"
          style={{
            left: `${drop.column * 22}px`, // Adjust based on column width and gap
            top: `${drop.y}px`,
            backgroundColor: drop.color,
          }}
        />
      ))}
    </div>
  );
};

export default Grid;
