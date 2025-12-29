import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



export default function Details() {
    const [product, setProduct] = useState({})
    const { id } = useParams();


    useEffect(
        () => {
            axios.get(`https://dummyjson.com/products/${id}`).then(
                (response) => {
                    
                    setProduct(response.data)
                }
            ).catch(
                (error) => {
                    setProduct({})
                }
            )
        },
        [id]
    )


    return (
        <div className="max-w-6xl mx-auto px-6 py-10">
            {/* Product Section */}
            <div className="grid md:grid-cols-2 gap-10">
                {/* Image */}
                <div className="bg-white rounded-xl shadow p-6">
                    <img
                        src={product?.thumbnail}
                        alt={product.title}
                        className="w-full h-96 object-contain"
                    />
                </div>

                {/* Info */}
                <div>
                    <span className="text-sm text-pink-600 font-semibold uppercase">
                        {product.category}
                    </span>

                    <h1 className="text-3xl font-bold mt-2">{product.title}</h1>

                    <p className="text-gray-600 mt-4">{product.description}</p>

                    {/* Price */}
                    <div className="mt-5 flex items-center gap-4">
                        <span className="text-3xl font-bold text-green-600">
                            ${product.price}
                        </span>
                        <span className="text-sm bg-red-100 text-red-600 px-3 py-1 rounded-full">
                            {product.discountPercentage}% OFF
                        </span>
                    </div>

                    {/* Rating */}
                    <p className="mt-3 text-yellow-500">
                        ⭐ {product.rating} / 5
                    </p>

                    {/* Availability */}
                    <p className="mt-2 text-sm text-gray-700">
                        <strong>Status:</strong>{" "}
                        <span className="text-green-600">{product.availabilityStatus}</span>
                    </p>

                    <p className="mt-1 text-sm text-gray-700">
                        <strong>Stock:</strong> {product.stock} units
                    </p>

                    <p className="mt-1 text-sm text-gray-700">
                        <strong>Brand:</strong> {product.brand}
                    </p>

                    {/* Buttons */}
                    <div className="mt-6 flex gap-4">
                        <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-3 rounded-lg">
                            Add to Cart
                        </button>
                        <button className="border border-pink-600 text-pink-600 px-6 py-3 rounded-lg hover:bg-pink-50">
                            Buy Now
                        </button>
                    </div>

                    {/* Extra Info */}
                    <div className="mt-6 text-sm text-gray-600 space-y-1">
                        <p>🚚 {product.shippingInformation}</p>
                        <p>🛡 {product.warrantyInformation}</p>
                        <p>↩ {product.returnPolicy}</p>
                        <p>📦 Minimum Order: {product.minimumOrderQuantity}</p>
                    </div>
                </div>
            </div>

            {/* Reviews Section */}
            <div className="mt-12">
                <h2 className="text-2xl font-bold mb-4">Customer Reviews</h2>

                <div className="space-y-4">
                    {product?.reviews?.map((review, index) => (
                        <div
                            key={index}
                            className="bg-white shadow rounded-lg p-4"
                        >
                            <p className="text-yellow-500">⭐ {review.rating} / 5</p>
                            <p className="text-gray-700 mt-1">{review.comment}</p>
                            <p className="text-sm text-gray-500 mt-2">
                                — {review.reviewerName}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
