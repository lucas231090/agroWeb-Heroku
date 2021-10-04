import axios from 'axios'

const api = axios.create({
    baseURL: 'http://apiagro-backend.herokuapp.com/'
})

export default api