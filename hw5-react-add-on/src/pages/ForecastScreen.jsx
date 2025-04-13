import React from 'react';
import { useState } from 'react'
import './ForecastScreen.css';
import sunny from '../assets/sunny-sky.jpg';
import rainy from '../assets/rainy.jpg';
import cloudy from '../assets/cloudy.jpg';
import ForecastBox from '../components/ForecastBox.jsx';

function ForecastScreen() {
    const [count, setCount] = useState(0)
  
    return (
      <div className="Forecast Screen">
        <div className="phone-screen">
          <div className="header">
            7-Day Forecast
          </div>
          <ForecastBox day="Today" weather="Sunny" high={72} low={65} image={sunny}/>
          <ForecastBox day="Wednesday" weather="Rainy" high={64} low={50} image={rainy}/>
          <ForecastBox day="Thursday" weather="Cloudy" high={68} low={59} image={cloudy}/>
          <ForecastBox day="Friday" weather="Sunny" high={76} low={70} image={sunny}/>
          <ForecastBox day="Saturday" weather="Cloudy" high={68} low={47} image={cloudy}/>
          <ForecastBox day="Sunday" weather="Sunny" high={84} low={73} image={sunny}/>
          <ForecastBox day="Monday" weather="Sunny" high={80} low={64} image={sunny}/>
        </div> 
      </div>
    )
  }
  
  export default ForecastScreen