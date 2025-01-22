import { createContext, useEffect, useState } from "react";

const CartContext = createContext()

const CartProvider = ({children}) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem("cart-item"))
    
    const [cart, setCart] = useState(cartLocalStorage ? cartLocalStorage : [])

    useEffect (() => {
       localStorage.setItem("cart-item", JSON.stringify(cart)) 
    },[cart])

    

    const addProduct = (newProduct) => {
        const productExist = cart.find((product) => product.id === newProduct.id)
        if(productExist){
            productExist.quantity +=1;
            setCart ([...cart])
        }else {
            setCart ([...cart, newProduct])
        }
        
    }

    const totalQuantity = () => {
      const quantity = cart.reduce((total,productCart)=> total + productCart.quantity , 0)
      return quantity  
    }

    const finalPrice = () => {
        const price = cart.reduce((total, productCart) => total + (productCart.price * productCart.quantity), 0 )
        return price
    }

    const deleteProductInCart = (idProduct) => {
        const updateCart = cart.map((product) => {
            if(idProduct === product.id){
                const newQuantity = product.quantity > 0 ? product.quantity - 1 : 0;
                return {...product, quantity : newQuantity}
            }
            return product
        })

        const newCart = updateCart.filter ((product) => product.quantity > 0);

        setCart(newCart)
    }

    const emptyCart = () => {
        setCart([])
    }

    return(
        <CartContext.Provider value ={{cart, addProduct, totalQuantity, finalPrice, deleteProductInCart, emptyCart}} >
            {children}
        </CartContext.Provider>
    )
}

export {CartContext, CartProvider}