import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { getProducts } from "../data/data.js";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
    const [detail, setDetail] = useState({})

    const {idProduct} = useParams()

    useEffect(()=>{

        getProducts()
        .then( (data) => {
          const productFind = data.find( (detailProduct) => detailProduct.id === idProduct )
          setDetail(productFind)
        })
    },[idProduct])
    
  return (
    <ItemDetail product={detail}/>
  )
}

export default ItemDetailConteiner
