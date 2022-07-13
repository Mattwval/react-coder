import React, {useContext} from "react";
import styles from './Item.css'
import { Link } from "react-router-dom";
import {cartContext} from "../../CartContext";

const Item = (props) => {

    return (

        <div className='mt-1'>
            <img src={props.producto.image}></img>
            <p>{props.producto.title}</p>
            <Link to={`/producto/${props.producto.id}`}>
                <button className='btn btn-secondary' >ver producto</button>
            </Link>

        </div>
    )
}

export default Item