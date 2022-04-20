import {IConfig, ConfigCallback, IConfigCallback, IConfigKey, StringMap} from "./types";

const defaultConfig: IConfig = {
    autoSetHeadersAfterLogin: true,
    apiServerURL: `${['https://nideriji.cn', 'https://ohshenghuo.com'][0]}/api`,
}

let configs: IConfig = {
    ...defaultConfig
}

// TODO: Why Partial<KVMap<IConfigKey, IConfigCallback[]>> is NG?
let callbackMap: StringMap<IConfigCallback[]> = {};
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
        for (const cbo of callbackMap[k])
            cbToRunId.push(cbo.id);
    }
    cbToRunId = [...new Set(cbToRunId)];
    for (const id of cbToRunId) callbackArray[id].cb(configs);
}

export default configs;
