import axios from "axios";
import configs, {subscribe} from "./index";

const instance = axios.create({
    baseURL: configs.apiServerURL,
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

const setHeader = (k: string, v: string) => {
    instance.defaults.headers.common[k] = v;
}

const removeHeader = (k: string) => {
    delete instance.defaults.headers.common[k];
}

const setHost = (host: string) => instance.defaults.baseURL = configs.apiServerURL = host;

subscribe('apiServerURL', cfg => setHost(cfg.apiServerURL));

export default {
    instance,
    setToken,
    setCookie,
    setHeader,
    setHost,
    removeHeader
}
