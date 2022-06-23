import React from "react";
import Item from '../Item/Item'
import {Col, Row} from "react-bootstrap";

const ItemList = (props) => {

    return (
        <Row>
            {props.productos.map((producto, index) => <Col cols={6}><Item producto={producto} /></Col>)}
        </Row>
    )
}

export default ItemList