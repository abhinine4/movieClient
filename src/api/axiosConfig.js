import axios from 'axios';

// help CORS restrictions
export default axios.create({
    baseURL:'http://localhost:8080',
    headers: {"ngrok-skip-browser-warning": "true"}
});