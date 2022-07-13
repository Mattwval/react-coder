import React from "react";
import styles from './ItemListContainer.module.css'
import ItemList from "../ItemList/ItemList";
import {Col, Row} from "react-bootstrap";
import {useState, useEffect} from "react";
import {useParams} from "react-router";
import {db} from '../../firebase-config'
import {collection,getDocs} from 'firebase/firestore'


const ItemListContainer = (props) => {
    

    const {categoria} = useParams()

    const [cargandoText, setCargandoText] = useState('Cargando Productos');
    const [productos, setProductos] = useState([]);
    const productosReference = collection(db, "items")

    useEffect(() => {
        /*setCargandoText("Cargando Productos")
        setProductos([])
        setTimeout(() => {
            setCargandoText('')
            obtenerData()
        }, 2000)*/
        
        const getProductos = async () => {
            const data = await getDocs(productosReference)
            setProductos(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
        getProductos()

    }, [categoria])

    /*const obtenerData = async () => {
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
    }*/

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