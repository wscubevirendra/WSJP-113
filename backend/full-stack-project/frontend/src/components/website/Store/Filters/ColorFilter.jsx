'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import React from 'react'
import { Check } from 'lucide-react'

export default function ColorFilter({ colorData }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const urlColor = searchParams.get('color_ids')

    function handleColorClick(id) {
        const query = new URLSearchParams(searchParams.toString())

        if (urlColor === id) {
            query.delete('color_ids')
        } else {
            query.set('color_ids', id)
        }

        router.push(`?${query.toString()}`, { scroll: false })
    }

    return (
        <div className='bg-[#EEEFF6] rounded-2xl shadow-sm p-5'>
            <h4 className="font-medium text-gray-800 mb-4">By Color</h4>

            <div className="flex flex-wrap gap-3">
                {colorData.data.map((color) => {
                    const isActive = urlColor === color._id
                    return (
                        <button
                            key={color._id}
                            onClick={() => handleColorClick(color._id)}
                            title={color.name}
                            className={`
                                relative w-7 h-7 rounded-full border 
                                flex items-center justify-center
                                transition-all duration-200
                                hover:scale-110
                                ${isActive
                                    ? 'ring-2 ring-black scale-110'
                                    : 'hover:ring-1 hover:ring-gray-400'
                                }
                            `}
                            style={{ backgroundColor: color.code }}
                        >
                            {isActive && (
                                <Check
                                    size={14}
                                    className="text-white drop-shadow"
                                />
                            )}
                        </button>
                    )
                })}
            </div>
        </div>
    )
}
