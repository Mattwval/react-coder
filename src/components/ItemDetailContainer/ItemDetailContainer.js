import React, { useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState } from "react";
import {collection, getDoc, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";


const ItemDetailContainer = () => {

    const {id} =  useParams()

    const [cargando, setCargando] = useState("cargando producto")
    const [producto, setProducto] = useState({})

    useEffect(() => {

        setTimeout(() => {
            obtenerData(id)
            setCargando("")
        }, 2000)
    }, [])


    const obtenerData = async (id) => {

        const data = await getDocs(collection(db, "items"))
        const dataDocs = data.docs
        let producto = {}
        for (let i = 0; i < dataDocs.length; i++) {
            if(dataDocs[i].data().id == id) {
                producto = dataDocs[i].data()
            }
        }
        setProducto(producto)
    }

    return (
        <div>
            {producto ? <ItemDetail producto={producto} /> : <h3>{cargando}</h3>}
        </div>
    )
}

export default ItemDetailContainer