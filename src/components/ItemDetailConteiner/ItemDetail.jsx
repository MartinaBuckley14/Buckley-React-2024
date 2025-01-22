import "./itemdetail.scss";
import { Link } from "react-router-dom";
import ItemCount from "../ItemCount/ItemCount";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useState, useEffect } from "react";

const ItemDetail = ({product}) => {
  const {addProduct} = useContext(CartContext)
  const [seeItemCount, setSeeItemCount] = useState(true)


  const AddProductCart = (count) => {
    const productCart = {...product, quantity: count}

    addProduct(productCart)
    setSeeItemCount(false)
  }

  return (
    <div className="item-detail">      
      <div className="image-detail-conteiner">
        <div className="main-image">
            <img src={product.image} alt="" />
        </div>
      </div>
      <div className="title-detail-conteiner">
        <h2 className="title-detail">{product.name}</h2>
        <Link to="/" className="item-close-detail">
        <i className="bi bi-x-circle"></i>
        </Link>
      </div>
      <div className="text-detail-conteiner">
           
        <p className="text-detail">{product.description}</p>
        <p className="text-detail-price">${product.price}</p>
        {
          seeItemCount === true ? (
            <ItemCount stock = {product.stock} AddProductCart={AddProductCart}/>
          ) : (
            <Link to="/cart" className="vercarrito">Ver carrito</Link>
          )
        }
        
      </div>
    </div>
  )
}

export default ItemDetail
