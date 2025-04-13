import React from 'react';
import { useState } from 'react'
import './HomeScreen.css';
import InfoBox from '../components/InfoBox';
import IndicatorBox from '../components/IndicatorBox';
import background from '../assets/sunny-sky.jpg';

function HomeScreen() {
    const [count, setCount] = useState(0)
  
    return (
      <div className="Home Screen">
        <div style={{ backgroundImage: `url(${background})` }} className="phone-screen">
          <div className = "city">
            Philadelphia
          </div>
  
          <div className = "temperature">
            72°F
          </div>
  
          <div className = "feels-like">
            Feels like 75°F
          </div>
          <IndicatorBox />
          <div className = "info-box-row">
            <InfoBox icon="⛈️" title="PRECIPITATION" value="0in" visual="☀️" description="0% Chance" />
            <InfoBox icon="💨" title="WIND CONDITIONS" value="4mph" description="Direction: NE" />
          </div>
        </div> 
      </div>
    )
  }
  
  export default HomeScreen