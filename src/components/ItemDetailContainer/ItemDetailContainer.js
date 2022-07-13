import React, { useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState } from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";
import {doc} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const {id} =  useParams()

    const [cargando, setCargando] = useState("cargando producto")
    const [producto, setProducto] = useState({})
    /*const productosReference = collection(db, "items")*/

    useEffect(() => {

        setTimeout(() => {
            setCargando("")
            obtenerData(id)

        }, 2000)
    }, [])

    /*const obtenerData = async () => {
        const dataUrl = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await dataUrl.json()
        setProducto((data))
    }*/

    /*const obtenerData = async () => {
        const data = await getDocs(productosReference);
        setProducto(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
    }*/

    const obtenerData = async (id) => {
        const data = doc(db, "items", id)
        console.log(data)
        setProducto(data)
    }

    return (
        <div>
            {producto ? <ItemDetail producto={producto} /> : <h3>{cargando}</h3>}
        </div>
    )
}

export default ItemDetailContainer