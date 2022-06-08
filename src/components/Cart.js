import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './styles/Cart.css'

const Cart = (props) => {
    return (
        <div className="cart">
            <FontAwesomeIcon icon={ faShoppingCart }  size='3x' color={'green'} />
            <div className="productQuantitie">{props.items}</div>
        </div>
    )
}
export default Cart;