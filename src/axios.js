// axios as the fetching

import axios from 'axios';

const instance = axios.created({
    //CLOUD FUNCTION API URL
    baseURL: '',
})

export default instance;