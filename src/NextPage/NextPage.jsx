import React, { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import './NextPage.css'


import axios from 'axios';
import Layout from '../components/layout/Layout';
import { addToCart } from '../redux/CartSlice';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';


function NextPage() {

    const [api, setApi] = useState([''])
    window.scrollTo(0,0)
    useEffect(() => {
        axios("https://nodeprojectserver.onrender.com/user/api")
            .then((response) => setApi(response.data))
            .catch((error) => console.log(error))
    }, [])
    const Navigate = useNavigate();
    const Location = useLocation().state
    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)

    const addCart = (product) => {
        dispatch(addToCart(product))
        toast.success('Product added successfully')
    }
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartItems));
    }, [cartItems])




    console.log(api)

    return (
        <Layout>
            <div className='NextPage-Flex'>


                <img className='NextPageImage' src={Location.image} alt="loading" ></img>

                <div>
                <h1 className='NextHeading'> {Location.title} </h1>
                <p className='description' > <span className='spandes'>Description-</span>{Location.description}</p>
                <br></br>
                <p className='NextPrice' >₹ {Location.price}</p>
                <br></br>
                <div className='AddButton'>
                <button onClick={() => addCart(Location)} className='addtocartBed'>Add to Cart</button>
                <button onClick={() => { Navigate(-1); }} className="addtocartBed">  Back  </button>
                <br></br>
                </div>
                <br></br>
                {/* <img src='https://thumbs.dreamstime.com/z/delivery-service-concept-poster-cartoon-style-relocation-service-company-deliver-boxes-truck-95050722.jpg' className='imgoffer' alt='loading'/> */}
                </div>
            </div>
        </Layout>
    )



}

export default NextPage;