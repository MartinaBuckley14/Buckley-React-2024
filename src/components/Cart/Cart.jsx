import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import "./cart.scss"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


const Cart = () => {
    const {cart, finalPrice, deleteProductInCart, emptyCart} = useContext(CartContext)


    //Early return. Vista carrito vacio
    if(cart.length === 0){
        return (
            <div className="emptycart">
                <h2 className="emptycarttitle">Su carrito está vacío 😟</h2>
                <Link to="/" className="backhome">Volver al inicio</Link>
            </div>
        )
    }


  return (
    <div>
        <ul className="galery-cart">
            <h1 className="title-cart">Productos en el carrito</h1>
            {
                //Recorre array de carrito y por cada objeto crea una vista
                cart.map((productInCart)=>(
                    <li key={productInCart.id} className="product-card">
                        <img src={productInCart.image} className="product-card-img" />
                        <p className="product-detail">
                        <p>{productInCart.name}</p>
                        <p>Cantidad: {productInCart.quantity}</p>
                        <p>Precio unitario: $ {productInCart.price}</p>
                        <p>Subtotal: ${productInCart.price * productInCart.quantity}</p>
                        <button className="remove-product" onClick={()=> deleteProductInCart(productInCart.id)}><i class="bi bi-trash"></i></button>
                        </p>
                    </li>
                ))
                
            }

            <div className="info-cart">
                <h3 className="finalprice">Total: ${finalPrice()} </h3>
                <div className="desition">
                    <Link className="end-purchase" to="/checkout">Finalizar compra</Link>
                    <Link to="/" className="back-home">Continuar comprando</Link>
                </div>
                <button className="empty-cart-button" onClick={emptyCart}>Vaciar carrito</button>
            </div>
            
        </ul>
    </div>
  )
}

export default Cart
