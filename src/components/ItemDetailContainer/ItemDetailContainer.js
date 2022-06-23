import React, { useEffect } from "react";
import { useParams } from "react-router";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useState } from "react";

const ItemDetailContainer = () => {

    const {id} =  useParams()

    const [cargando, setCargando] = useState("cargando producto")
    const [producto, setProducto] = useState()

    useEffect(() => {

        setTimeout(() => {
            setCargando("")
            obtenerData()

        }, 2000)
    }, [])

    const obtenerData = async () => {
        const dataUrl = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await dataUrl.json()
        setProducto((data))
    }

    return (
        <div>
            {producto ? <ItemDetail producto={producto} /> : <h3>{cargando}</h3>}
        </div>
    )
}

export default ItemDetailContainer