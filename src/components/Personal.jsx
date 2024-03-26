import React, { useState } from 'react';
import './Personal.css'
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
              <input type="text" placeholder="Enter email ID" style={{outline: "none",}} />
              
              <input type="text" placeholder="Enter your Name" style={{outline: "none",}} />
              <div className="pdropdown">
              <select value={position} onChange={handlePositionChange}>
                           <option value="">Select Your Position</option>
                           <option value="option1">Captain</option>
                           <option value="option2">Bridge</option>
                           <option value="option3">Engine</option>
                           <option value="option4">Logistics</option>
                           <option value="option5">Safety</option>
                           <option value="option6">Hospitality</option>
                           <option value="option6">Others</option>                       
               </select>
                   {position === "Others" && (
                    <input
                      type="text"
                      value={otherPosition}
                      onChange={handleOtherPositionChange}
                      placeholder="Enter your Position"
                    />
                    )}
              </div>
              <div className="pbutton-container">
              <Link to="/Set"> <button className="pbutton1" >Exit</button> </Link>
                  
                   <button className="pbutton2" >Update</button>
              
              </div>   
                       
            </div>
        </div>
    </div>

  )
}
export default Personal;