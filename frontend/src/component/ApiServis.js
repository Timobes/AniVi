import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-Type": "application/json",
    }
})

export const allAnime = async () => {
    try {
        const response = await axiosInstance.get(`/api/anime`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getOneAnime = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/anime/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getEp = async (id) => {
    try{
        const response = await axiosInstance.get(`/api/anime/ep/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const reg = async (data) => {
    try {
        const response = await axiosInstance.post(`/api/auth/reg`, data)
        return response.data
    } catch (e) {
        console.log(e)
    }
}