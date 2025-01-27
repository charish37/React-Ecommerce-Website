import React from "react";
import Product from "./Product";
import Subtotal from "./Subtotal";

import { useStateValue } from "./StateProvider";

import './Checkout.css';

const Checkout = () => {
  const [state,dispatch] = useStateValue();
  let TotalCost = 0;
  return (
    <div className="checkout__container">
        <div className="checkout__left">
            <img src="https://m.media-amazon.com/images/G/01/us-manual-merchandising/D196493729_desk_3000x600_en.png" alt="best-seller_add" className="checkout__ad"  />
            <div className="checkout__cart--items">
                <h2>Your Cart Items</h2>
                {state.basket.map((item) => {
                  TotalCost += item.cost;
                 return <Product id={item.id} title={item.title} cost={item.cost} rating={item.rating} image={item.image} buttonText={"Remove from cart"} type="REMOVE_FROM_CART"/>
                })}
            </div>
        </div>
        <div className="checkout__right">
         <Subtotal TotalCost={TotalCost}/>
         <button className="checkout__button">Proceed to checkout</button>
        </div>
        
    </div>
  )
}

export default Checkout;