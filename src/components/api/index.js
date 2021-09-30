import axios from 'axios'



export const getAllFiles = ()=>{
    return axios.get(`${process.env.REACT_APP_BACKEND}doc/auth/get_all_files`)
}

export const uploadFile = (data)=>{
    return axios.post(`${process.env.REACT_APP_BACKEND}doc/auth/upload`,data)
}