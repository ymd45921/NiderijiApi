import logger from "./util/logger";
import axios from "axios";
import {stringify} from "querystring";
import filestream from "./util/filestream";

require('dotenv').config();

const domain = 'https://nideriji.cn';

const instance = axios.create({
    baseURL: domain,
    headers: {
        referer: 'https://nideriji.cn/login/',
        accept: '*/*'
    }
});

const logFile = filestream.create("log.txt");

const form = {
    csrfmiddlewaretoken: 'WRqneDnRcKEDb0QIaLW8r7hkm6DEpeqe',
    email: process.env.EMAIL,
    password: process.env.PASSWORD
};

const qs = stringify(form);

instance.post('/api/login/', qs).then(res => {
    console.log(res);
    logger.ok('Login success.');
}).catch(e => {
    // console.log(e);
    logFile.log(e);
    logger.err('Request failed.');
})
