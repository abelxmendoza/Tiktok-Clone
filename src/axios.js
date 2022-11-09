import axios from 'axios';

const instance = axios.create({

        baseURL: "https://abels-tiktok-backend.herokuapp.com",
});



//https://abels-tiktok-backend.herokuapp.com
export default instance;
