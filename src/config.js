import Axios from 'axios'

export const url = 'https://localhost:44356/api'

export const httpToken = Axios.create({
    baseURL : url,
    headers: {
        'Authorization': 'Bearer ' + localStorage.getItem('token')
    },
})

export const http = Axios.create({
    baseURL: url
})



export const reducer = (state, action) => {

    return {
        ...state,
        [action.type]: action.payload
    }
}