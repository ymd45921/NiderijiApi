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

export default {
    instance,
    setToken,
}
