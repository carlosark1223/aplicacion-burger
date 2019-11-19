import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-307d0.firebaseio.com/'
});

export default instance;