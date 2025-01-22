import { useState,useEffect } from 'react'
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import "./itemlistconteiner.scss"
import {collection, getDocs, query, where} from "firebase/firestore"
import db from '../../db/db.js'

const ItemListConteiner = ({greeting}) => {
  const [products, setProducts] = useState([])

  const {idCategory} = useParams()

  const collectionData = collection(db, "products")

  const getProducts = async() => {
    try {
      const dataDb = await getDocs(collectionData)

      const data = dataDb.docs.map((productDb) => {
        return {id: productDb.id, ...productDb.data()}
      })

      setProducts(data)

    }catch (error) {
      console.log(error)
    }
  }

  const getProductsByCategory = async() => {
    try {
      const q = query(collectionData, where("category", "==", idCategory ) )
      const dataDb = await getDocs(q)
  
      const data = dataDb.docs.map((productDb) => {
        return {id: productDb.id, ...productDb.data()}
      })
  
      setProducts(data)
    } catch (error) {
      
    }
   
  }


  useEffect(() => {
    if(idCategory){
      getProductsByCategory()
    }else {
      getProducts()
    }
    
  },[idCategory])
  

  return (
    <div className='itemlistconteiner'>
      <h2 className='greeting'>{greeting}</h2>
      <ItemList products={products}/>
    </div>
    
  )
}

export default ItemListConteiner
