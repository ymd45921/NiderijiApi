import xhr from "./xhr";
import logger from "../../util/logger";

type DiaryDate = string;
type DiaryWeather = string | 'sunny';
type DiaryMood = string | 'sad';

const write = (
    date: DiaryDate,
    content: string,
    title: string,
    weather: DiaryWeather,
    mood: DiaryMood
) => (
    xhr.instance.post(`/write/`, {
        date, content, title, weather, mood
    })
)

const remove = (id: number | string) => (
    xhr.instance.get(`/diary/delete/${id}/`)
)

const userConfigWeb = () => (
    xhr.instance.get(`/user/config/`)
)

export default {
    write, remove, userConfigWeb
}


