import React from 'react'
import { Link } from 'react-router-dom';  
import './Set.css'
import Sidebar from './Sidebar';
import Header from './header';

export const Success = () => {
  return (
    <div className="scontainer">
      <Sidebar/>
    
    <div className="smain-side">
      <Header/>
        <div className="swhite-box">
          <div className="black">
          <img src={require("../components/images/success.jpg")} alt="Option 2" style={{
            width: 180,
            height: 180,
            backgroundposition: "center",
            }} /> 
            <h4> The Updation is Successfully send to Admin...</h4>
            <Link  to="/dashboard" ><button className='sblack' style={{
               backgroundcolor:"black", width: 110, height: 40,
            }}>Ok</button></Link> 
          </div>
          
        </div>
        
    </div>
  </div>
  )
}
export default Success;
