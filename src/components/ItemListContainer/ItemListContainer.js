import React from "react";
import styles from './ItemListContainer.module.css'
import ItemList from "../ItemList/ItemList";
import {Col, Row} from "react-bootstrap";
import {useState, useEffect} from "react";
import {useParams} from "react-router";


const ItemListContainer = (props) => {

    const {categoria} = useParams()

    const [cargandoText, setCargandoText] = useState('Cargando Productos');
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        setCargandoText("Cargando Productos")
        setProductos([])
        setTimeout(() => {
            setCargandoText('')
            obtenerData()
        }, 2000)

    }, [categoria]) //Al poner entre corchetes a categoria, react va a volver a llamar a este useEffect cuadno la categoria cambie

    const obtenerData = async () => {
        const dataUrl = await fetch('https://fakestoreapi.com/products/')
        const data = await dataUrl.json()
        let newData = []
        if(categoria) {
            for(const producto of data ) {
                if(producto.category === categoria)
                    newData.push(producto)
            }
        } else {
            newData = data
        }
        setProductos(newData)
    }

    return (
        <div className={styles.itemList}>
            <h2>{props.titulo}</h2>
            <p className={styles.cargando}>{cargandoText}</p>
            <Row>
                <ItemList productos={productos} />
            </Row>
        </div>
    )
}
export default ItemListContainer