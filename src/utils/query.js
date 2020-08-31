import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://ckan2.multimediagdansk.pl',
    // timeout: 1000,
});
export default instance;