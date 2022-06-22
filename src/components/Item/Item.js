import React from "react";
import styles from './Item.css'

const Item = (props) => {
    return (
        <div>
            <img src={props.producto.img}></img>
            <p>{props.producto.description}</p>
            <button>ver detalles</button>
        </div>
    )
}

export default Item