import {Link} from "react-router-dom";

const Item = ({product}) => {
    return (
        <div className="item">
            <div className="item-image-conteiner">
                <img className="item-image" src={product.image} alt={product.name} />
            </div>
            <div className="item-text">
                <p className="item-name">{product.name}</p>
                <p className="item-price">${product.price}</p>

                <Link to={"/detail/" + product.id} className="item-button">Ver Detalle</Link>
            </div>
           
           
        </div>
    )
}

export default Item