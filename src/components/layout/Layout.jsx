import React from 'react'
import NavBar from '../navbar/Navbar'
import Footer from '../footer/Footer'

const Layout = ({children}) => {
  // console.log('layout')
  return (
    <div>
      <NavBar/>
      <div className="content">
        {children}
      </div>
      {/* <Footer/> */}
    </div>
  )
}

export default Layout

//in your project some compnent are fixed like navbar, footer which are shown in every page so that we cannot import it every file so that we are using layout.
