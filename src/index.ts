import {stringify} from "querystring";

require('dotenv').config();

import axios from "axios";
import * as fs from "fs";
import * as util from "util";

const domain = 'https://nideriji.cn';

const instance = axios.create({
    baseURL: domain,
    headers: {
        referer: 'https://nideriji.cn/login/',
        accept: '*/*'
    }
});

const logFile = {
    stream: fs.createWriteStream('log.txt', {flags: 'a'}),
    log: function(...args: any[]) {
        this.stream.write(util.format.apply(null, args) + '\n');
    }
};

const form = {
    csrfmiddlewaretoken: 'WRqneDnRcKEDb0QIaLW8r7hkm6DEpeqe',
    email: process.env.EMAIL,
    password: process.env.PASSWORD
};

const qs = stringify(form);

instance.post('/api/login/', qs).then(res => {
    console.log(res);
    console.log('Login success.');
}).catch(e => {
    // console.log(e);
    logFile.log(e);
    console.log('Request failed.');
})
