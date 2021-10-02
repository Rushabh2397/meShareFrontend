import axios from 'axios'


export const registerUser = (data)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND}user/auth/register`,data)
}

export const login = (data)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND}user/auth/login`,data)
}

export const updateUserPassword = (data)=>{
    return axios.put(`${process.env.REACT_APP_BACKEND}user/api/change_password`,data)
}

export const getAllFiles = ()=>{
    return axios.get(`${process.env.REACT_APP_BACKEND}doc/api/get_all_files`)
}

export const uploadFile = (data)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND}doc/api/upload`,data)
}

export const addText = (data)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND}doc/api/add_text`,data)
}