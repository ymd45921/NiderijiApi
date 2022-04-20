import {AxiosInstance, AxiosRequestConfig, AxiosResponse} from "axios";

export namespace TypeAlias {

    export type Instance = AxiosInstance;
    export type Response = AxiosResponse;
    export type RequestConfig = AxiosRequestConfig<any>;

}

export type DiaryDate = string;

export type DiaryWeather = '' | 'sunny' | 'rainy' | 'lightning-rainy'
    | 'pouring' | 'snowy' | 'cloudy' | 'fog' | 'windy' | 'hail';

export type DiaryMood = '' | 'sad' | 'excited' | 'tongue' | 'cool'
    | 'devil' | 'happy' | 'poop' | 'neutral' | 'dead';

export type DiaryWeekday = '星期一' | '星期二' | '星期三' | '星期四'
    | '星期五' | '星期六' | '星期天';

export type DiarySpace = 'boy' | 'girl';

export interface IConfig {
    autoSetHeadersAfterLogin: boolean;
    apiServerURL: string;
}

export type IConfigKey = keyof IConfig;

export type ConfigCallback = ((newConfig: IConfig) => any);

export interface IConfigCallback {
    cb: ConfigCallback;
    id: number;
}

export type KVMap<K extends string | number | symbol, V> = {[k in K]: V};

export type StringMap<T> = KVMap<string, T>;

export type AuthConfig = TypeAlias.RequestConfig | string;
