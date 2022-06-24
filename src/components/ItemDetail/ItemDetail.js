import React from "react";
import Counter from "../Counter/Counter";
import styles from "./ItemDetail.css"

const ItemDetail = ({producto, onAdd }) => {



    const itemAgregado = (cantidad) => {
        onAdd(cantidad)
    }

    return (
        <div className='mt-5'>
            <img src={producto.image} />
            <h4>{producto.title}</h4>
            <div className='description'>{producto.description}</div>
            <div className='price mt-2 mb-2'>precio ${producto.price} c/u</div>
            <Counter initial={1} stock={5} add={1} onAdd={itemAgregado}/>
        </div>

    )

}

export default ItemDetail