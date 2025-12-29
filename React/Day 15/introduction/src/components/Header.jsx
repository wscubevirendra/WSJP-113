import Link from 'next/link'
import React from 'react'

export default function Header() {
    const items = [
        {
            name: "Home",
            path: "/"
        },
        {
            name: "About",
            path: "/about"
        },
        {
            name: "Contact",
            path: "/contact"
        },
        {
            name: "Services",
            path: "/Services"
        }
    ]
    return (
        <div className='bg-teal-700 text-white px-4 py-6'>
            <ul className='flex gap-4'>
                {
                    items.map((item, index) => {
                        return <Link key={index} href={item.path}>{item.name}</Link>
                    })
                }

            </ul>
        </div>
    )
}
