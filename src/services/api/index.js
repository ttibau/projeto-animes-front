import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export async function getPastimes(token) {
    return await axios.get(baseUrl + '/pastimes/', { headers: { 'authorization': 'Bearer ' + token }})
}

export async function login(user) {
    return await axios.post(baseUrl + '/auth/authenticate', user)
}