import axios from "axios";

const instance = axios.create({
    baseURL: 'https://rookas-backend-mern-instagram.herokuapp.com/'
});

export default instance;