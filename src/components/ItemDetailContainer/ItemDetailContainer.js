import React, { useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState } from "react";
import {collection, getDoc, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";
import {doc} from 'firebase/firestore'

const ItemDetailContainer = () => {

    const {id} =  useParams()

    const [cargando, setCargando] = useState("cargando producto")
    const [producto, setProducto] = useState({})

    useEffect(() => {

        setTimeout(() => {
            obtenerData(id)

        }, 2000)
    }, [])


    const obtenerData = async (id) => {
        const data = await getDoc(doc(db, "items", id))
        setProducto(data.data())
        setCargando("")
    }

    return (
        <div>
            {producto ? <ItemDetail producto={producto} /> : <h3>{cargando}</h3>}
        </div>
    )
}

export default ItemDetailContainer