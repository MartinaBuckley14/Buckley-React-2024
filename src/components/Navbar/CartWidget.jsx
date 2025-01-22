import React from 'react'
import { GiShoppingCart } from "react-icons/gi";
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { Link } from 'react-router-dom';
import ".././Cart/cart.scss"


const CartWidget = () => {
  const {totalQuantity} = useContext(CartContext)

  let quantity = totalQuantity()

  return (
    <>
        <Link to = '/cart' className='carrito'> 
            <GiShoppingCart className='cartwidget'/>
            <p className='cartwidget_cantidad'>{quantity === 0 ? "" : quantity}</p>
        </Link>
    </>
  )
}

export default CartWidget
