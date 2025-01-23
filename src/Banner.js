import React from 'react';
import './Banner.css'

const Banner = () => {
    return(
        <div className='banner'>
            <div className='banner__content'>
                <h1>Welcome to our Store</h1>
                <p>Discover amazing deals and top quality products!</p>
                <button className='banner__button'>Shop Now</button>
            </div>
        </div>
    )
}

export default Banner;