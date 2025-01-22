import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {doc, getDoc} from "firebase/firestore"
import db from "../../db/db.js";
import { useParams } from "react-router-dom";

const ItemDetailConteiner = () => {
  const [detail, setDetail] = useState({})

  const {idProduct} = useParams()

  const getProduct = async() => {
    try {
      const docRef = doc(db, "products", idProduct)
      const dataDb = await getDoc(docRef)

      const product = {id: dataDb.id, ...dataDb.data()}

      setDetail(product)
    } catch (error) {
      
    }
  }

  useEffect(()=>{

    getProduct()
    
    },[idProduct])
    
  return (
    <ItemDetail product={detail}/>
  )
}

export default ItemDetailConteiner
