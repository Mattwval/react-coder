import React from "react";
import styles from './ItemListContainer.module.css'
import ItemList from "../ItemList/ItemList";
import {Col, Row} from "react-bootstrap";
import {useState, useEffect} from "react";

const ItemListContainer = (props) => {

    const productos = [
        {
            "description": 'lorem ipsum 1',
            "img":'https://cdn.shopify.com/static/sample-images/shoes.jpeg?'
        },
        {
            "description": 'lorem ipsum 2',
            "img":'https://cdn.shopify.com/static/sample-images/garnished.jpeg?'
        },
        {
            "description": 'lorem ipsum 3',
            "img":'https://cdn.shopify.com/static/sample-images/shoes.jpeg?'
        }]


    const [cargandoText, setCargandoText] = useState('Cargando Productos');
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {


        setTimeout(() => {

            setImagenes(productos)
            setCargandoText('')

        }, 2000)

    }, [])


    return (
        <div className={styles.itemList}>
            <h2>{props.productos}</h2>
            <p className={styles.cargando}>{cargandoText}</p>
            <Row>
                <ItemList productos={productos} />
            </Row>
        </div>
    )
}
export default ItemListContainer