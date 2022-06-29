import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { useContext} from "react";
import { cartContext } from "../../CartContext";

const Cart = (props) => {

    let result = useContext(cartContext)
    console.log(result.cantidadTotal) //Aca ud tenia result.cantidad_total, con guion bajo, ya vio?


    return (
        <div className="cart">
            <FontAwesomeIcon icon={ faShoppingCart }  size='3x' color={'green'} />
            <div className="productQuantitie">{result.cantidadTotal}</div>
            <div className="productQuantitie">{result.precioTotal}</div>
        </div>
    )
}
export default Cart;