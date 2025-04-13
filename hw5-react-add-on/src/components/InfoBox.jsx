import React from 'react';
import './InfoBox.css';

const InfoBox = ({icon, title, value, visual, description}) => {
    return (
        <div className="info-box">
            <div className="info-icon-title-row">
                <div className="info-icon">{icon}</div>
                <div className="info-title">{title}</div>
            </div>
            <div className="info-value">{value}</div>
            <div className="info-visual">{visual}</div>
            <div className="info-description">{description}</div>
        </div>
    );
};

export default InfoBox;