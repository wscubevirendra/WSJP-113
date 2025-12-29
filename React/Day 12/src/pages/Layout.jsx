import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
    return (
        <div>
            <Header />
            <div className='grid grid-cols-6'>
                <div className='bg-teal-200 h-full'>
                 
                </div>
                <div className=' col-span-5'>
                    <Outlet />
                </div>

            </div>


            <Footer />
        </div>
    )
}
