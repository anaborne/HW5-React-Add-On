import React from 'react';
import IndicatorBar from './IndicatorBar';
import './IndicatorBox.css';

const IndicatorBox =  () => {
    return (
        <div className="indicator-box">
            <IndicatorBar label="AQI" value={25} max={100} color="#4ade80" />
            <IndicatorBar label="UV" value={3} max={10} color="#fde047" />
            <IndicatorBar label="Humidity" value={70} max={100} color="#60a5fa" />
            <IndicatorBar label="Temp" value={72} min = {68} max={78} color="#f87171" />
        </div>
    );
};

export default IndicatorBox;
