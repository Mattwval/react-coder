import React from "react";
import {Row, Col} from "react-bootstrap";
import style from './ItemShoppingCart.css'

function ItemShoppingCart ({producto}) {
    return (
        <container>
            <Row>
                <Col cols={5}><h4>{producto.nombre}</h4></Col>
                <Col cols={2}><h2>{producto.precio}</h2></Col>
                <Col cols={2}><h2>{producto.cantidad}</h2></Col>
            </Row>
        </container>
    )
}
export default ItemShoppingCart