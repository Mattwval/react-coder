import React from "react";
import styles from './ItemListContainer.module.css'
import ItemsModule from "../Items/Items.module";
import {Col, Row} from "react-bootstrap";
import {useState, useEffect} from "react";

const ItemListContainer = (props) => {

    const imagenesIniciales = ['https://cdn.shopify.com/static/sample-images/shoes.jpeg?', 'https://cdn.shopify.com/static/sample-images/garnished.jpeg?', 'https://cdn.shopify.com/static/sample-images/shoes.jpeg?']

    const [cargandoText, setCargandoText] = useState('Cargando Productos');
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {

        setTimeout(() => {

            setImagenes(imagenesIniciales)
            setCargandoText('')

        }, 2000)

    }, [])

    return (
        <div className={styles.itemList}>
            <h2>{props.productos}</h2>
            <p className={styles.cargando}>{cargandoText}</p>
            <Row>
                {imagenes.map((nombre, index) => <Col cols={4}><ItemsModule imgItem={nombre} key={index}/></Col>)}
            </Row>
        </div>
    )
}
export default ItemListContainer