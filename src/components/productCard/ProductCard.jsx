import axios from 'axios'
import React, {  useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './ProductCard.css'
// import '.././'

import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../../redux/CartSlice'
import { toast } from 'react-toastify'
import { Store } from '../../context/data/MyContext'
import { useContext } from 'react'





const MobileeCompo = () => {
    const[data, setData] = useState('')
    const context = useContext(Store)
    const { mode, product } = context;

   

    const dispatch = useDispatch()
    const cartItems = useSelector((state) => state.cart)
    // console.log(cartItems)

    const addcart = (product) => {
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

    useEffect(() => {
        axios
      .get("https://ecommercedataback.onrender.com/route/finddata")
      .then((res) => {
        setData(res.data.result);
      });
    },[])
    // console.log(mobile)
  return (
    <div>
                <h1 className='heading'>LatestItem</h1>
          <div className='cartBox'>
                {data && data.filter((item) => item.category === 'LatestItem').map((cat,index) => {
                    //  const { title, price, description, imageUrl } = cat;
                    return (
                        <div className='cartItem' key={index}>
                            <img className='cartImage' src={cat.image} alt="Loading" />

                            <div className='order'>
                                <Link to={`/NextPage/${cat.title}`} state={cat}>
                                <h2 className='headingTwo'   style={{ color: mode === 'dark' ? 'white' : '', }}>{cat.title}</h2>
                                </Link>
                                <h3 className='price'>₹ {cat.price}</h3>
                            </div>
                            <button onClick={() => addcart(cat)} className='addto'>Add to Cart</button>
                        </div>
                    )
                })}
            </div>

            






            <div className="flex flex-wrap -m-4">
                    { product && product.map((item) => {
                        // const { title, price, description, imageUrl } = item;
                        return (
                            <button onClick={() => addcart(item)} type='button' className='addto'>Add to Cart</button>
                        )
                    })}
                </div>




                    


                    <br></br>












    </div>
  )
}

export default MobileeCompo