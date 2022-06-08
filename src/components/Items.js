import React from "react";
import './styles/Items.css'
import {Col, Row} from "react-bootstrap";

const Items = (props) => {
    return (
        <Col className="item" xs="4">
                <img  className="itemImg" src={props.imgItem} />
        </Col>
    )
}
export default Items