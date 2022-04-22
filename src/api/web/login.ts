import xhr from "../../configs/xhr";
import csrf from "../../utils/csrf";
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
    const qs = new URLSearchParams(form);

    return xhr.instance.post('/login/', qs.toString()).then(res => {
        if (res.data.token) {
            if (configs.autoSetHeadersAfterLogin)
                setHeaders(form.csrfmiddlewaretoken, res.data.token);
        }
        return res;
    })
}

export default login;
