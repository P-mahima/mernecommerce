import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import "./NavBar.css";

import SearchForm from "../../filter/SearchForm";
import Profile from "../../pages/registration/Profile";
import { useDispatch, useSelector } from "react-redux";





function NavBar() {

  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);


  // let cartTotalQuantity = 0

  const  cartItems = useSelector((state) => state.cart);
  // const cartCount =  cartItems.cartTotalQuantity;
  // const dispatch = useDispatch()
  // useEffect(() => {
  //   dispatch({type:"GET_TOTAL"})
  //   console.log('Awosome')
  // },[cartItems])






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
              <label className="nav-item ">HomeDecor</label>
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
                <span className="ml-2 text-lg font-medium text-white-700 group-" >({cartItems.length})</span>
              </NavLink>
            </div>

            {/* <div className="ml-4 flow-root lg:ml-6">
              <Link to={'/cart'} className="group -m-2 flex items-center p-2" >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>

                <span className="ml-2 text-sm font-medium text-gray-700 group-" >({cartItems.length})</span>
                <span className="sr-only">items in cart, view bag</span>
              </Link>
            </div> */}



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







































































































































