import React, { useState } from 'react';
import './Personal.css';
import Sidebar from './Sidebar';
import Header from './header';
import { Link } from 'react-router-dom';

export const Personal = () => {
  const [position, setPosition] = useState('');
  const [otherPosition, setOtherPosition] = useState('');

  const handlePositionChange = (event) => {
    const selectedPosition = event.target.value;
    setPosition(selectedPosition);
    // If "Others" is selected, reset otherPosition state
    if (selectedPosition !== "Others") {
      setOtherPosition('');
    }
  };

  const handleOtherPositionChange = (event) => {
    setOtherPosition(event.target.value);
  };

  return (
    <div className="pcontainer">
      <Sidebar/>
      <div className="pmain-content">
      <Header/>
        <div className="pwhite-box">
          <div className="pcaptain-logo"></div>
          <input type="text" placeholder="Enter email ID" />
          <input type="text" placeholder="Enter your Name" />
          <div className="pdropdown">
            <select value={position} onChange={handlePositionChange}>
              <option value="">Select Your Position</option>
              <option value="Captain">Captain</option>
              <option value="Bridge">Bridge</option>
              <option value="Engine">Engine</option>
              <option value="Logistics">Logistics</option>
              <option value="Safety">Safety</option>
              <option value="Hospitality">Hospitality</option>
              <option value="Others">Others</option>
            </select>
            {/* Display input field for manual input if "Others" is selected */}
            {position === "Others" && (
              <input
                type="text"
                value={otherPosition}
                onChange={handleOtherPositionChange}
                placeholder="Enter your Position"
              style={{width:180,outline: "none",}}
              />
            )}
          </div>
          <div className="pbutton-container">

            <Link to="/Set"><button className="pbutton1">Exit</button></Link>
            <Link to="/Success"><button className="pbutton2">Update</button></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Personal;