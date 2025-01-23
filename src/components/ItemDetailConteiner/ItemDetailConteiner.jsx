import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import {doc, getDoc} from "firebase/firestore"
import db from "../../db/db.js";
import { useParams } from "react-router-dom";
import LoadingView from '../LoadingView/LoadingView'

const ItemDetailConteiner = () => {
  const [detail, setDetail] = useState({})
  const [loadingProduct, setLoadingProduct] = useState(false)

  const {idProduct} = useParams()

  const getProduct = async() => {
    try {
      setLoadingProduct(true)
      const docRef = doc(db, "products", idProduct)
      const dataDb = await getDoc(docRef)

      const product = {id: dataDb.id, ...dataDb.data()}

      setDetail(product)
    } catch (error) {
      
    }finally {
      setLoadingProduct(false)
    }
  }

  useEffect(()=>{

    getProduct()
    
    },[idProduct])
    
  return (
    <div>
      {loadingProduct ? (
        <LoadingView/> 
      ): <ItemDetail product={detail}/>
      }
    </div>
    
   
  )
}

export default ItemDetailConteiner
