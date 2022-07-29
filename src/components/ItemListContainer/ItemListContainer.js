import React from "react";
import styles from './ItemListContainer.module.css'
import ItemList from "../ItemList/ItemList";
import {Col, Container, Row} from "react-bootstrap";
import {useState, useEffect} from "react";
import {useParams} from "react-router";
import {db} from '../../firebase-config'
import {collection,getDocs, doc, getDoc} from 'firebase/firestore'


const ItemListContainer = (props) => {
    

    const {categoria} = useParams()

    const [cargandoText, setCargandoText] = useState('Cargando Productos');
    const [productos, setProductos] = useState([]);
    const productosReference = collection(db, "items")

    const getProductos = async () => {
        const data = await getDocs(productosReference)
        if (categoria) {
            let items = [];
            const dataByCategory = data.docs
            for (let i = 0; i < dataByCategory.length; i++ ) {
                if(dataByCategory[i].data().category === categoria) {
                    items.push(dataByCategory[i].data())
                }
            }
            setProductos(items)
        }else {
            setProductos(data.docs.map((doc) => ({...doc.data(), id: doc.id})));
        }
    }


    useEffect(() => {
        setCargandoText("Cargando Productos")
        setProductos([])
        setTimeout(() => {
            getProductos()
            setCargandoText('')
        }, 2000)
        



    }, [categoria])


    return (
        <Container className={styles.itemList}>
            <h2>{props.titulo}</h2>
            <p className={styles.cargando}>{cargandoText}</p>
            <Row>
                <ItemList productos={productos} />
            </Row>
        </Container>
    )
}
export default ItemListContainer