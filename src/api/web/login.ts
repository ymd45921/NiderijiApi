import xhr from "../../configs/xhr";
import csrf from "../../util/csrf";
import {stringify} from "querystring";

const login = (email: string, password: string) => {
    const form = {
        csrfmiddlewaretoken: csrf.randomToken(),
        email: email,
        password: password
    };
    const qs = stringify(form);

    return xhr.instance.post('/login/', qs).then(res => {
        if (res.data.token) {
            xhr.setToken(res.data.token);
            xhr.setCookie(form.csrfmiddlewaretoken, res.data.token);
        }
        return res;
    })
}

export default login;
