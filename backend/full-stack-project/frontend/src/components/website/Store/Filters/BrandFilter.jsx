'use client'

import { useSearchParams, useRouter } from 'next/navigation'
import { Check } from 'lucide-react'

export default function BrandFilter({ brandData }) {
    const router = useRouter()
    const searchParams = useSearchParams()
    const userSelBrand = searchParams.get('brandSlug') // directly from URL

    function handleBrandClick(slug) {
        const query = new URLSearchParams(searchParams.toString())

        if (userSelBrand === slug) {
            query.delete('brandSlug')
        } else {
            query.set('brandSlug', slug)
        }

        router.push(`?${query.toString()}`, { scroll: false })
    }

    function clearBrand() {
        const query = new URLSearchParams(searchParams.toString())
        query.delete('brandSlug')
        router.push(`?${query.toString()}`)
    }

    return (
        <div className='bg-[#EEEFF6] rounded-2xl shadow-sm p-5'>
            <h4 className="font-medium text-gray-800 mb-4">Brands</h4>

            {/* ALL BRANDS */}
            <button
                onClick={clearBrand}
                className={`w-full mb-3 py-2 rounded-lg border transition
                    ${!userSelBrand
                        ? 'bg-teal-500 text-white'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
            >
                All Brands
            </button>

            {/* BRAND LIST */}
            <ul className="space-y-1 max-h-52 overflow-auto pr-1">
                {brandData.data.map((brand) => {
                    const isActive = userSelBrand === brand.slug

                    return (
                        <li
                            key={brand._id}
                            onClick={() => handleBrandClick(brand.slug)}
                            className={`
                                flex items-center justify-between
                                px-3 py-2 rounded-lg cursor-pointer
                                transition-all
                                ${isActive
                                    ? 'bg-teal-500 text-white'
                                    : 'text-gray-700 hover:bg-gray-100'
                                }
                            `}
                        >
                            <span>{brand.name}</span>
                            <span>({brand.count})</span>
                            {isActive && <Check size={14} />}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
