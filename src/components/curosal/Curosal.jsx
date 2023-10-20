
import React from 'react'
import './Owl.css'
import { useContext, useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'
import { Link } from 'react-router-dom'
import { addToCart } from '../../redux/CartSlice';
import { toast } from 'react-toastify';
import Slider from "react-slick";
import { Store } from '../../context/data/MyContext';


const Curosal = () => {
    const[demo, setDemo] = useState('')
    const context = useContext(Store)
    const { mode, product } = context;



    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)

    const settings = {
        dots: true,
        // infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        slidesToShow: 3,
        slidesToScroll: 3
      };


    useEffect(() => {
        axios('https://ecommercedataback.onrender.com/route/data')
        .then((res) =>setDemo(res.data))
        .catch((err) => console.log(err))
    })

    
    const addCart = (product) => {
        dispatch(addToCart(product))
        toast.success('Product added successfully')
    }
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])
  return (
    <div>
          {/* <div class='container-fluid' >      
           <div className="row title" style={{marginBottom: "20px"}} >      
           <div class="col-sm-12 btn btn-info">      
           Owl Carousel In React Application   
           </div>      
           </div>  
       </div>   */}
       <br></br>
       <br></br>
       <div>  
        <div className='headingnewly'>Newly Added</div> 
       <div className='maintitlecursole'>
        {/* <h2> Multiple items </h2> */}
        <span >

        <Slider {...settings}>
        {demo && demo.filter((item) => item.category === 'LatestDemo').map((cat) => {
                    return (
                        <div className='maindiv' >
                            <img className='imgcursole' src={cat.image} alt="Loading" />

                            <div>
                                <Link to={`/NextPage/${cat.title}`} state={cat}>
                                <h2 className='titlecursole'>{cat.title}</h2>
                                </Link>
                                <h3 className='pricecursole' >₹ {cat.price}</h3>
                            </div>
                                {/* <button onClick={() => addCart(cat)}>Add to Cart</button> */}
                        </div>
                    )
                })}
        </Slider>
        
      </span>
      </div> 
       
            
      <div className="flex flex-wrap -m-4">
                    { product && product.map((item) => {
                        // const { title, price, description, imageUrl } = item;
                        return (
                            <button onClick={() => addCart(item)} type='button' className='addtocart'>Add to Cart</button>
                        )
                    })}
                </div>

                
 
      </div> 








      {/* /////////////////////////////// */}

      
    </div>
  )
}


export default Curosal
