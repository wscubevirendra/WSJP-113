import Pagination from '@/components/website/Store/Products/Pagination';
import { getProducts } from "@/api/product";
import ProductCard from '@/components/website/Store/Products/ProductCard';

export default async function page({ params, searchParams }) {
    const categorySlugPromise = await params;
    const categorySlug = categorySlugPromise.categorySlug;
    const promiseResolve = await searchParams;
    const color_ids = promiseResolve?.color_ids ?? null
    const brandSlug = promiseResolve?.brandSlug ?? null
    const min_price = promiseResolve?.min_price ?? null
    const max_price = promiseResolve?.max_price ?? null
    const limit = promiseResolve?.limit ?? null

    const productData = await getProducts({ status: true, categorySlug: categorySlug, color_ids: color_ids, brandSlug, min_price, max_price ,limit})
    return (
        < >
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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


