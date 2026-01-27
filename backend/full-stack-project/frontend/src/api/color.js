import { axiosAPIinstance } from "@/utils/helper"

const getColors = (queryObject = {}) => {
    const query = new URLSearchParams();
    if (queryObject.limit) {
        query.append("limit", queryObject.limit)
    }

    if (queryObject.status) {
        query.append("status", queryObject.status)
    }

    return axiosAPIinstance.get(`color/?${query.toString()}`).then(
        (response) => {
            return response.data
        }
    ).catch(
        (error) => {
            return null
        }
    )
}

const getColorById = (id) => {
    return axiosAPIinstance.get(`color/${id}`).then(
        (response) => {
            return response.data
        }
    ).catch(
        (error) => {
            return null
        }
    )
}


export { getColors, getColorById }