import React, { useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState } from "react";
import {collection, getDoc, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";
import ModalCargando from "../ModalCargando/ModalCargando";


const ItemDetailContainer = () => {

    const {id} =  useParams()

    const [showCargando, setShoeCargando] = useState(true)
    const [producto, setProducto] = useState({})

    useEffect(() => {

        setTimeout(() => {
            obtenerData(id)
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
        setShoeCargando(false)
    }

    return (
        <div>
            <ModalCargando show={showCargando} />
            <ItemDetail producto={producto} />
        </div>
    )
}

export default ItemDetailContainer