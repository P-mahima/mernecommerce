import React from 'react'
import Layout from '../components/layout/Layout'
import { useSearch } from './Search'
import { Link } from 'react-router-dom'
import '../Option/Combine.css'
import { addToCart } from '../redux/CartSlice'
import { useDispatch } from 'react-redux'


const SearchResult = () => {
    const[values, setValues] = useSearch()

    const dispatch = useDispatch()
    const addToCart = (post) => {
      dispatch(add(post))
    };
    console.log(setValues);
  return (
    <Layout title={'Search Results'}>
      <div className='container'>
        <div className='text-center'>
            <h1>Search Results</h1>
            <h6>{values.results.length < 1 ? 'No Product Found' : `Found ${values.results.length}`}</h6>

            <div className='cartBoxWomen'>
                {values.results.map((cat, index,post) => {
                   const {  image, price,title } = post;
                    return (
                        <div className='cartItemWomen' key={index}>
                            <img className='cartImageItem' src={cat.image} alt="Loading" />

                            <div className='order'>
                                <Link to={`/NextPage/${cat.title}`} state={cat}>
                                <h2 className='headingTwoWomen'>{cat.title}</h2>
                                </Link>
                                <h3 className='price'>₹ {cat.price}</h3>
                            </div>
                                <button onClick={() => addToCart(post)} className='addtocart'>Add to Cart</button>
                        </div>
                    )
                })}
            </div>

        </div>

      </div>
    </Layout>
  )
}

export default SearchResult





