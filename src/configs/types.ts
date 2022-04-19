import { AxiosInstance, AxiosResponse } from "axios";

export type Instance = AxiosInstance;

export type Response = AxiosResponse;

export type DiaryDate = string;

export type DiaryWeather = '' | 'sunny' | 'rainy' | 'lightning-rainy' 
    | 'pouring' | 'snowy' | 'cloudy' | 'fog' | 'windy' | 'hail';

export type DiaryMood = '' | 'sad' | 'excited' | 'tongue' | 'cool' 
    | 'devil' | 'happy' | 'poop' | 'neutral' | 'dead';

export type DiaryWeekday = '星期一' | '星期二' | '星期三' | '星期四' 
    | '星期五' | '星期六' | '星期天';

export type DiarySpace = 'boy' | 'girl';