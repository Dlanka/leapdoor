import axios from 'axios';

export const TOKEN_KEY = 'leapdoortoken';

export default axios.create({
    baseURL: 'http://localhost:3001/api',
    timeout: 1000,
    headers: { 
        Authorization: `Bearer ${localStorage.getItem(TOKEN_KEY)}`
     }
})
