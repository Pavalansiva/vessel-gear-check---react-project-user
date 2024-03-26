import React from 'react';
import { Link } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom';
import './styles.css'; // Import CSS file for styling


const sidebar = () => {

  //const navigate = useNavigate();


    //const Next = () => {
        // Add your login logic here
        //alert(`Are you sure to logout`);
        // Redirect to the dashboard after successful login
       // navigate('/VesselProfileNext');
      //};

  return (
    <div className="container">
      <div className="sidebar">
      <div className="sheader">
      <div className="captain-logo"></div>
      <div className="captain-text">Captain</div>
      </div>

      <div className="sidebar-options">
      <Link to="/dashboard" className="option" style={{ borderRadius:40}}> 
            <img src={require("../components/images/Home.png")} alt="Option 2" /> 
            <span>Home</span>
          </Link>
          <Link to="/checklistmain" className="option" style={{ borderRadius:40}}>
            <img src={require("../components/images/opn3.png")} alt="Option 3" /> 
            <span>Checklist</span>
          </Link>
          <Link to={"/Set"} className="option" style={{ borderRadius:40, width: 200,}}>
            <img src={require("../components/images/opn5.png")} alt="Option 5" /> 
            <span>Settings</span>
          </Link>
          <Link to={"/Login"} className="option" style={{ borderRadius:40, width: 200,}}>
            <img src={require("../components/images/sout.png")} alt="Option 5" /> 
            <span>Sign Out</span>
          </Link>
            

      </div>
      
      

      </div>

          </div>
  );
};
export default sidebar;