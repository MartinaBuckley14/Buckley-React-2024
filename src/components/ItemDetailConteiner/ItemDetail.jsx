import "./itemdetail.scss";
import { Link } from "react-router-dom";

const ItemDetail = ({product}) => {
  return (
    <div className="item-detail">      
      <div className="image-detail-conteiner">
        <div className="main-image">
            <img src={product.image} alt="" />
        </div>
      </div>
      <div className="title-detail-conteiner">
        <h2 className="title-detail">{product.name}</h2>
        <button className="item-close-detail">
        <i className="bi bi-x-circle"></i>
        </button>
      </div>
      <div className="text-detail-conteiner">
           
        <p className="text-detail">{product.description}</p>
        <p className="text-detail-price">${product.price}</p>
      </div>
    </div>
  )
}

export default ItemDetail
