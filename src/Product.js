import React from 'react';
import './Product.css';
// import './Image__Source/product-1.jpg'
import StarRateIcon from '@mui/icons-material/StarRate';

function Product({title,cost,rating,image,buttonText}){
   return(
    <div className='product__item'>
        <div className='product__image'>
            <img src={image} alt="product-image" />
        </div>
        <div className='product__details'>
            <a href="/">{title}</a>
            <div className='product__moreDetails'>
            <p className='product__cost'>${cost}</p>
        <div className='product__rating'>
           {Array(rating).fill().map(() => (
            <StarRateIcon fontSize='small'/>
           ))} 
        </div>
            </div>
           
        <button type="button" className='product__addToCart--button'>{buttonText}</button>
        </div>
    </div>
   )
}

export default Product;