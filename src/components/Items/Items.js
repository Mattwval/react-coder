import React from "react";
import './Items.css'
import {Col, Row} from "react-bootstrap";
import Counter from '../Counter/Counter'

const Items = (props) => {
    return (
        <Col className="item" xs="4">
                <img  className="itemImg" src={props.imgItem} />
                <Counter initial={1} stock={7} add={2}/>
        </Col>
    )
}
export default Items