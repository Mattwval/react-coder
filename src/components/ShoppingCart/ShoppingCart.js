import React from "react";
import {useContext} from "react";
import {cartContext} from "../../CartContext";
import ItemShoppingCart from "../ItemShoppingCart/ItemShoppingCart";
import {Button, Col, Container, Row} from "react-bootstrap";

function ShoppingCart () {

    const data = useContext(cartContext)

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

    return (
        <Container>
            <Row>
                <Col cols={5}>PRODUCTO</Col>
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
                <Button className="btn btn-primary" size="lg">Pagar</Button>
            </Row>
        </Container>
    )
}
export default ShoppingCart