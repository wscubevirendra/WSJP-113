
import Breadcrumb from '@/components/website/global/Breadcrumb'
import React from 'react'
import CategoryCard from '@/components/website/Store/CategoryCard'
import { getCategories } from "@/api/category";
import Filters from '@/components/website/Store/Filters/Filters';
import BestSellerCard from '@/components/website/global/BestSellerCard';
import ProductsToolbar from '@/components/website/Store/Products/ProductsToolbar';
import Pagination from '@/components/website/Store/Products/Pagination';
import BestSellerRow from '@/components/website/global/BestSellerCard';



export default async function RootLayout({ children }) {
    const categoryData = await getCategories({ limit: 10, status: true, is_best: true });
    return (
        < >
            <section className="bg-[#f2f3f7] py-6">
                <div className="max-w-7xl mx-auto px-4">

                    <div>{/* Breadcrumb */}
                        <Breadcrumb />

                        {/* Title */}
                        <h2 className="text-lg font-semibold mb-4">
                            TOP CELL PHONES & TABLETS
                        </h2>
                    </div>

                    <div>
                        <div className="bg-white rounded-xl p-6">
                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

                                {/* Left Large Banner */}
                                <div className="lg:col-span-2 bg-[#a9adb6] rounded-xl relative overflow-hidden flex items-center">
                                    <div className="p-8 max-w-md z-10">
                                        <h3 className="text-3xl font-bold text-white leading-tight">
                                            Noise Cancelling
                                        </h3>
                                        <h4 className="text-2xl text-white font-light mb-4">
                                            Headphone
                                        </h4>

                                        <p className="text-white text-sm leading-relaxed">
                                            Boso Over-Ear Headphone <br />
                                            Wifi, Voice Assistant, <br />
                                            Low Latency Game Mode
                                        </p>

                                        <button className="mt-6 bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
                                            BUY NOW
                                        </button>
                                    </div>

                                    {/* Image */}
                                    <img
                                        src="https://images.unsplash.com/photo-1618367581583-1b6c5f5c3d7f"
                                        alt="Headphone"
                                        className="absolute right-0 top-0 h-full object-cover"
                                    />

                                    {/* Slider Indicator */}
                                    <div className="absolute bottom-4 right-6 bg-white text-xs px-3 py-1 rounded-full shadow">
                                        3 / 3
                                    </div>
                                </div>

                                {/* Right Small Banner */}
                                <div className="rounded-xl overflow-hidden bg-linear-to-b from-[#dcdff1] to-[#f3d7a6] p-6 flex flex-col justify-between">
                                    <div className="flex justify-between">
                                        <div>
                                            <h3 className="text-xl font-semibold leading-tight mb-2">
                                                redmi note 12 <br /> Pro+ 5g
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                Rise to the challenge
                                            </p>
                                        </div>
                                        <button className="bg-black max-w-50 max-h-10 text-white text-xs px-4 py-2 rounded-full hover:bg-gray-800 transition">
                                            SHOP NOW
                                        </button>
                                    </div>


                                    <div className="flex justify-between items-end mt-4">
                                        <img
                                            src="https://i.imgur.com/7Qp.png"
                                            alt="Phone"
                                            className="h-40 object-contain"
                                        />


                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="bg-[#f2f3f7] py-6">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="bg-white rounded-xl p-6">

                        {/* Section Title */}
                        <h3 className="text-sm font-semibold mb-6">
                            POPULAR CATEGORIES
                        </h3>

                        {/* Categories Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-6 gap-x-4">
                            {categoryData?.category.map((cat, index) => (
                                <CategoryCard
                                    key={index}
                                    name={cat.name}
                                    count={cat.count}
                                    path={categoryData?.imageBaseUrl + cat.image}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </section>
            <section className="bg-white py-10">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-12 gap-8">

                    {/* LEFT FILTERS */}
                    <aside className="col-span-12  lg:col-span-3">

                        <Filters />
                    </aside>

                    {/* RIGHT CONTENT */}
                    <main className="col-span-12 lg:col-span-9 space-y-8">
                        {/* <BestSellerRow /> */}
                        <ProductsToolbar />
                        {children}
                    </main>

                </div>
            </section>


        </>
    )
}
