import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import image from './images/loginLL.jpg'
import Layout from "../../components/layout/Layout";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [responseData, setResponseData] = useState(null);
  const navi = useNavigate();

  const emailHandler = (event) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const passwordHandler = (event) => {
    event.preventDefault();
    setPassword(event.target.value);
  };

  const loginUser = async (userData) => {
    const api = "https://ecommercedataback.onrender.com/route/login";
    const response = await axios.post(api, userData);
    setResponseData(response.data);

    console.log(response.data);

    if (response.data.token) {
      console.log(responseData);
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("loggedIn", true);
      localStorage.setItem("name", response.data.userData.name);
      localStorage.setItem("userId", response.data.userData._id);

      navi("/");
    } else {
      window.alert("invalide Credential");
      navi("/register");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const userData = {
      email: email,
      password: password,
    };
    setEmail("");
    setPassword("");
    loginUser(userData);
  };

  return (
    <div>
  


        <div className="loginMain" >
      <div>
        <img className="loginimage" src={image} alt="loading" />
      </div>

      <div className="loginform">


            <h2 className='labeltext'>Good to see you again 😊</h2>
       
            <div className="inputBox">
              <span className="tab"  >Email: </span>
              <input
                type="text"
                name="user-name"
                required="required"
                onChange={emailHandler}
                value={email}
              />
              <i></i>
            </div>
            <div className="inputBox">
              <span className="tab" >Password: </span>
              <input
                type="password"
                name="user-password"
                required="required"
                onChange={passwordHandler}
                value={password}
              />
              <i></i>
            </div>

            <div className="buttonflex">

              <Link  className="loginregister" to="/register"  >
            <button >
              {/* <Link to="/forget">Forget Password</Link> */}
                Don't have an account
            </button>
                </Link>

            <button type="submit" value="login" onClick={submitHandler}>
            <Link className="loginregist" to={'/'}>

              Login
            </Link>
            </button>
            </div>
            </div>
     
        </div>
   
   
    </div>
  );
};

export default Login;