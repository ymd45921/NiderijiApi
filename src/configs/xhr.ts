import axios from "axios";

const domain = 'https://nideriji.cn';   // 'https://ohshenghuo.com'
const apiServer = `${domain}/api`

const instance = axios.create({
    baseURL: apiServer,
    headers: {
        accept: '*/*'
    }
});

const setToken = (token: string) => {
    instance.defaults.headers.common['auth'] = `token ${token}`
}

const setCookie = (csrf: string, token: string) => {
    instance.defaults.headers.common['Cookie'] = `csrftoken=${csrf}; token=${token}`
}

const setHost = (host: string) => instance.defaults.baseURL = host;

export default {
    instance,
    setToken,
    setCookie,
    setHost,
}
