import { useState,useEffect } from 'react'
import { getProducts } from '../data/data.js'
import ItemList from "./ItemList"
import { useParams } from "react-router-dom"
import "./itemlistconteiner.scss"


const ItemListConteiner = ({greeting}) => {
  const [products, setProducts] = useState([])

  const {idCategory} = useParams()

  useEffect(() => {
    getProducts()
      .then((data)=> {
        if (idCategory) {
          const productosFiltrados = data.filter((product) => product.category === idCategory)
          setProducts(productosFiltrados)
        }else {
          setProducts(data)
        }
      })
      .catch((error)=> {
        console.log(error)
      })
      .finally(()=> {
        console.log("termino la promesa")
      })
  },[idCategory])
  

  return (
    <div className='itemlistconteiner'>
      <h2 className='greeting'>{greeting}</h2>
      <ItemList products={products}/>
    </div>
    
  )
}

export default ItemListConteiner
