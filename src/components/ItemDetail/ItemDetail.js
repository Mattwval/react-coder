import React, {useContext} from "react";
import Counter from "../Counter/Counter";

const ItemDetail = ({producto}) => {

    return (
        <div className='mt-5'>
            <img src={producto.image} />
            <h4>{producto.title}</h4>
            <div className='description'>{producto.description}</div>
            <div className='price mt-2 mb-2'>precio ${producto.price} c/u</div>
            <Counter initial={1} stock={5} add={1} price={producto.price} name={producto.title} id={producto.id}/>
        </div>
    )
}

export default ItemDetail