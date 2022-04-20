import api from './api';
import xhr from "./configs/xhr";
import * as configs from './configs';

namespace Nideriji {
    export const {login, diary} = api.web;
    export const setHost = xhr.setHost;
    export const setHeader = xhr.setHeader;
    export const instance = xhr.instance;
    export const config = configs.config;
    export const updateConfig = configs.runAllCallbacks;
}

export = Nideriji;
