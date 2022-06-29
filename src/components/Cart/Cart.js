import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Cart.css'
import { useContext} from "react";
import { cartContext } from "../../CartContext";

const Cart = () => {

    let cartCantidad = useContext(cartContext)

    return (
        <div className="cart">
            <FontAwesomeIcon icon={ faShoppingCart }  size='3x' color={'green'} />
            <div className="productQuantitie">{cartCantidad.cantidadCart}</div>
        </div>
    )
}
export default Cart;