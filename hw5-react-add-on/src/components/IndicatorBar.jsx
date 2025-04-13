import React from 'react';
import './IndicatorBar.css';

const IndicatorBar = ({ label, value, max, min = 0, color }) => {
    const fillPercentage = ((value - min) / (max - min)) * 100;

  return (
    <div className="indicator-bar">
    <span className="bar-max">{max}</span>
      <div className="bar-container">
        <div
          className="circle-indicator"
          style={{ bottom: `${fillPercentage}%`, backgroundColor: color }}
        ></div>
        <div className="bar-line"></div>
      </div>
      <span className="bar-min">{min}</span>
      <div className="bar-label">{label}</div>
    </div>
  );
};

export default IndicatorBar;