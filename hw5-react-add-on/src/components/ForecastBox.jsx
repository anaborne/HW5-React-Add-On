import React from 'react';
import { useState } from 'react'
import './ForecastBox.css';

const ForecastBox = ({day, weather, high, low, image}) => {
    return (
        <div className="forecast-box" style = {{ backgroundImage: `url(${image})` }}>
            <div  className ="forecast-left">{day}</div>

            <div className="forecast-right">
                <div className="weather">{weather}</div>
                <div className="temp">
                    <span className="high">High: {high}°</span>
                    <span className="low">Low: {low}°</span>
                </div>
            </div>
        </div>
    );
}

export default ForecastBox;