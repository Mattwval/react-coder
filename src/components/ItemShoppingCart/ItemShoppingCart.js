import React, {useContext, useState} from "react";
import {Row, Col, Button} from "react-bootstrap";
import style from './ItemShoppingCart.css'
import { FaTrashAlt } from 'react-icons/fa';
import {cartContext} from "../../CartContext";

function ItemShoppingCart ({producto}) {

    const cartData = useContext(cartContext)

    return (
        <container>
            <Row>
                <Col cols={5}><h4>{producto.nombre}</h4></Col>
                <Col cols={2}><h2>{producto.precio}</h2></Col>
                <Col cols={2}><h2>{producto.cantidad}</h2></Col>
                <Col cols={1}>
                    <button
                        className="boton_eliminar"
                        onClick={() => {
                        cartData.deleteItem(producto.id)
                    }}
                    >
                        <FaTrashAlt />
                    </button>
                </Col>
            </Row>
        </container>
    )
}
export default ItemShoppingCart