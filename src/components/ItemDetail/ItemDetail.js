import React from "react";
import Counter from "../Counter/Counter";

const ItemDetail = (props) => {

    return (
        <div>
            <img src={props.producto.image} />
            <p>{props.producto.title}</p>
            <p>{props.producto.price}</p>
            <Counter inicial={1} stock={5} add={1}/>
        </div>

    )

}

export default ItemDetail