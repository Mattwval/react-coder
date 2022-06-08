import React from "react";
import './styles/ItemList.css'
import Items from "./Items";
import {Row} from "react-bootstrap";

const ItemListContainer = (props) => {

    return (
        <div className="itemList">
            <h2>{props.productos}</h2>
            <Row className="items">
                <Items imgItem="https://cdn.shopify.com/static/sample-images/shoes.jpeg?"/>
                <Items imgItem="https://cdn.shopify.com/static/sample-images/garnished.jpeg?" />
                <Items imgItem="https://cdn.shopify.com/static/sample-images/shoes.jpeg?" />
            </Row>
        </div>
    )
}
 export default ItemListContainer