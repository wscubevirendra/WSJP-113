import { axiosAPIinstance } from "@/utils/helper"

const getCategories = (query = null) => {
    return axiosAPIinstance.get(`category?${query}`).then(
        (response) => {
            if (response.data.success == true) {
                return response.data
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