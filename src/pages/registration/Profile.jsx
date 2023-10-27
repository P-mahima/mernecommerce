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


            
<div className="dropdown">
              <label className="nav-logo ">
                <img className="profilelogo" src= 'https://cdn-icons-png.flaticon.com/128/9131/9131529.png' alt=""></img>
              </label>
              <div className="dropdown-content">

                <div>

                 <button className="registerme" > Hi {name}</button>
                </div>

                <div>
                <button><NavLink to="/login" onClick={handleLogout}  className="registerlog" >Logout</NavLink>  </button>
                </div>

              </div>
            </div>
        
          </div>
        )
      }
      else{
        return(

          <div className="dropdown">
              <label className="nav-logo ">
                <img className="profilelogo" src= 'https://cdn-icons-png.flaticon.com/128/9131/9131529.png' alt=""></img>
              </label>
              <div className="dropdown-content">

                <div>

                <button><NavLink to="/register" className="register" >Register</NavLink></button>
                </div>

                <div>
                <button><NavLink to="/login" className="register">Login</NavLink></button>
                </div>

              </div>
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