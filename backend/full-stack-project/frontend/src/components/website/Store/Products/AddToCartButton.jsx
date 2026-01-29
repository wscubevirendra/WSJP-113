'use client'

import { addToCart, changeQuantity } from '@/redux/reducers/cartReducer'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

export default function AddToCartButton(props) {
    const { data: cart_data } = useSelector((store) => store.cart);
    console.log(cart_data)
    const dispached = useDispatch()

    function addToCartHandler() {
        dispached(addToCart({ ...props }))
    }

    const findItem = cart_data.find((cartItem) => cartItem.id == props.id);

    function quantityHandler(id, flag) {
        dispached(changeQuantity({ id, flag }))
    }

    return (
        <div className=" p-3 bg-white ">
            {
                findItem != null ? (
                    <div className='flex  gap-6'>
                        <button
                            onClick={() => quantityHandler(props.id, 2)}
                            className="w-20 bg-teal-500 text-white hover:bg-teal-700 py-1 rounded-lg text-sm font-medium transition"
                        >
                            -
                        </button>
                        <h3>{findItem.qty}</h3>
                        <button
                            onClick={() => quantityHandler(props.id, 1)}
                            className="w-20 bg-teal-500 text-white hover:bg-teal-700 py-1 rounded-lg text-sm font-medium transition"
                        >
                            +
                        </button>
                    </div>

                ) : (
                    <button
                        onClick={addToCartHandler}
                        className="w-full bg-teal-500 text-white hover:bg-teal-700 py-2 rounded-lg text-sm font-medium transition"
                    >
                        Add to Cart
                    </button>
                )
            }

        </div >
    )
}
