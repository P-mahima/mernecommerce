import React from 'react'
import './Signup.css'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import imagesignup from './images/images.png'
// import { toast } from 'react-toastify';

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [responseData, setresponseData] = useState(null);
  const navi = useNavigate();

  const HandleName = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const HandleEmail = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const HandlePassword = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const RegisteringUser = async (clientData) => {
    const url = "https://ecommercedataback.onrender.com/route/register";
    const response = await axios.post(url, clientData);
    setresponseData(response.data);

    console.log(response.data);

    if (response.data.token) {
      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", response.data.name);
      localStorage.setItem("email", response.data.email);
      localStorage.setItem("userId", response.data.userId);

      navi("/");
      console.log(responseData);
      // toast.success('register successfully')
    } else {
      window.alert("alrady registed")
      navi("/login");
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      name: name,
      email: email,
      password: password,
    };
    setName("");
    setEmail("");
    setPassword("");
    RegisteringUser(clientData);
  };
  return (
    <>
      <div className='mainfrommain' >
        <div className='mainform'>
          <div>
            <img className='imagesignin' src={imagesignup} alt="" />
          </div>
          
         <div className='loginformsignup'>  

            <h2 className='labeltextsignup' >Register</h2>

            <div  className="inputBox">
              <label className="tab">Name: </label>
              
              <input
                type="text"
                name="name"
                required="required"
                autoComplete="name"
                value={name}
                onChange={HandleName}
                className='inputbox'
              />
              <i></i>
            </div>


            <div  className="inputBox">

              <label className="tab" >Email: </label>
              <input
                type="email"
                name="email"
                required="required"
                autoComplete="email"
                value={email}
                onChange={HandleEmail}
                className='inputbox'
              />
              <i></i>
            </div>

            <div  className="inputBox" >
              <label  className="tab">Password: </label>

              <input
                type="password"
                name="password"
                required="required"
                value={password}
                autoComplete="password"
                onChange={HandlePassword}
                className='inputbox'
              />
              <i></i>

            </div>

          <div className='flexdisplay'>

         
            <button type="submit" value="submit" onClick={handleSubmit} >
            <Link   className="signupregist">
              Register
            </Link>
              </button>
            


            <button>
            <Link  className="signupregister"  to="/login" >
            Already have Account

            </Link>
            </button>
            </div>
        </div>
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
};


export default Signup
