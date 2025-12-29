'use client'

import React from 'react'

export default function CartBtn({id}) {
    function addtoCart(id) {
        console.log(id, "Item add in card")
    }
    return (
        <button onClick={() => addtoCart(id)} className="bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700 transition">
            Add to Cart
        </button>
    )
}
