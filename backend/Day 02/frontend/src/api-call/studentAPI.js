import axios from "axios"

async function getStudents() {
    try {
        const response = await axios.get("http://localhost:5000/student");
        return response.data
    } catch (error) {
        return []
    }
}


export { getStudents }