import { axiosAPIinstance } from "@/utils/helper"

const getCategories = (queryObject = {}) => {
   
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
    if (queryObject.is_top) {
        query.append("is_top", queryObject.is_top)
    }
    if (queryObject.is_best) {
        query.append("is_best", queryObject.is_best)
    }

    return axiosAPIinstance.get(`category/?${query.toString()}`).then(
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

const getCategoryById = (id) => {
    return axiosAPIinstance.get(`category/${id}`).then(
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


export { getCategories, getCategoryById }