import axios from 'axios';
import {message} from "antd";

const HTTP_STATUS = {
    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 202,
    CLIENT_ERROR: 400,
    AUTHENTICATE: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504,
};

function request(url, data = {}, method = 'GET') {
    return new Promise(function (resolve, reject) {
        let axiosJson = {
            url: url,
            method: method,
            headers: {
                'Content-Type': 'application/json',
                // 'Authorization': store.get('token'),
            },
        };
        if (method === 'GET') {
            axiosJson['params'] = data;
        } else {
            axiosJson['data'] = data;
        }
        axios(axiosJson).then((res) => {
            if (res.status === HTTP_STATUS.SUCCESS) {
                if (res.data.errno === 0) {
                    resolve(res.data.data);
                } else if (res.data.errno === 502) {
                    message.error(res.data.errmsg)
                }
            }
        }).catch(err => {
            message.error("可能断网啦，请联网后刷新重试")
            reject(err);
        });
    });
}

request.get = (url, data) => {
    return request(url, data, 'GET');
};

request.post = (url, data) => {
    return request(url, data, 'POST');
};

export default request;
