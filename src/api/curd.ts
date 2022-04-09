import xhr from "./xhr";
import logger from "../util/logger";

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
    }).then(res => {
        if (res.data.error) logger.warn(`Write diary failed.`);
        else logger.ok(`Diary written with id #${res.data.diary.id}`);
        return res;
    }).catch(err => (err))
)

const remove = (id: number | string) => (
    xhr.instance.get(`/diary/delete/${id}/`)
        .then(res => {
            if (res.data.error) logger.warn(`Delete diary failed.`);
            else logger.ok(`Diary #${id} has been deleted. You may get delete date by this id.`);
            return res;
        }).catch(err => (err))
)

const userConfigWeb = () => (
    xhr.instance.get(`/user/config/`)
        .then(res => (res)).catch(err => (err))
)

export default {
    write, remove, userConfigWeb
}


