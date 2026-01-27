import { getColors } from "@/api/color";
import { getCategories } from "@/api/category";
import { getBrands } from "@/api/brand";
import Link from "next/link";
import ColorFilter from "./ColorFilter";
import BrandFilter from "./BrandFilter";
import PriceFilter from "./PriceFilter";
import CategoryFilter from "./CategoryFilter";

const Filters = async () => {
    const categoryData = await getCategories({ status: true });
    const colorData = await getColors({ status: true });
    const brandData = await getBrands({ status: true });

    return (
        <aside className=" text-sm space-y-8 sticky top-20">

            {/* HEADER */}
            <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Filters</h3>
                <Link href="/products" className="text-xs text-blue-600 hover:underline">
                    Clear All
                </Link>
            </div>

            {/* CATEGORIES */}
            <CategoryFilter categories={categoryData.category} />

     

            {/* PRICE */}
            <PriceFilter />

    

            {/* COLOR */}
            <ColorFilter colorData={colorData} />

         

            {/* BRAND */}
            <BrandFilter brandData={brandData} />

        </aside>
    );
};

export default Filters;
