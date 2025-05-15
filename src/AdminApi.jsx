import axios from "axios"

const adminApi= axios.create({
    baseURL: "https://adab-backend.onrender.com/api/admin",
    withCredentials:true,
})

export default adminApi