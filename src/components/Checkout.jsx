import React, { useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

const Checkout = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState(null)

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        addDoc(ordersCollection, order).then(({ id }) =>
            setOrderId(id))
    }

    const order = { name, email }

    const ordersCollection = collection(db, "orders")

    return (
        <>
            <h1>Envio de ordenes</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Nombre y apellido' onChange={
                    (e) => setName(e.target.value)} />
                <input type="text" placeholder='Email' onChange={
                    (e) => setEmail(e.target.value)} />

                <button type='submit'>Enviar informacion</button>
            </form>
            <p>Numero de orden: {orderId}</p>
        </>
    )
}

export default Checkout