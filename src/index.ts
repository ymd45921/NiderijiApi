import api from './api';
import xhr from "./configs/xhr";

namespace Nideriji {
    export const {login, diary} = api.web;
    export const setHost = xhr.setHost;
}

export = Nideriji;
