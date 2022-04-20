import xhr from "../../configs/xhr";
import {AuthConfig, DiaryDate, DiaryMood, DiaryWeather} from "../../configs/types";
import {genAuthConfig} from "../../utils";

const write = (
    date: DiaryDate,
    content: string,
    title: string,
    weather: DiaryWeather,
    mood: DiaryMood,
    auth?: AuthConfig
) => (
    xhr.instance.post(`/write/`, {
        date, content, title, weather, mood
    }, genAuthConfig(auth))
)

const remove = (id: number | string, auth?: AuthConfig) => (
    xhr.instance.get(`/diary/delete/${id}/`, genAuthConfig(auth))
)

const userConfigWeb = (auth?: AuthConfig) => (
    xhr.instance.get(`/user/config/`, genAuthConfig(auth))
)

export default {
    write, remove, userConfigWeb
}


