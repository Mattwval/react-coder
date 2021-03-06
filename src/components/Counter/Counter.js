import React, {useContext} from 'react';
import {useState} from 'react';
import './Counter.css'
import {cartContext} from "../../CartContext";

const Counter = ({initial, stock, add, price, name, id}) => {

    let cart = useContext(cartContext)

    const [inputStock, setInputStock] = useState('1')
    const [cantidad, setCantidad] = useState(initial);
    const [showBtt, setShowBtt] = useState(false);

    const addPr = (num) => {
        setCantidad(cantidad + num)
    };

    return (
        <div className="count-container">
            <div className="contador-container">
                <button
                    className="contador"
                    onClick={() => addPr(-1)}
                    disabled={cantidad === initial}
                > -
                </button>
                <span className="cantidad-container">{cantidad}</span>
                <button className="contador"
                        onClick={() => addPr(+1)}
                        disabled={cantidad === stock}
                > +
                </button>
            </div>

            <button className="button-primary"
                    onClick={() => {
                        add = cantidad;
                        setShowBtt(true)
                        cart.addProducto(name, price, cantidad, id)
                    }}
                    disabled={stock === 0}
            >
                Añadir
            </button>
            <div>
                unidades disponibles {stock}
            </div>
        </div>


    )

}

export default Counter