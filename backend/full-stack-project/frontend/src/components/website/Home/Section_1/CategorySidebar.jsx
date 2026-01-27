import { getCategories } from '@/api/category'
import Link from 'next/link';
import {
    FiMonitor,
    FiCpu,
    FiSmartphone,
    FiTablet,
    FiCamera,
} from 'react-icons/fi'

const categoryIcons = {
    Laptops: <FiMonitor size={18} />,
    'PC & Computers': <FiCpu size={18} />,
    'Cell Phones': <FiSmartphone size={18} />,
    Tablets: <FiTablet size={18} />,
    Cameras: <FiCamera size={18} />,
}

export default async function CategorySidebar() {
    const categoryData = await getCategories({ limit: 5, status: true, home: true });
    return (
        <aside className="lg:col-span-1 bg-white rounded-xl shadow-sm p-4">
            <h3 className="text-lg font-semibold mb-4">Category</h3>

            <ul className="space-y-3">
                {
                    categoryData?.category.map((cat) => (
                        <Link href={`/products/${cat.slug}`} key={cat._id}>
                            <li

                                className="flex items-center justify-between px-4 py-3 rounded-lg border hover:border-teal-500 transition cursor-pointer"
                            >
                                <div className="flex items-center gap-3">
                                    <span className="text-teal-500">
                                        <img className="w-5 rounded-md h-5" src={categoryData?.imageBaseUrl + cat.image} alt={cat.name} />
                                    </span>

                                    <span className="text-sm font-medium">{cat.name}</span>
                                </div>

                                <span className="text-xs bg-teal-100 text-teal-600 w-6 h-6 flex items-center justify-center rounded-full">
                                    {cat.count}
                                </span>
                            </li>
                        </Link>

                    ))}
            </ul>
        </aside>
    )
}

