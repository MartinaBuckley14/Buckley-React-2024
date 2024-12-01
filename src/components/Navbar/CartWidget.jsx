import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
const CartWidget = () => {
  return (
    <>
        <div className='carrito'> 
            <GiShoppingCart className='cartwidget'/>
            <p className='cartwidget_cantidad'>2</p>
        </div>
    </>
    
     
  )
  
}

export default CartWidget
