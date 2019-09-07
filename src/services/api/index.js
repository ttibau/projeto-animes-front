import axios from 'axios'

const baseUrl = process.env.REACT_APP_BASE_URL

export async function getPastimes() {
    return await axios.get(baseUrl + '/pastimes/')
}