import axios from 'axios'


export const registerUser = (data)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND}user/auth/register`,data)
}

export const login = (data)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND}user/auth/login`,data)
}

export const getAllFiles = ()=>{
    return axios.get(`${process.env.REACT_APP_BACKEND}doc/auth/get_all_files`)
}

export const uploadFile = (data)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND}doc/auth/upload`,data)
}