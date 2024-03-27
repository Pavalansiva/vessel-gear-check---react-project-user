import React, { useState, useEffect } from 'react';
import Sidebar from './Sidebar';

const DashboardPage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    require("../components/images/ship.png"),
    require("../components/images/ship1.png")
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prevImage => (prevImage + 1) % images.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="dashboard">
      <Sidebar /> 
      <div className="main-content" style={{ backgroundColor: "#cff4fd", height: "100vh", overflow: "hidden" }}>
        <img src={images[currentImage]} alt="Option 2" style={{ width: "100%", height: "100%", objectFit: "cover" }} /> 
      </div>
    </div>
  );
};

export default DashboardPage;
