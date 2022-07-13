import React, {useState} from "react";
import {useContext} from "react";
import {cartContext} from "../../CartContext";
import ItemShoppingCart from "../ItemShoppingCart/ItemShoppingCart";
import {Button, Col, Container, Row} from "react-bootstrap";
import {addDoc} from 'firebase/firestore'
import {db} from "../../firebase-config";
import {collection} from "@firebase/firestore";

function ShoppingCart () {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [number, setNumber] = useState("")

    const data = useContext(cartContext)

    const usersCollection = collection(db, "users")

    const productos = data.arrayProductos

    const cantidadProductos = (lista) => {
        let cantidadProductos = 0

        for (let i = 0; i < lista.length; i++) {
            cantidadProductos += lista[i].cantidad
        }

         return cantidadProductos
    }

    const totalPago = (productos) => {
        let total = 0

        for (let i = 0; i < productos.length; i++) {
            total += productos[i].precio
        }

        return total
    }

    const createOrder = async () => {
        await addDoc(usersCollection, {name: nombre, email: email, number:number })
        setNombre("")
        setEmail("")
        setNumber("")
    }

    return (
        <Container>
            <Row>
                <Col cols={6}>PRODUCTO</Col>
                <Col cols={2}>VALOR</Col>
                <Col cols={2}>UNIDADES</Col>
            </Row>
            <Row>
                {productos.map((producto, index) => <ItemShoppingCart producto={producto} key={index}/> )}
            </Row>
            <Row>
                <Col cols={8}></Col>
                <Col cols={2}><h2 style={{color:"black"}}>Total: ${totalPago(productos)}</h2></Col>
                <Col cols={2}><h2 style={{color:"black"}}>{cantidadProductos(productos)}</h2></Col>
            </Row>
            <Row>
                <Col cols={12}>
                    <label>Nombre</label>
                    <input type="text" placeholder="nombre" value={nombre} onChange={e => setNombre(e.target.value)}/>
                </Col>
                <Col cols={12}>
                    <label>Email</label>
                    <input  type="email" placeholder="email" value={email} onChange={e => setEmail(e.target.value)}/>
                </Col>
                <Col cols={12}>
                    <label>Número</label>
                    <input type="text" placeholder="número" value={number} onChange={e => setNumber(e.target.value)}/>
                </Col>
            </Row>
            <Row>
                <Button className="btn mt-2 btn-primary" size="lg" onClick={createOrder}>Pagar</Button>
            </Row>
        </Container>
    )
}
export default ShoppingCart