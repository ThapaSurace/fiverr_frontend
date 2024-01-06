import axios from "axios";

const newRequest = axios.create({
    baseURL:"https://api-fiverr-5egd.onrender.com//api/",
    withCredentials: true
})

export default newRequest