'use client'

import React from "react";
import Image from "next/image";
import { FaMinus, FaPlus } from "react-icons/fa";
import { useSelector } from "react-redux";
import { formatIndianCurrency } from "@/utils/helper";

/* ================= Breadcrumb ================= */
const Breadcrumb = () => {
    return (
        <section className="bg-[#f2f3f7] py-4">
            <div className="max-w-7xl mx-auto px-4">
                <div className="bg-white rounded-xl px-5 py-3 text-sm text-gray-600">
                    Home / Shop / Top Cell Phones & Tablets /{" "}
                    <span className="text-black font-medium">
                        Samsung Galaxy X6 Ultra LTE 4G/128 GB
                    </span>
                </div>
            </div>
        </section>
    );
};

/* ================= Cart Item ================= */
const CartItem = ({
    title,
    price,
    image,
    qty
}) => {
    return (
        <div className="bg-gray-50 rounded-xl p-6 flex gap-6">

            {/* Image */}
            <div className="relative w-32 h-32 bg-white rounded-lg p-2">

                <img
                    src={image}
                    alt={title}
                    className="object-contain"
                />
            </div>

            {/* Details */}
            <div className="flex-1 space-y-3">
                <h4 className="font-medium">{title}</h4>
                <p className="text-red-600 font-semibold">{formatIndianCurrency(price * qty)}</p>

                {/* Quantity */}
                <div className="flex items-center gap-3 border rounded-md w-max px-3 py-1">
                    <FaMinus className="cursor-pointer" />
                    <span>{qty}</span>
                    <FaPlus className="cursor-pointer" />
                </div>

                {/* Tags
                <div className="flex flex-wrap gap-2 text-xs">
                    {/* <span className="bg-green-100 text-green-600 px-2 py-1 rounded">
                        {shipping}
                    </span> */}
                {/* 
                {extra && (
                    <span className="bg-red-100 text-red-600 px-2 py-1 rounded">
                        {extra}
                    </span>
                )} */}
                {/* </div>  */}

                {/* {stock && (
                    <p className="text-sm text-green-600">● In stock</p>
                )} */}
            </div>

            {/* Color dots */}
            <div className="flex flex-col gap-2">
                <span className="w-4 h-4 rounded-full bg-gray-300"></span>
                <span className="w-4 h-4 rounded-full bg-pink-200"></span>
            </div>
        </div>
    );
};



/* ================= Main Cart Page ================= */
export default function CartPage() {
    const cart = useSelector((store) => store.cart);
    return (
        <>
            <Breadcrumb />

            <section className="bg-white py-10">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                        {/* Cart Items */}
                        <div className="lg:col-span-8 space-y-6">
                            {
                                cart.data.length > 0

                                    ?
                                    cart.data.map((item) => {
                                        return (
                                            <CartItem
                                                key={item.id}
                                                badge="SAVE $199.00"
                                                title={item.name}
                                                price={item.final_price}
                                                image={item.image}
                                                qty={item.qty}

                                            />
                                        )
                                    })
                                    :
                                    <h2 className="text-3xl text-black font-medium">Empty Cart</h2>


                            }

                        </div>

                        {/* Order Summary */}
                        <div className="lg:col-span-4">
                            <div className="border border-green-400 rounded-xl p-6 sticky top-24">
                                <h3 className="font-semibold mb-6">Order Summary</h3>

                                <div className="space-y-4 text-sm">
                                    <div className="flex justify-between">
                                        <span>original Total:</span>
                                        <span>{formatIndianCurrency(cart.original_total)}</span>
                                    </div>

                                    <div className="flex justify-between">
                                        <span>Saving:</span>
                                        <span>{formatIndianCurrency((cart.original_total) - (cart.final_total))}</span>
                                    </div>



                                    <hr />

                                    <div className="flex justify-between font-semibold">
                                        <span>ORDER TOTAL:</span>
                                        <span>{formatIndianCurrency(cart.final_total)}</span>
                                    </div>
                                </div>

                                <button className="mt-6 w-full bg-teal-600 text-white py-3 rounded-lg font-medium">
                                    CHECKOUT
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
}
