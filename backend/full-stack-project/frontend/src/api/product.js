import { axiosAPIinstance } from "@/utils/helper"

const getProducts = () => {
    return axiosAPIinstance.get("product").then(
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