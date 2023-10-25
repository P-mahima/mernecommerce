import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

import SearchForm from "../../filter/SearchForm";
import Profile from "../../pages/registration/Profile";





function NavBar() {
  
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);




  return (
    <div>
      <div className="navbarTop">
        <div>
          <NavLink exact to="/" className="nav-logo">
            <span>Shop Cart</span>
          </NavLink>

        </div>

        <div className="searchbar">
          <SearchForm />
        </div>

        <div className="navCart">

          <Profile />
        </div>

      </div>
      <div className="navbar" >



        <div className="nav-container">



          <div className={click ? "nav-menu active" : "nav-menu"}>


            <div className="nav-item">
              <NavLink
                exact
                to="/mobile"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Mobile
              </NavLink>
            </div>



            {/* <div className="nav-item">
              <NavLink
                exact
                to="/tv"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                TV
              </NavLink>
            </div> */}



            <div className="dropdown">
              <label className="nav-item ">Fashion</label>
              <div className="dropdown-content">

                <div className="nav-item">
                  <NavLink
                    exact
                    to="/menfashion"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Men
                  </NavLink>
                </div>


                <div className="nav-item">
                  <NavLink
                    exact
                    to="/womenfashion"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Women
                  </NavLink>
                </div>




              </div>
            </div>


            <div className="dropdown">
              <label className="nav-item ">Home</label>
              <div className="dropdown-content">

                <div className="nav-item">
                  <NavLink
                    exact
                    to="/homedecor"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Home Decor
                  </NavLink>
                </div>


                <div className="nav-item">
                  <NavLink
                    exact
                    to="/homebed"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Home Bed
                  </NavLink>
                </div>

                <div className="nav-item">
                  <NavLink
                    exact
                    to="/homelight"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Home Light
                  </NavLink>
                </div>

                <div className="nav-item">
                  <NavLink
                    exact
                    to="/homesofa"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Home Sofa
                  </NavLink>
                </div>


                <div className="nav-item">
                  <NavLink
                    exact
                    to="/homecurtains"
                    activeClassName="active"
                    className="nav-links"
                    onClick={handleClick}
                  >
                    Home Curtains
                  </NavLink>
                </div>





              </div>
            </div>

            {/* {isAuthenticated ?
              (<div>{<button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                Log Out
              </button>
              }</div>) :
              (<div>{<button onClick={() => loginWithRedirect()}>Log In</button>}</div>)
            } */}











            <div className="navCart">
              <NavLink
                exact
                to="/cart"
                activeClassName="active"
                className="nav-links"
                onClick={handleClick}
              >
                Cart
                {/* <img src="https://cdn-icons-png.flaticon.com/128/815/815383.png" alt="" /> */}
              </NavLink>
            </div>



          </div>


































          <div className="nav-icon" onClick={handleClick}>
            {/* <i className={click ? "fas fa-times" : "fas fa-bars"}></i> */}

            {click ? (
              <span className="icon">
                <img src=" https://cdn-icons-png.flaticon.com/128/3161/3161830.png" alt="" /> {" "}
              </span>
            ) : (
              <span className="icon">
                <img src="https://cdn-icons-png.flaticon.com/128/4204/4204600.png " />
              </span>
            )}
          </div>




        </div>
      </div>
      <br>
      </br>
    </div>

  );
}

export default NavBar;

{/* https://cdn-icons-png.flaticon.com/128/3161/3161830.png */ }
{/* "https://cdn-icons-png.flaticon.com/128/4204/4204600.png */ }







































































































































