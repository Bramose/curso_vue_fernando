import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-ec482-default-rtdb.firebaseio.com'
})

// console.log( process.env.NODE_ENV  ) "TEST" // Durante la prueba

export default journalApi