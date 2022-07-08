import React from "react";
import {createContext, useState} from "react";

export const cartContext = createContext();

const Provider = cartContext.Provider;

let productos = []

const CartContext = ({children}) => {

    const [cantidadItems, setCantidadItems] = useState(0)


    const addProducto = (nombre, precio, cantidad, id) => {

        if(productos.length === 0) {
            productos.push({
                nombre: nombre,
                precio: precio,
                cantidad: cantidad,
                id: id
            })
        } else {
            if((productos.find(item => item.nombre === nombre))) {
                 for(let i = 0; i < productos.length; i++) {
                    for(let j = 0; j < productos.length; j++) {
                        if(productos[i].nombre === nombre) {
                            productos[j].precio += precio * cantidad
                            productos[j].cantidad += cantidad
                        }
                    }
                }
            }
            else {
                productos.push({
                    nombre: nombre,
                    precio: precio,
                    cantidad: cantidad,
                    id: id
                })
            }
        }
        numberItems(productos)
    }

    const numberItems = (number) => {
        setCantidadItems(number.length)
    }

    const deleteItem = (id) => {
        let index
        for (let i = 0; i < productos.length; i++) {
            if(productos.id === id) {
                index = i
            }
            productos.splice(index, 1)
            break
        }

        numberItems(productos)
    }

    const contextValue = {
        addProducto: addProducto,
        cantidadItemsCart: cantidadItems,
        arrayProductos: productos,
        deleteItem: deleteItem
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartContext