import React from "react";
import {createContext, useState} from "react";

export const cartContext = createContext();

const Provider = cartContext.Provider;

let productosName = []
let priceTotal = 0
let cantidadCartC = 0

const CartContext = ({children}) => {

    const [carrito, setCarrito] = useState("");
    const [cantidadTotal, setCantidadTotal] = useState(0);
    const [precioTotal, setPrecioTotal] = useState(0);
    const [cantidadCartf, setCantidadCartf] = useState(0)

    const addItem = (producto) => {

        if (!productosName.includes(producto)){
            setCarrito(producto)
            productosName.push(producto)
        }
    }
    const cartNumber = (cantidadCart, id) => {
        setCantidadCartf(cantidadCart)
        cantidadCartC += cantidadCart
    }
   /* const eliminarProducto = () => {
    }
    const actualizarProducto = () => {
    }
    const vaciarCarrito = (value) => {
        setCantidadTotal(value)
    }*/

    const cambiarPrecio = (nuevoPrecio, cantidad) => {
        setPrecioTotal(nuevoPrecio)
        priceTotal += nuevoPrecio * cantidad
    }

    const contextValue = {
        carrito: carrito,
        cantidadTotal: cantidadTotal,
        precioTotal: precioTotal,
        cantidadCart: cantidadCartC,
        cartNumber: cartNumber,
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