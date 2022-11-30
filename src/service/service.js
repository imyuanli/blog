import request from '../service/request'

const BASE_URL = 'http://127.0.0.1:8000/api'

// const BASE_URL = 'http://8.136.80.201:8000/api'

export async function get_articles_list(payload) {
    return request.get(BASE_URL + '/get_articles_list/', payload)
}

export async function get_article(payload) {
    return request.post(BASE_URL + '/get_article/', payload)
}


export async function get_classify_list(payload) {
    return request.get(BASE_URL + '/get_classify_list/', payload)
}




