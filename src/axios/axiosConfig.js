import axios from 'axios';
import queryString from 'query-string';

export const loginInstance = axios.create({
    baseURL: 'http://localhost:57819/Token',
    method: 'post',
    headers: {
        'Content-Type':'application/x-www-form-urlencoded'
    },
    transformRequest: [data => {
        data.grant_type = 'password'
        return queryString.stringify(data)
    }]
})