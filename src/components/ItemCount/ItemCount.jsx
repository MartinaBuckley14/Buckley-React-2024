import { useState } from "react"
import "./itemcount.scss"

const ItemCount = ({stock, AddProductCart}) => {
    const [count, setCount] = useState(1)

    const handleClickRemove = () => {
        if(count > 1){
            setCount(count - 1)
        }
    }
    const handleClickAdd = () => {
        if(count < stock){
            setCount(count +1)
        }
    }
  
    return (
    <div className="addproductincart">
        <div className="counter">
            <button onClick={handleClickRemove}>-</button>
            <p>{count}</p>
            <button onClick={handleClickAdd}>+</button>
        </div>
        <button className="addincart" onClick={() => AddProductCart(count)}>Agregar producto</button>
        
        
    </div>
  )
}

export default ItemCount
