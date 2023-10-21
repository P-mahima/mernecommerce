import React, { useState } from "react";
import './Profile.css'
import { NavLink } from "react-router-dom";
import { toast } from "react-toastify";

const Profile = () => {
  const name = localStorage.getItem("name");
  const [show, setShow] = useState(localStorage.getItem("loggedIn"));

  // console.log(show);

  const handleLogout = () => {
    localStorage.clear();
    setShow(!show);
    toast.info("Logout successfully", { position: toast.POSITION.TOP_RIGHT });
  };

  const RenderProfile = () => {
    if(show){
        return (
          <div className="registerdemo"  >
          
             <button className="registerme" > Hi {name}</button>

              <button><NavLink to="/login" onClick={handleLogout}  className="registerlog" >Logout</NavLink>  </button>
     
      
          </div>
        )
      }
      else{
        return(
          <div>
            <ul className="registerfirst">
            <li><NavLink to="/register" className="register" >Register</NavLink></li>
            <li><NavLink to="/login" className="register">Login</NavLink></li>
            </ul>
          </div>
        )
      }
  
  }

  return (
    <>
      <RenderProfile />
    </>
  );
};

export default Profile;