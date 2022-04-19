import xhr from "./xhr";
import csrf from "../../util/csrf";
import {stringify} from "querystring";
import logger from "../../util/logger";

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
        } else logger.err('Login failed.');
        return res;
    })
}

export default login;
