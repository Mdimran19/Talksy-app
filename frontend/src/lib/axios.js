import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://talksy-app.onrender.com/api",
    withCredentials: true,
})
