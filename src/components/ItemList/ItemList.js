import React from "react";
import styles from './ItemList.css'
import Counter from '../Counter/Counter'
import Item from '../Item/Item'
import {Col, Row} from "react-bootstrap";

const ItemList = (props) => {

    return (
        <Row>
            {props.productos.map((producto, index) => <Col cols={4}><Item producto={producto} /></Col>)}
        </Row>
    )
}

export default ItemList