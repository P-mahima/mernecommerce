import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './TV.css'
import Layout from '../components/layout/Layout'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import { toast } from 'react-toastify'
import { Store } from '../context/data/MyContext'

const TVCompo = () => {
    const[tv, setTV] = useState([])

    const context = useContext(Store)
    const { mode, product } = context;


    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)


    useEffect(() => {
        axios('https://ecommercedataback.onrender.com/route/finddata')
        .then((res) =>setTV(res.data.result))
    })
    // console.log(mobile)


    const addCart = (product) => {
        dispatch(addToCart(product))
        toast.success('Product added successfully',{
            position: "bottom-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
          })
    }
    
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])









  return (
    <Layout>
                <h1 className='heading'>TV</h1>
          <div className='cartBox'>
                {tv && tv.filter((item) => item.category === 'TV').map((cat) => {
                    return (
                        <div className='cartItem'>
                            <img className='TVImage' src={cat.image} alt="Loading" />

                            <div className='order'>
                                <Link to={`/NextPage/${cat.title}`} state={cat}>
                                <h2 className='headingTwo'>{cat.title}</h2>
                                </Link>
                                <h3 className='price'>₹ {cat.price}</h3>
                                <button className='addtocart'>Add to Cart</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <br></br>
            <br></br>

            <div className="flex flex-wrap -m-4">
                    { product && product.map((item) => {
                        // const { title, price, description, imageUrl } = item;
                        return (
                            <button onClick={() => addCart(item)} type='button' className='addtocart'>Add to Cart</button>
                        )
                    })}
                </div>
            
            
            </Layout>
  )
}

export default TVCompo