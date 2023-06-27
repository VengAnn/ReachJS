
import axios from '../axios';

const handleLoginApi = (UserEmail, UserPassword) => {
    return axios.post('/api/login', { email: UserEmail, password: UserPassword });
}

export { handleLoginApi }