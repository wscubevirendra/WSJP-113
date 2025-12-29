import React, { use, useEffect, useState } from 'react'
import axios from 'axios'
import ProductCard from '../components/ProductCard'
import ProductSkeletonCard from '../components/ProductSkeletonCard'
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    const { slug } = useParams()
    const [products, setProducts] = useState([]);
    const [categories, setcategories] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(
        () => {
            axios.get("https://dummyjson.com/products/categories").then(
                (response) => {
                    setcategories(response.data)
                }
            ).catch(
                (error) => {
                    setcategories([])
                }
            )

        },
        []
    )

    useEffect(
        () => {
            let API = ""
            if (slug) {
                API = `https://dummyjson.com/products/category/${slug}`
            } else {
                API = "https://dummyjson.com/products"

            }
            setLoading(true)
            axios.get(API).then(
                (response) => {
                    setProducts(response.data.products)
                }
            ).catch(
                (error) => {
                    console.log(error)
                }
            ).finally(
                () => {
                    setLoading(false)
                }
            )
        },
        [slug]
    )
    return (
        <div className='max-w-[1400px] px-4 grid grid-cols-6 gap-5 mx-auto px-1 py-6'>
            <div>
                <ul>
                    <Link to="/">
                        <li className={` ${slug == null ? "bg-green-500 font-bold scale-105" : "bg-teal-500"} cursor-pointer py-3 my-2 text-center text-white rounded-2xl`}>All</li>
                    </Link>
                    {
                        categories.map((cat) => {
                            return (
                                <Link to={`/${cat.slug}`}>
                                    <li className={` ${cat.slug == slug ? "bg-green-500 font-bold scale-85" : "bg-teal-400"} cursor-pointer py-3 my-2 text-center text-white rounded-2xl`}>{cat.name}</li>
                                </Link>

                            )
                        })
                    }

                </ul>
            </div>
            <div className='col-span-5'>
                <div className="grid grid-cols-4 gap-2">
                    {
                        loading ?
                            [1, 2, 3, 3, 4, 4, 5, 5].map(() => <ProductSkeletonCard />)
                            :
                            products.map((prod) => {
                                return <ProductCard key={prod.id} id={prod.id} title={prod.title} thumbnail={prod.thumbnail} price={prod.price} />
                            })

                    }

                </div>

            </div>

        </div>
    )
}
