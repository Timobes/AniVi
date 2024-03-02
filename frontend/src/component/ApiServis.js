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
export const auth = async (data) => {
    try {
        const response = await axiosInstance.post(`/api/auth/log`, data)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export const createAnime = async (data, config) => {
    try {
        const response = await axiosInstance.post(`/api/anime`, data, config)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export const getGenre = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/genre/anime/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export const createGenre = async (data) => {
    try {
        const response = await axiosInstance.post(`/api/genre/add`, data)
        return response.data
    } catch (e) {
        console.log(e)
    }
}
export const createEp = async (formData, config) => {
    try {
        const response = await axiosInstance.post(`/api/anime/series`, formData, config)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getFilterTags = async (name) => {
    try {
        const response = await axiosInstance.get(`/api/filter/tags/${name}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getAllTags = async () => {
    try {
        const response = await axiosInstance.get(`/api/genre`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getReview = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/review/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const createReview = async (data, id) => {
    try {
        const response = await axiosInstance.post(`/api/review/${id}`, data)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const delReview = async (id) => {
    try {
        const response = await axiosInstance.delete(`/api/review/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}

export const getUser = async (id) => {
    try {
        const response = await axiosInstance.get(`/api/users/${id}`)
        return response.data
    } catch (e) {
        console.log(e)
    }
}