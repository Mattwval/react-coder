import React from "react";
import {createContext, useState} from "react";

export const cartContext = createContext();

const Provider = cartContext.Provider;


const CartContext = ({children}) => {

    const [productos, setProductos] = useState([]);

    const addProducto = (nombre, precio, cantidad, id) => {

        let arrayProductos = [...productos]

        if (arrayProductos.length === 0) {
            arrayProductos.push({
                nombre: nombre,
                precio: precio * cantidad,
                cantidad: cantidad,
                id: id
            })
        } else {
            if ((arrayProductos.find(item => item.nombre === nombre))) {
                for (let i = 0; i < arrayProductos.length; i++) {
                    for (let j = 0; j < arrayProductos.length; j++) {
                        if (arrayProductos[i].nombre === nombre) {
                            arrayProductos[j].precio += precio * cantidad
                            arrayProductos[j].cantidad += cantidad
                        }
                    }
                }
            } else {
                arrayProductos.push({
                    nombre: nombre,
                    precio: precio * cantidad,
                    cantidad: cantidad,
                    id: id
                })
            }
        }
        setProductos(arrayProductos)
    }


    const deleteItem = (id) => {
        let arrayProductos = [...productos];

        let index


        for (let i = 0; i < arrayProductos.length; i++) {
            if (arrayProductos[i].id === id) {
                index = i
                arrayProductos.splice(index, 1)
                break
            }
        }
        setProductos(arrayProductos);
    }

    const contextValue = {
        addProducto: addProducto,
        arrayProductos: productos,
        cantidad: productos.length,
        deleteItem: deleteItem
    }

    return (
        <Provider value={contextValue}>
            {children}
        </Provider>
    )
}

export default CartContext