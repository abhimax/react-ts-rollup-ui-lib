import React, { useState } from 'react';
import ToggleProps from './Switch.d';
import './switch.scss';

const Toggle: React.FC<ToggleProps> = ({ option1, option2, width }) => {
    const [isActive, setIsActive] = useState(true);
    const containerStyle = {
        width,
    };

    const buttonStyle = {
        width: `calc(${width} / 2)`,
    };

    return (
        <div className="toggle-container" style={containerStyle}>
            <div 
                className={`toggle-option ${isActive ? 'active' : ''}`} 
                style={buttonStyle} 
                onClick={() => setIsActive(true)}>
                {option1}
            </div>
            <div 
                className={`toggle-option ${!isActive ? 'active' : ''}`} 
                style={buttonStyle} 
                onClick={() => setIsActive(false)}>
                {option2}
            </div>
        </div>
    );
};

export default Toggle;
