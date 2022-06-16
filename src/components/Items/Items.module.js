import React from "react";
import styles from './Items.module.css'
import Counter from '../Counter/Counter'

const ItemsModule = (props) => {
    return (
        <div>
            <img className={styles.itemImg} src={props.imgItem}/>
            <p>{props.description}</p>
            <Counter initial={1} stock={7} add={2}/>
        </div>
    )
}

export default ItemsModule