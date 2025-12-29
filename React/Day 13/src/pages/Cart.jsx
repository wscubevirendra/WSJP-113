import { useContext } from "react";
import { StoreContext } from "../Context";

export default function Cart() {
    const { cart, removeHandler, qtyHandler } = useContext(StoreContext)
    return (
        <div className="max-w-5xl mx-auto p-6">
            <h1 className="text-2xl font-bold mb-6">🛒 Shopping Cart</h1>


            {
                cart.map((item) => {
                    return (
                        <div key={item.id} className="space-y-4">
                            <div className="flex items-center gap-4 border rounded-2xl p-4 shadow-sm">
                                {/* Image */}
                                <img
                                    src={item.thumbnail}
                                    alt="Product"
                                    className="w-24 h-24 rounded-xl object-cover"
                                />

                                {/* Title & Price */}
                                <div className="flex-1">
                                    <h2 className="text-lg font-semibold">{item.title}</h2>
                                    <p className="text-gray-600">${item.price * item.qty}</p>
                                </div>

                                {/* Quantity */}
                                <div className="flex items-center gap-3 border rounded-xl px-3 py-1">
                                    <button onClick={() => qtyHandler(item.id,"dec")} className="text-lg font-bold">−</button>
                                    <span className="font-medium">{item.qty}</span>
                                    <button onClick={() => qtyHandler(item.id,"inc")} className="text-lg font-bold">+</button>
                                </div>

                                {/* Remove */}
                                <button onClick={() => removeHandler(item.id)} className="text-red-500 hover:text-red-700 font-medium">
                                    Remove
                                </button>
                            </div>

                        </div>
                    )
                })
            }


            {/* Summary */}
            <div className="mt-6 border-t pt-4 flex justify-between items-center">
                <h2 className="text-xl font-semibold">Total</h2>
                <h2 className="text-xl font-bold">₹ 26,999</h2>
            </div>

            <button className="mt-6 w-full bg-black text-white py-3 rounded-2xl hover:bg-gray-800">
                Checkout
            </button>
        </div>
    );
}
