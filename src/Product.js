import React from 'react';
import './Product.css';
// import './Image__Source/product-1.jpg'
import StarRateIcon from '@mui/icons-material/StarRate';
import {useStateValue} from './StateProvider';

function Product({title,cost,rating,image,buttonText,type,id}){
     const [state,dispatch] = useStateValue();

    const handleClick = () => {
       dispatch({
        type: type,
        item: {
            id: id,
            title: title,
            image: image,
            cost: cost,
            rating: rating
        }
       })
    }

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
           
        <button type="button" className='product__addToCart--button' onClick={handleClick}>{buttonText}</button>
        </div>
    </div>
   )
}

export default Product;