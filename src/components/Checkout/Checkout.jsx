import { useState, useContext } from "react"
import FormCheckout from "./FormCheckout"
import { CartContext } from "../context/CartContext"
import { Timestamp, collection, addDoc } from "firebase/firestore"
import db from "../../db/db.js"
import LoadingView from "../LoadingView/LoadingOrder"
import "./checkout.scss"


const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const [orderId, setOrderId] = useState()
    const [loading, setLoading] = useState(false)
    const {cart, finalPrice, emptyCart} = useContext(CartContext)

    const handleChangeForm = (event) => {
        const eventName = event.target.name
        const eventValue = event.target.value

        setDataForm({...dataForm, [eventName] : eventValue})
    }

    const handleSubmitForm = async(event) => {
        event.preventDefault()

        const order = {
            buyer: {...dataForm},
            products: [...cart],
            total: finalPrice(),
            date: Timestamp.fromDate(new Date())
        }

        await processOrder(order)
        
    }

    const processOrder = async(newOrder) => {
        try {
            setLoading(true)

            const ordersRef = collection(db, "orders")
            const successOrderNotice = await addDoc(ordersRef, newOrder)
            setOrderId(successOrderNotice.id)
            
            //Vaciar carrito luego de confirmar la orden
            emptyCart()
            
            //notificacion al usuario de Orden enviada con exito
            console.log("su orden fue enviada con exito! Aqui tiene su numero de orden: ", successOrderNotice)
        } catch (error) {
            
        }finally {
            setLoading(false)
        }
    }
  return (
    <div>
        {loading ? (
            <LoadingView/>
        ):  orderId ? (
            <div className="success-order-notice">
                <h2>Su orden fue enviada con exito! Aqui tiene su número de orden:</h2>
                <h3>{orderId}</h3>
            </div>
        ) : <FormCheckout 
        dataForm={dataForm}
        handleChangeForm={handleChangeForm}
        handleSubmitForm={handleSubmitForm}    
    />
           
        }
        
    </div>
  )
}

export default Checkout
