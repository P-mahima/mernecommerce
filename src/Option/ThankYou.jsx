import React from 'react'
import './Thankyou.css'
import Layout from '../components/layout/Layout'
import { Link } from 'react-router-dom'

const ThankYou = () => {
  return (
    <Layout>
      <div className='thankyou'>
      <h1 className='thankyouhead'>Thank you for shopping</h1>
      <Link to={'/'}>
      <h3 className='thankyouheadkeep'>Keep Shoping</h3>
      </Link>

      </div>
    </Layout>
  )
}

export default ThankYou
