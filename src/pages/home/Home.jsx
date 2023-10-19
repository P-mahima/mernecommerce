import React from 'react'
import Layout from '../../components/layout/Layout'
import HeroSection from '../../components/herosection/HeroSection'
// import Filter from '../../components/filter/Filter'
import ProductCard from '../../components/productCard/ProductCard'
import Testimonial from '../../components/testimonial/Testimonial'
// import Track from '../../components/track/Track'
import Curosal from '../../components/curosal/Curosal'


function Home() {

  return (
    <Layout>
      <HeroSection />
      <br></br>
      {/* <Filter /> */}
      <ProductCard />
      <Curosal/>

      <br></br>
      <Testimonial />
    </Layout>
  )
}

export default Home