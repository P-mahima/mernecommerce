import React from 'react'
import './Hero.css'
import FirstImage  from './Images/first.jpg'
// import SecondImage  from './Images/second.jpeg'
import ThirdImage  from './Images/thirdd.webp'
import FourImage  from './Images/four.jpg'
// import FiveImage  from './Images/fifth.jpeg'





const HeroSection = () => {
  return (
   <div className='container-fluid' id='heroImage'>

<div id="carouselExampleAutoplaying" class="carousel slide carousel-fade" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={FirstImage} class="d-block w-100" alt="..." />
    </div>
    <div class="carousel-item">
      <img src={ThirdImage} class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
      <img src={FourImage} class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

   </div>
  )
}

export default HeroSection

{/* <img className='hero' src="https://images.twinkl.co.uk/tr/raw/upload/u/category/french-ks2-lets-go-shopping-1501144390.jpg" alt="" /> */ }