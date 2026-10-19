import axios from "axios";

let API = axios.create({
    baseURL:"https://renderd-backend.onrender.com"
})

export default API;