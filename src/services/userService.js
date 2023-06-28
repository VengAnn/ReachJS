
import axios from '../axios';

const handleLoginApi = (UserEmail, UserPassword) => {
    return axios.post('/api/login', { email: UserEmail, password: UserPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-user?id=${inputId}`)
}

export { handleLoginApi, getAllUsers }