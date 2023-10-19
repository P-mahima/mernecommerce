import React from 'react'
import './Footer.css'
// import Phone from '.././../Images/email(1).png'
// import email from '.././../Images/email(2).png'
import { useNavigate } from 'react-router-dom'


const HomeFooter = () => {
    const Nav = useNavigate()
    return (
        <div className='Footer'>

            <div className='Footer-first-div'>
                <div className='footerReact'>

                {/* <img className='footer-react-image1' src='' alt='Loading'></img> */}
               <h1 className='head-footer'>Shop Cart💕</h1>
                </div>
                <h4 className='react-info'>shopcart@gmail.com </h4>
                {/* <div className='footer-facebook'> */}
                {/* <img className='facebook' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNHUhqvVCl2yxxleQgzb_scOuWSzASH9Ymp7gBZX44rLhuuLChgT-sYhgSdqV0WCBB3P4&usqp=CAU' alt='Loading'></img> */}
                {/* <img className='facebook'  src='https://static-00.iconduck.com/assets.00/instagram-logo-icon-512x512-155lpz3w.png' alt='Loading'></img> */}
                {/* <img className='facebook' src='https://assets.stickpng.com/images/5a4e2ef62da5ad73df7efe6e.png' alt='Loading'></img> */}
               
                {/* </div> */}
            </div>

            <div className='navigate'>
                <h1 className='servicee'>Services</h1>
                <button className='serviceItem' onClick={()=> Nav('/mobile')}><h3>Mobile</h3></button>
                <button className='serviceItem' onClick={()=> Nav('/tv')}><h3>TV</h3></button>
                <button className='serviceItem' onClick={()=> Nav('/menfashion')}><h3>Men</h3></button>
                <button className='serviceItem' onClick={()=> Nav('/womenfashion')}><h3>Women</h3></button>
                {/* <button className='service' onClick={()=> Nav('/Food')}><h3>F</h3></button> */}
                
                
            </div>

            <div>
                <h1 className='servicee'>Resources</h1>
                <h3  className='serviceItem' >Blog</h3>
                <h3  className='serviceItem' >Help Centre</h3>
                <h3  className='serviceItem' >Careers</h3>
                <h3  className='serviceItem' >Contact Us</h3>
            </div>

            <div>
                <h1 className='servicee'>Social</h1>
                <h3  className='serviceItem' >facebook</h3>
                <h3  className='serviceItem' >twitter</h3>
                <h3  className='serviceItem' >YouTube</h3>
                <h3  className='serviceItem'>Instagram</h3>
             
            </div>

            {/* <div> */}
                {/* <h1 className='servicee'>Ready to get Admission?</h1>
                <div className='Demo'>
                <button className='book'>Book a Demo Classes</button>
                <div className='footer-phone'>
                    <img className='footer-react-image3' src='' alt='Loading'></img>
                    <h3>+91-8367453688</h3>
                </div>
                <div className='footer-phone'>
                    <img className='footer-react-image3' src='' alt='Loading'></img>
                    <h3>easupport@gmail.com</h3>
                </div>
                </div>
            </div> */}



        </div>
    )
}

export default HomeFooter