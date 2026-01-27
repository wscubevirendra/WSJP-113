import { axiosAPIinstance } from "@/utils/helper"

const getProducts = (queryObject = {}) => {
    const query = new URLSearchParams();
    if (queryObject.limit) {
        query.append("limit", queryObject.limit)
    }
    if (queryObject.status) {
        query.append("status", queryObject.status)
    }

    if (queryObject.home) {
        query.append("home", queryObject.home)
    }
    if (queryObject.stock) {
        query.append("stock", queryObject.stock)
    }
    if (queryObject.best_seller) {
        query.append("best_seller", queryObject.best_seller)
    }
    if (queryObject.is_top) {
        query.append("is_top", queryObject.is_top)
    }
    if (queryObject.featured) {
        query.append("featured", queryObject.featured)
    }

    if (queryObject.hot) {
        query.append("hot", queryObject.hot)
    }

    if (queryObject.categorySlug) {
        query.append("categorySlug", queryObject.categorySlug)
    }
    if (queryObject.color_ids) {
        query.append("color_ids", queryObject.color_ids)
    }

    if (queryObject.brandSlug) {
        query.append("brandSlug", queryObject.brandSlug)
    }

    if (queryObject.min_price && queryObject.max_price) {
        query.append("min_price", Number(queryObject.min_price))
        query.append("max_price", Number(queryObject.max_price))
    }

    if (queryObject.sort) {
        query.append("sort",queryObject.sort)

    }



    return axiosAPIinstance.get(`product/?${query.toString()}`).then(
        (response) => {
            if (response.data.success == true) {
                return response.data.data
            } else {
                return []
            }

        }
    ).catch(
        (error) => {
            return []
        }
    )
}

const getProductById = (id) => {
    return axiosAPIinstance.get(`product/${id}`).then(
        (response) => {
            if (response.data.success == true) {
                return response.data
            } else {
                return {}
            }

        }
    ).catch(
        (error) => {
            return {}
        }
    )
}




export { getProducts, getProductById }