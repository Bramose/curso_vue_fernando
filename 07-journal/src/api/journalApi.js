import axios from 'axios'

const journalApi = axios.create({
    baseURL: 'https://vue-demos-ec482-default-rtdb.firebaseio.com'
})

export default journalApi