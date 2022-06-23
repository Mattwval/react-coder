import React from "react";
import Counter from "../Counter/Counter";
import styles from "./ItemDetail.css"

const ItemDetail = (props) => {

    return (
        <div className='mt-5'>
            <img src={props.producto.image} />
            <h4>{props.producto.title}</h4>
            <div className='description'>{props.producto.description}</div>
            <div className='price mt-2 mb-2'>precio ${props.producto.price} c/u</div>
            <Counter initial={1} stock={5} add={1}/>
        </div>

    )

}

export default ItemDetail