import React from 'react';
import {useState} from 'react';
import './Counter.css'

const Counter = ({initial, stock, add}) => {

    const [InputStock, setInputStock] = useState('1')
    const [Cant, setCant] = useState(initial);
    const [ShowBtt, setShowBtt] = useState(false);

    const addPr = (num) => {
        setCant(Cant + num)
    };


    return (
        <div className="count-container">
            <div className="contador-container">
                <button
                    className="contador"
                    onClick={() => addPr(-1)}
                    disabled={Cant === initial}
                    > -
                </button>
                <span className="cantidad-container">{Cant}</span>
                <button className="contador"
                        onClick={() => addPr(+1)}
                        disabled={Cant === stock}
                > +
                </button>
            </div>

            <button className="button-primary"
                    onClick={() => {add = Cant; setShowBtt(true)
                    return (
                        Cant
                    )}}
                    disabled={stock === 0 ? true : false}
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