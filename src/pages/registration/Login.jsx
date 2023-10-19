import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


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
    const api = "http://localhost:3005/route/login";
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
    <>
      <div>
        <div className="loginMain" >
            <h2  className='labeltext'>Login</h2>
       
            <div >
              <span  className='labeltext'>Email: </span>
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
              <span  className='labeltext'>Password: </span>
              <input
                type="password"
                name="user-password"
                required="required"
                onChange={passwordHandler}
                value={password}
              />
              <i></i>
            </div>
            <div >
              {/* <Link to="/forget">Forget Password</Link> */}
              <Link to="/register"  className='labeltext'>Register</Link>
            </div>
            <button  className='labeltext' type="submit" value="login" onClick={submitHandler}>
              Login
            </button>
     
        </div>
      </div>
   
    </>
  );
};

export default Login;