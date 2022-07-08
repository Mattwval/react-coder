import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { useContext} from "react";
import { cartContext } from "../../CartContext";

const Cart = () => {

    let cart = useContext(cartContext)

    return (
        <div className="cart">
            <FontAwesomeIcon icon={ faShoppingCart }  size='3x' color={'green'} />
            <div className="productQuantitie">{cart.cantidad}</div>
        </div>
    )
}
export default Cart;