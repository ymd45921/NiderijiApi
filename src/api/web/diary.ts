import xhr from "../../configs/xhr";
import {AuthConfig, DiaryDate} from "../../configs/types";
import {genAuthConfig} from "../../utils";

const latest = (auth?: AuthConfig) => (
    xhr.instance.get('/diary/latest/', genAuthConfig(auth))
)

const byId = (id: number | string, auth?: AuthConfig) => (
    xhr.instance.get(`/diary/${id}/`, genAuthConfig(auth))
)

const byMonth = (y: number | string, m: number | string, auth?: AuthConfig) => (
    xhr.instance.get(`/diary/${y}/${m}/`, genAuthConfig(auth))
)

const byDate = (y: number | string, m: number | string,
                d: number | string, auth?: AuthConfig) => (
    xhr.instance.get(`/diary/?date=${y}-${m}-${d}`, genAuthConfig(auth))
)

const prev = (id: number | string, auth?: AuthConfig) => (
    xhr.instance.get(`/diary/prev/${id}/`, genAuthConfig(auth))
)

const next = (id: number | string, auth?: AuthConfig) => (
    xhr.instance.get(`/diary/next/${id}/`, genAuthConfig(auth))
)

const random = (auth?: AuthConfig) => (
    xhr.instance.get(`/diary/random/`, genAuthConfig(auth))
)

const all = (auth?: AuthConfig) => (
    xhr.instance.get(`/diary/all/`, genAuthConfig(auth))
)

const monthList = (y: number | string, m: number | string, auth?: AuthConfig) => (
    xhr.instance.get(`/diary/simple_by_month/${y}/${m}/`, genAuthConfig(auth))
)

const allRange = (count: number | string, latest?: DiaryDate, auth?: AuthConfig) => (
    xhr.instance.get(`/diary/all/?latest_date=${latest ?? ''}&count=${count}`, genAuthConfig(auth))
)

export default {
    latest, byId, byMonth, prev, next, all, byDate, random, monthList, allRange
}
