import React from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';



const DashboardPage = () => {
  return (
    <div className="dashboard">
      <Sidebar /> 
      <div className="main-content" style={{backgroundcolor:"#cff4fd",}} >
        <img src={require("../components/images/Desktop.png")} alt="Option 2" style={{
          width: 1209,
          height: 665,
          backgroundsize: "cover",
          backgroundposition: "center",
        }} /> 
      </div>
    </div>
    
    
  );
};

export default DashboardPage;