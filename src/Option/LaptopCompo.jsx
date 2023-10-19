import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Laptop.css'
import Layout from '../components/layout/Layout'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../redux/CartSlice'
import { toast } from 'react-toastify'


const LaptopCompo = () => {
    const[laptop, setLaptop] = useState([])

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)

    useEffect(() => {
        axios('https://ecommercedataback.onrender.com/route/data')
        .then((res) =>setLaptop(res.data))
        .catch((err) => console.log(err))
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
                <h1 className='heading'>Laptop</h1>
          <div className='cartBox'>
                {laptop && laptop.filter((item) => item.category === 'Laptop').map((cat) => {
                    return (
                        <div className='LaptopItem'>
                            <img className='LaptopImage' src={cat.image} alt="Loading" />

                            <div className='order'>
                                <Link to={`/NextPage/${cat.title}`} state={cat}>
                                <h2 className='headingTwo'   style={{ color: mode === 'dark' ? 'white' : '', }}>{cat.title}</h2>
                                </Link>
                                <h3 className='price'>₹ {cat.price}</h3>
                                <button  onClick={() => addCart(cat)} className='addtocart'>Add to Cart</button>
                            </div>
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

export default LaptopCompo