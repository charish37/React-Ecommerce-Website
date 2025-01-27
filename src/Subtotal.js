import React from 'react';
import './Subtotal.css';
import CurrencyFormat from 'react-currency-format';

function Subtotal({TotalCost}){
    return(
        <div className='subtotal__container'>
            <CurrencyFormat
               renderText={(value) => (
                 <>
                   <p>
                     Subtotal (0 items): <strong>${TotalCost}</strong>
                   </p>
                   <small className='subtotal__gift'>
                      <input type="checkbox" /> This order contains a gift
                   </small>
                 </>
               )}
               decimalScale={2}
               value={0}
               displayType='text'
               thousandSeparator={true}
               prefix={'$'}
            />
        </div>
    )
}

export default Subtotal;