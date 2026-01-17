import { axiosAPIinstance } from "@/utils/helper"

const getBrands = () => {
    return axiosAPIinstance.get("brand").then(
        (response) => {
            return response.data
        }
    ).catch(
        (error) => {
            return null
        }
    )
}

const getBrandById = (id) => {
    return axiosAPIinstance.get(`brand/${id}`).then(
        (response) => {
            return response.data
        }
    ).catch(
        (error) => {
            return null
        }
    )
}


export { getBrands, getBrandById }