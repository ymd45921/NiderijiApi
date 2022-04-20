import {IConfig, ConfigCallback, IConfigCallback, IConfigKey, KVMap} from "./types";

const defaultConfig: IConfig = {
    autoSetHeadersAfterLogin: true,
    apiServerURL: `${['https://nideriji.cn', 'https://ohshenghuo.com'][0]}/api`,
}

let configs: IConfig = {
    ...defaultConfig
}

// TODO: Is there a gramar to initialize this object
let callbackMap: KVMap<IConfigKey, IConfigCallback[]> = {
    apiServerURL: [],
    autoSetHeadersAfterLogin: []
};
let callbackArray: IConfigCallback[] = [];

let registeredCallbacks = 0;

const genCallbackObject = (cb: ConfigCallback): IConfigCallback => {
    const ret= {cb, id: registeredCallbacks ++};
    callbackArray.push(ret);
    return ret;
};

export const subscribe = (dep: IConfigKey | IConfigKey[], cb: ConfigCallback) => {
    const cbo = genCallbackObject(cb);
    if (typeof dep === 'string') {
        callbackMap[dep].push(cbo);
    } else for (const k of dep) {
        callbackMap[k].push(cbo);
    }
}

export const runAllCallbacks = (config: IConfig) => {
    for (const cbo of callbackArray) cbo.cb(config);
}

export const config = (config: Partial<IConfig> = defaultConfig) => {
    configs = {...configs, ...config};
    let cbToRunId: number[] = [];
    for (const k in config) {
        for (const cbo of callbackMap[k as IConfigKey])
            cbToRunId.push(cbo.id);
    }
    cbToRunId = [...new Set(cbToRunId)];
    for (const id of cbToRunId) callbackArray[id].cb(configs);
}

export default configs;
