import "./itemdetail.scss";

const ItemDetail = ({product}) => {
  return (
    <div className="item-detail">
        <div className="image-detail-conteiner">
            <div className="main-image">
                <img src={product.image} alt="" />
            </div>
        </div>
        <h2 className="title-detail">{product.name}</h2>
        <div className="text-detail-conteiner">
           
            <p className="text-detail">{product.description}</p>
            <p className="text-detail-price">${product.price}</p>
        </div>
    </div>
  )
}

export default ItemDetail
