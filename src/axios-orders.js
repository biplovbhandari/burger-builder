import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://biplov-burger-builder.firebaseio.com/',

});

export default instance;
