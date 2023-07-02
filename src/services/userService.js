
import axios from '../axios';

const handleLoginApi = (UserEmail, UserPassword) => {
    return axios.post('/api/login', { email: UserEmail, password: UserPassword });
}

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-user?id=${inputId}`)
}

const createNewUserService = (data) => {
    console.log('check data from Service: ', data);
    return axios.post('/api/create-new-user', data);

}

const deleteUserService = (userId) => {
    //return axios.delete('/api/delete-user', { id: userId });
    return axios.delete('/api/delete-user', {
        data: {
            id: userId
        }
    });
}
export { handleLoginApi, getAllUsers, createNewUserService, deleteUserService }