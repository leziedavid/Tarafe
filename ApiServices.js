/**
 * Created by Zura on 12/25/2021.
 */
import axios from "axios";
import router from "./src/router/index.js";

const axiosClient = axios.create({
    //    baseURL: `${import.meta.env.API_BASE_URL}/`
         baseURL:"https://tarafe.tarafe.com/"
        //  baseURL:`http://127.0.0.1:8000/`
        //    baseURL: `http://localhost:8000/`
})


axiosClient.interceptors.request.use(config => {

    config.headers.Authorization = `Bearer ${localStorage.getItem("auth_users")}`
    return config;
})

axiosClient.interceptors.response.use(response => {
    return response;

}, error => {

    if (error.response.status === 401) {

        localStorage.removeItem('TOKEN')
        router.push({ name: 'Login' })

    } else if (error.response.status === 404) {
        router.push({ name: 'NotFound' })
    }
    return error;
})

export default axiosClient;