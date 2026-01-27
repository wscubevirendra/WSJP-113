'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function CategoryFilter({ categories }) {
    const pathname = usePathname();
    console.log(pathname)

    return (
        <div className='bg-[#EEEFF6] rounded-2xl shadow-sm  p-5'>
            <h4 className="font-medium text-gray-800 mb-3">Categories</h4>

            <Link href="/products">
                <button
                    className={`w-full mb-3 py-2 rounded-lg border transition font-medium
                        ${pathname === '/products'
                            ? 'bg-black text-white'
                            : 'bg-gray-50 hover:bg-gray-100'
                        }`}
                >
                    All Categories
                </button>
            </Link>

            <ul className="space-y-4 pr-1">
                {categories.map((cat) => {
                    const isActive = pathname === `/products/${cat.slug}`

                    return (
                        <Link key={cat._id} href={`/products/${cat.slug}`}>
                            <li
                                className={`
                                    flex items-center justify-between
                                    px-3 py-2 rounded-lg cursor-pointer transition
                                    ${isActive
                                        ? 'bg-black text-white'
                                        : 'text-gray-700 hover:bg-gray-100'
                                    }
                                `}
                            >
                                <span>{cat.name}</span>
                                <span>({cat.count})</span>
                            </li>
                        </Link>
                    )
                })}
            </ul>
        </div>
    )
}
