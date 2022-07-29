import React, {useContext} from "react";
import styles from './Item.css'
import { Link } from "react-router-dom";
import {cartContext} from "../../CartContext";
import {Button, Card} from "react-bootstrap";

const Item = (props) => {

    return (

        <Card className='mt-1' className="cardItem">
            <img src={props.producto.image} />
            <p>{props.producto.title}</p>
            <Link to={`/producto/${props.producto.id}`} style={{width: "100%"}}>
                <Button variant="secondary">ver producto</Button>
            </Link>

        </Card>
    )
}

export default Item