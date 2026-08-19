import axios from "axios"
import axiosInstance from "../utils/axiosInstance"

export const createShortUrl = async (url,slug) => {
    
    const {data} = slug ? await axiosInstance.post("/api/create/customurl",{url,slug}) : await axiosInstance.post("/api/create",{url})
    return data.short_url
}