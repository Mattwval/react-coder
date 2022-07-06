import React from "react";
import {createContext, useState} from "react";

export const cartContext = createContext();

const Provider = cartContext.Provider;

let productos = []

const CartContext = ({children}) => {

  /*  const [nombreProducto, setNombreProducto] = useState("");
    const [valorProducto, setValorProducto] = useState(0);*/
    const [cantidadItems, setCantidadItems] = useState(0)


    const addProducto = (nombre, precio, cantidad) => {

        if(productos.length === 0) {
            productos.push({
                nombre: nombre,
                precio: precio,
                cantidad: cantidad
            })
        } else {
            if(productos.find(item => item.nombre === nombre)) {
                productos.map((item, index) => {
                    if(productos[index].name === nombre){
                        productos[index].precio += precio
                        productos[index].cantidad += cantidad
                    }
                })
            }
            else {
                productos.push({
                    nombre: nombre,
                    precio: precio,
                    cantidad: cantidad
                })
            }
        }

        console.log(productos)
        numberItems()
    }

    const numberItems = (number) => {
        console.log(productos.length)
    }

    const contextValue = {
        addProducto: addProducto,
        productosList: productos,

    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartContext