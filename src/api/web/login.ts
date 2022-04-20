import xhr from "../../configs/xhr";
import csrf from "../../util/csrf";
import {stringify} from "querystring";
import configs from "../../configs";

const setHeaders = (csrf: string, token: string) => {
    xhr.setToken(token);
    xhr.setCookie(csrf, token);
}

const login = (email: string, password: string) => {
    const form = {
        csrfmiddlewaretoken: csrf.randomToken(),
        email: email,
        password: password
    };
    const qs = stringify(form);

    return xhr.instance.post('/login/', qs).then(res => {
        if (res.data.token) {
            if (configs.autoSetHeadersAfterLogin)
                setHeaders(form.csrfmiddlewaretoken, res.data.token);
        }
        return res;
    })
}

export default login;
