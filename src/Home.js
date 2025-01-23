import React from 'react';
import Banner from './Banner';
import Product from './Product';
import './Home.css'


function Home() {
  return(
    <div className='home'>
      <div className='home__container'>
        <Banner/>
        <div className='product__container'>
            <div className='product__row'>
                <Product title="Radiant Day Cream" cost={12} rating={5} image="/images/product-1.jpg" buttonText={"Add to cart"}/>
                <Product title="Lavender Bath Oil" cost={8} rating={4} image="/images/product-2.jpg" buttonText={"Add to cart"}/>
            </div>
            <div className='product__row'>
            <Product title="Aurum Lavender Rose Cream" cost={9} rating={2} image="/images/product-3.webp" buttonText={"Add to cart"}/>
            <Product title="Hydrated & Bright Face Serum" cost={8} rating={5} image="/images/product-4.jpg" buttonText={"Add to cart"}/>
            <Product title="Aloe Vera Shampoo" cost={10} rating={3} image="/images/product-5.webp" buttonText={"Add to cart"}/>
            </div>
            <div className='product__row'>
            <Product title="Lavender Bath Oil" cost={8} rating={4} image="/images/product-2.jpg" buttonText={"Add to cart"}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Home;