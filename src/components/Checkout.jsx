import { useContext, useState } from 'react'
import { collection, addDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../context/ShoppingCartContext'
import { Box, Button, Center, FormLabel, Input, Text, useToast } from '@chakra-ui/react'

const Checkout = () => {

    const { cart, clearCart, totalPrice, createOrder } = useContext(CartContext)
    const toast = useToast()
    const total = totalPrice()

    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [email, setEmail] = useState("")
    const [email2, setEmail2] = useState("")

    let check = false
    const [orderId, setOrderId] = useState()
    const [success, setSuccess] = useState(false)
    const items = createOrder()

    const buyer = { name: name, lastName: lastName, email: email }

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
            check = true
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (cart.length > 0) {
            checkInputs()
            if (check) {
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
                setSuccess(true)
            }
        } else {
            toast({
                title: 'NO HAY PRODUCTOS EN EL CARRITO',
                status: 'error',
                duration: 3000,
                position: 'bottom',
            })
        }
    }

    if (success === false && cart.length > 0) {
        return (
            <Center mt={'30px'}>
                <Box border={'1px'} borderRadius={'xl'} p={5} shadow={'lg'} w={'500px'}>
                    <form onSubmit={handleSubmit}>
                        <FormLabel fontSize={'xl'} fontWeight={'semibold'} mb={0}>Nombre</FormLabel>
                        <Input type='text' mb={5} shadow={'sm'} placeholder='Nombre' onChange={
                            (e) => setName(e.target.value)} />

                        <FormLabel fontSize={'xl'} fontWeight={'semibold'} mb={0}>Apellido</FormLabel>
                        <Input type='text' mb={5} shadow={'sm'} placeholder='Apellido' onChange={
                            (e) => setLastName(e.target.value)} />

                        <FormLabel fontSize={'xl'} fontWeight={'semibold'} mb={0}>Email</FormLabel>
                        <Input type='email' mb={5} shadow={'sm'} placeholder='Email' onChange={
                            (e) => setEmail(e.target.value)} />

                        <FormLabel fontSize={'xl'} fontWeight={'semibold'} mb={0}>Reingrese su email</FormLabel>
                        <Input type='email' mb={5} shadow={'sm'} placeholder='Email' onChange={
                            (e) => setEmail2(e.target.value)} />
                        <Center>
                            <Button type='submit' colorScheme='blue' shadow={'md'}>Confirmar compra</Button>
                        </Center>

                    </form>
                </Box>
            </Center>
        )
    } else if (success) {
        return (
            <Center mt={'50px'}>
                <Box border={'2px'} borderRadius={'xl'} shadow={'lg'} pt={'20px'} px={'100px'} pb={'30px'}>
                    <Center mb={'50px'}>
                        <Text fontSize={'4xl'} fontWeight={'black'}>¡FELICITACIONES!</Text>
                    </Center>
                    <Center>
                        <Text fontSize={'2xl'} fontWeight={'bold'}>Código de su orden de compra:</Text>
                    </Center>
                    <Center>
                        <Text fontSize={'lg'} borderBottom={'1px'}>{orderId}</Text>
                    </Center>
                </Box>
            </Center>
        )
    } else if (success === false && cart.length === 0) {
        return (
            <Center mt={100}>
                <Text fontSize={'4xl'} fontWeight={'black'}>NO HAY PRODUCTOS EN EL CARRITO</Text>
            </Center>
        )
    }
}

export default Checkout