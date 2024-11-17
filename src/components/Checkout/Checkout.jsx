import React, { useState, useContext } from 'react'
import FormCheckout from './FormCheckout'
import { Timestamp, collection, addDoc, setDoc } from 'firebase/firestore'
import db from '../../db/db'
import { CartContext } from '../../contexto/CartContext'
import { Link } from 'react-router-dom'
import "./styleLastCheck.css"

const Checkout = () => {
    const [dataForm, setDataForm] = useState({
        fullname: "",
        phone: "",
        email: ""
    })

    const [idOrder, setIdOrder] = useState(null)
    const { cart, totalPrice } = useContext(CartContext)

    const handleChangeInput = (event) => {
        setDataForm({ ...dataForm, [event.target.name]: event.target.value })
    }

    const handleSubmitForm = (event) => {
        event.preventDefault()
        const order = {
            buyer: { ...dataForm },
            items: cart,
            total: typeof totalPrice === 'function' ? totalPrice() : totalPrice, // Llama a totalPrice si es una función
            date: Timestamp.fromDate(new Date())
        }

        uploadOrder(order)
    }

    const uploadOrder = (newOrder) => {
        const orderRef = collection(db, "orders")
        addDoc(orderRef, newOrder)
            .then((response) => setIdOrder(response.id))
            .catch((error) => console.error("Error al subir la orden:", error))
            .finally(() => {
                deleteCart()
            })
    }

    return (
        <div>
            {idOrder === null ? (
                <FormCheckout
                    dataForm={dataForm}
                    handleChangeInput={handleChangeInput}
                    handleSubmitForm={handleSubmitForm}
                />
            ) : (
                <div className='divLastCheck'>
                    <h2 className='tittleLastCheck'>Subido correctamente</h2>
                    <p className='textLastCheck'>Guarde su numero de seguimiento: {idOrder} </p>
                    <Link className='comebackLastCheck' to="/">VOLVER AL INICIO</Link>
                </div>
            )}
        </div>
    )
}

export default Checkout
