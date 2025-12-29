import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
const StoreContext = createContext();

export default function Context({ children }) {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    async function fetchProducts() {
        const response = await axios.get("https://dummyjson.com/products");
        setProducts(response.data.products)
    }

    useEffect(
        () => {
            fetchProducts()
        },
        []
    )



    function addtoCart(id) {
        const item = products.find((prod) => prod.id === id)
        const isProductInCart = cart.find((prod) => prod.id == id)
        if (isProductInCart) {
            //qty increase
            const updateCart = cart.map(
                (cp) => {
                    return cp.id == id ? { ...cp, qty: cp.qty + 1 } : cp
                }
            )

            setCart(updateCart)
        } else {
            //new insert
            setCart([...cart, { ...item, qty: 1 }])
        }


    }


    function removeHandler(id) {
        const updateCart = cart.filter((prod) => prod.id !== id);
        setCart(updateCart)
    }

    function qtyHandler(id, flag) {
        let updateCart = [];

        if (flag === "inc") {
            updateCart = cart.map(
                (cp) => {
                    return cp.id == id ? { ...cp, qty: cp.qty + 1 } : cp
                }
            )
        } else {
            updateCart = cart.map(
                (cp) => {
                    return cp.id == id ? { ...cp, qty: cp.qty - 1 } : cp
                }
            )

        }

        setCart(updateCart)
    }



    return (
        <StoreContext.Provider value={{ addtoCart, cart, removeHandler, qtyHandler }}>
            {children}
        </StoreContext.Provider >
    )
}



export { StoreContext }