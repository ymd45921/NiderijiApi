import xhr from "../../configs/xhr";
import {AuthConfig, DiaryDate, DiaryMood, DiaryWeather, IDiaryParams} from "../../configs/types";
import {genAuthConfig} from "../../utils";
import {stringify} from "querystring";

const _write = (
    date: DiaryDate,
    content: string,
    title: string,
    weather: DiaryWeather,
    mood: DiaryMood,
    auth?: AuthConfig
) => (
    xhr.instance.post(`/write/`, stringify({
        date, content, title, weather, mood
    }), genAuthConfig(auth))
)

function write(
    date: DiaryDate,
    content: string,
    title: string,
    weather: DiaryWeather,
    mood: DiaryMood,
    auth?: AuthConfig
): ReturnType<typeof _write>;

function write(
    diary: IDiaryParams,
    auth?: AuthConfig
): ReturnType<typeof _write>;

function write(...args: any[]): ReturnType<typeof _write> {
    if (args.length >= 5) {
        const [date, content, title, weather, mood, auth] = args;
        return _write(date, content, title, weather, mood, auth);
    } else if (args.length >= 1) {
        const [diary, auth] = args;
        const {date, content, title, weather, mood} = diary;
        return _write(date, content, title, weather, mood, auth);
    } else return _write('', '', '', '', '');
}

const remove = (id: number | string, auth?: AuthConfig) => (
    xhr.instance.get(`/diary/delete/${id}/`, genAuthConfig(auth))
)

const userConfigWeb = (auth?: AuthConfig) => (
    xhr.instance.get(`/user/config/`, genAuthConfig(auth))
)

export default {
    write, remove, userConfigWeb
}


