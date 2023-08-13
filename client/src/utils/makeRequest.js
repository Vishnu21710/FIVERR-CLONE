import axios from "axios";

const makeRequest = axios.create({
    baseURL: 'http://localhost:8080',
    withCredentials:true
})

export default makeRequest