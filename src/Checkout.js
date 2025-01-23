import React from "react";
import Product from "./Product";
import Subtotal from "./Subtotal";

import './Checkout.css';

const Checkout = () => {
  return (
    <div className="checkout__container">
        <div className="checkout__left">
            <img src="https://m.media-amazon.com/images/G/01/us-manual-merchandising/D196493729_desk_3000x600_en.png" alt="best-seller_add" className="checkout__ad"  />
            <div className="checkout__cart--items">
                <h2>Your Cart Items</h2>
                <Product title="Radiant Day Cream" cost={12} rating={5} image="/images/product-1.jpg" buttonText={"Remove from cart"}/>
                <Product title="Lavender Bath Oil" cost={8} rating={4} image="/images/product-2.jpg" buttonText={"Remove from cart"}/>
            </div>
        </div>
        <div className="checkout__right">
         <Subtotal/>
         <button className="checkout__button">Proceed to checkout</button>
        </div>
        
    </div>
  )
}

export default Checkout;