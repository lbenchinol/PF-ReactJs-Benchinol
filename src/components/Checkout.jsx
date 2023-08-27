import { useContext, useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../context/ShoppingCartContext'
import { Button, FormLabel, Input, useToast } from '@chakra-ui/react'

const Checkout = () => {

    const toast = useToast()

    const { cart, clearCart, totalPrice } = useContext(CartContext)

    const [check, setCheck] = useState(false)
    const [success, setSuccess] = useState(false)

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")

    const [orderId, setOrderId] = useState(null)
    const total = totalPrice()
    const [items, setItems] = useState([])

    const buyer = { name: name, lastName: lastName, email: email }

    const createOrder = () => {
        setItems(cart.map((p) => {
            return { id: p.id, name: p.name, price: p.price, quantity: p.quantity }
        }))
    }

    const date = new Date().toLocaleDateString()
    
    const order = { buyer: buyer, items: items, total: total, date: date }
    const db = getFirestore()
    const ordersCollection = collection(db, "orders")

    const checkInputs = () => {
        let nameChk = false
        let lastChk = false
        let emailChk = false

        if (name === "") {
            toast({
                title: 'INGRESE EL NOMBRE CORRECTAMENTE',
                status: 'error',
                duration: 5000,
                position: 'bottom',
                isClosable: true,
            })
        } else {
            nameChk = true
        }

        if (lastName === "") {
            toast({
                title: 'INGRESE EL APELLIDO CORRECTAMENTE',
                status: 'error',
                duration: 5000,
                position: 'bottom',
                isClosable: true,
            })
        } else {
            lastChk = true
        }

        if (email === "" || email2 === "") {
            toast({
                title: 'INGRESE EL MAIL CORRECTAMENTE',
                status: 'error',
                duration: 5000,
                position: 'bottom',
                isClosable: true,
            })
        } else if (email !== email2) {
            toast({
                title: 'INGRESE EL MAIL CORRECTAMENTE',
                status: 'error',
                duration: 5000,
                position: 'bottom',
                isClosable: true,
            })
        } else if (email === email2) {
            emailChk = true
        }

        if (nameChk && lastChk && emailChk) {
            setCheck(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        checkInputs()
        if (check) {
            createOrder()
            addDoc(ordersCollection, order)
                .then(({ id }) =>
                    setOrderId(id))

            clearCart()

            toast({
                title: 'COMPRA EXITOSA',
                status: 'success',
                duration: 3000,
                position: 'bottom',
            })
            setTimeout(() => {
                setSuccess(true)
            }, 3000);
        }
    }

    if (success) {
        return (
            <>
                <p>Código de su orden de compra: {orderId}</p>
            </>
        )
    } else {
        return (
            <>
                <form onSubmit={handleSubmit}>

                    <FormLabel>Nombre</FormLabel>
                    <Input type='text' onChange={
                        (e) => setName(e.target.value)} />

                    <FormLabel>Apellido</FormLabel>
                    <Input type='text' onChange={
                        (e) => setLastName(e.target.value)} />

                    <FormLabel>Email</FormLabel>
                    <Input type='email' onChange={
                        (e) => setEmail(e.target.value)} />

                    <FormLabel>Reingrese su email</FormLabel>
                    <Input type='email' onChange={
                        (e) => setEmail2(e.target.value)} />

                    <Button type='submit' colorScheme='blue' >Confirmar compra</Button>

                </form>
            </>
        )
    }
}

export default Checkout