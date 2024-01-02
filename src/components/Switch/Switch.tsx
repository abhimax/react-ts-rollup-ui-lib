import React, { useState } from 'react';
import ToggleProps from './Switch.d';
import './switch.scss'; // Assuming you have a separate CSS file

// interface ToggleProps {
//     option1: string;
//     option2: string;
//     width: string;
// }

const Toggle: React.FC<ToggleProps> = ({ option1, option2, width }) => {
    const [isActive, setIsActive] = useState(true); // true for option1, false for option2

    const toggleOption = () => {
        setIsActive(!isActive);
    };

    const containerStyle = {
        width,
        // additional container styling
    };

    const buttonStyle = {
        width: `calc(${width} / 2)`, // each button is half the width of the container
        // additional button styling
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
            <div className={`toggle-indicator ${isActive ? 'left' : 'right'}`} style={buttonStyle}></div>
        </div>
    );
};

export default Toggle;
