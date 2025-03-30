import axios from 'axios';

const API_URL = 'http://localhost:8080/api/login';

const login = async (username, password) => {
    const response = await axios.post(API_URL, { username, password });
    return response.data;
};

const authService = {
    login,
};

export default authService;
