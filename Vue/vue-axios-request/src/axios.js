import axios from 'axios'

const http = axios.create({
    baseURL: '/api',
    timeout: 10000,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
    },
    transformRequest: [function (data) {
        let newData = ''
        for (let k in data) {
            if (Object.prototype.hasOwnProperty.call(data, k) === true) {
                newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&'
            }
        }
        return newData;
    }]
});

http.interceptors.request.use(
    config => {
        if (process.env.NODE_ENV === 'production') {
            config.baseURL = 'https://api.apiopen.top'
        }
        return config
    },
    err => {
        console.log(err)
        return Promise.reject(err)
    }
)

// http.interceptors.response.use(
//     response => {
//         return response
//     }
// )

function apiAxios(method, url, params, response) {
    http({
        method: method,
        url: url,
        data: method === 'POST' || method === 'PUT' ? params : null,
        params: method === 'GET' || method === 'DELETE' ? params : null,
    }).then(function (res) {
        response(res)
    }).catch(function (err) {
        response(err)
    })
}

export default {
    get: function (url, params, response) {
        return apiAxios('GET', url, params, response)
    },
    post: function (url, params, response) {
        return apiAxios('POST', url, params, response)
    },
    put: function (url, params, response) {
        return apiAxios('PUT', url, params, response)
    },
    delete: function (url, params, response) {
        return apiAxios('DELETE', url, params, response)
    }
}