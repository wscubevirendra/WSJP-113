
import Pagination from '@/components/website/Store/Products/Pagination';
import { getProducts } from "@/api/product";
import ProductCard from '@/components/website/Store/Products/ProductCard';

export default async function page({ searchParams }) {
    const promiseResolve = await searchParams;
    console.log(promiseResolve)
    const color_ids = promiseResolve?.color_ids ?? null
    const brandSlug = promiseResolve?.brandSlug ?? null
    const min_price = promiseResolve?.min_price ?? null
    const max_price = promiseResolve?.max_price ?? null
    const sort = promiseResolve?.sort ?? null
    const limit = promiseResolve?.limit ?? null;
    const productData = await getProducts({ status: true, color_ids, brandSlug, min_price, max_price, limit, sort })
    return (
        < >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {
                    productData?.product.length > 0
                        ?
                        productData.product.map((product) => (
                            <ProductCard product={product} imageBaseUrl={productData.imageBaseUrl} key={product._id} />
                        ))
                        :
                        <h2>No Product Found</h2>
                }
            </div>
            <Pagination />

        </>
    )
}


