import xhr from "../../configs/xhr";
import { DiaryDate, DiaryMood, DiaryWeather } from "../../configs/types";

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


