import axios from 'axios'

const authApi = axios.create({
    baseURL: 'https://identitytoolkit.googleapis.com/v1/accounts',
    params: {
        key: 'AIzaSyBM6Wxai6C2syqqF6xD6QV7-v_Va2VOpp8'
    }
})

// console.log( process.env.NODE_ENV  ) "TEST" // Durante la prueba

export default authApi