'use client'
import React, { useEffect, useState } from 'react'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';

export default function PriceFilter() {
    const router = useRouter()
    const searchParams = useSearchParams()
    const [price, setPrice] = useState([300, 80000]);

    function priceHandler(data) {
        const query = new URLSearchParams(searchParams.toString())
        setPrice(data);
        query.set('min_price', data[0])
        query.set('max_price', data[1])
        router.push(`?${query.toString()}`)

    }

    useEffect(
        () => {
            const min = searchParams.get('min_price') ?? 300;
            const max = searchParams.get('max_price') ?? 80000;
            setPrice([Number(min), Number(max)]);

        },
        [searchParams]
    )


    return (
        <div className='bg-[#EEEFF6] rounded-2xl shadow-sm  p-5'>
            <h4 className="font-semibold mb-3">BY PRICE</h4>

            <div className="relative h-2 bg-gray-300 rounded mb-3">
                <RangeSlider min="300" max="80000" value={price} onInput={priceHandler} />
            </div>

            <div className="flex items-center gap-2">
                <input
                    className="w-full border rounded px-2 py-1"
                    value={price[0]}
                    readOnly
                />
                <span>-</span>
                <input
                    className="w-full border rounded px-2 py-1"
                    value={price[1]}
                    readOnly
                />
                <button className="bg-green-500 text-white px-3 py-1 rounded">
                    Go
                </button>
            </div>
        </div>
    )
}
