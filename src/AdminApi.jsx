import axios from "axios"

const adminApi= axios.create({
    baseURL:"http://localhost:8080/api/admin" ,
    withCredentials:true,
})
// "https://adab-backend.onrender.com/api/admin"
export default adminApi