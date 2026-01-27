'use client'

import React from 'react'
import { useDispatch } from 'react-redux'
import { addtoCart } from '@/redux/features/cartSlice';

export default function CartBtn({ id, price, title }) {
    const dispacher = useDispatch();
    function addCartHandler() {
        dispacher(addtoCart({
            id, price, title, qty: 1
        }))
    }
    return (
        <button onClick={() => addCartHandler()} className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
            Add to Cart
        </button>
    )
}
