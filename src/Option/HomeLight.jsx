import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './HomeBed.css'
import Layout from '../components/layout/Layout'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import { toast } from 'react-toastify'
import { Store } from '../context/data/MyContext'

const HomeLight = () => {
    const[light, setLight] = useState([])

    const context = useContext(Store)
    const { mode, product } = context;



    useEffect(() => {
        axios('https://ecommercedataback.onrender.com/route/finddata')
        .then((res) =>setLight(res.data.result))
    })


    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)


    const addCart = (product) => {
        dispatch(addToCart(product))
        toast.success('Product added successfully',{
            position: "top-right",
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


    // console.log(mobile)
  return (
    <Layout>
                <h1 className='heading'>Home Light's</h1>
          <div className='cartBox'>
                {light && light.filter((item) => item.category === 'HomeLight').map((cat) => {
                    return (
                        <div className='cartItem'>
                            <img className='cartImageBed' src={cat.image} alt="Loading" />

                            <div className='order'>
                                <Link to={`/NextPage/${cat.title}`} state={cat}>
                                <h2 className='headingTwo'>{cat.title}</h2>
                                </Link>
                                <h3 className='price'>₹ {cat.price}</h3>
                            </div>
                                <button onClick={() => addCart(cat)} className='addtocartBed'>Add to Cart</button>
                        </div>
                    )
                })}
            </div>


            <div className="flex flex-wrap -m-4">
                    { product && product.map((item) => {
                        // const { title, price, description, imageUrl } = item;
                        return (
                            <button onClick={() => addCart(item)} type='button' className='addtocart'>Add to Cart</button>
                        )
                    })}
                </div>

                <br></br>
                <br></br>

    </Layout>
  )
}

export default HomeLight