import React from "react";
import {createContext, useState} from "react";

export const cartContext = createContext();

const Provider = cartContext.Provider;

let productosName = []
let priceTotal = 0

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState("");
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);

    const addItem = (producto) => {

        if (!productosName.includes(producto)){
            setCarrito(producto)
            productosName.push(producto)
        }
    }
   /* const eliminarProducto = () => {
    }
    const actualizarProducto = () => {
    }
    const vaciarCarrito = (value) => {
        setCantidadTotal(value)
    }*/

    const cambiarPrecio = (nuevoPrecio) => {
        setPrecioTotal(nuevoPrecio)
        priceTotal += precioTotal
        console.log(priceTotal)
    }

    const contextValue = {
        carrito: carrito,
        cantidadTotal: cantidadTotal,
        precioTotal: precioTotal,
        agregarProducto: addItem,
        cambiarPrecio: cambiarPrecio
        /*eliminarProducto: eliminarProducto,
        actualizarProducto: actualizarProducto,
        vaciarCarrito: vaciarCarrito,
        cambiarPrecio: cambiarPrecio*/
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartContext