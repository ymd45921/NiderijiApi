import xhr from "./xhr";

const latest = () => (
    xhr.instance.get('/diary/latest/')
        .then(res => (res)).catch(err => (err))
)

const byId = (id: number | string) => (
    xhr.instance.get(`/diary/${id}/`)
        .then(res => (res)).catch(err => (err))
)

const byMonth = (y: number | string, m: number | string) => (
    xhr.instance.get(`/diary/${y}/${m}/`)
        .then(res => (res)).catch(err => (err))
)

const byDate = (y: number | string, m: number | string, d: number | string) => (
    xhr.instance.get(`/diary/?date=${y}-${m}-${d}`)
        .then(res => (res)).catch(err => (err))
)

const prev = (id: number | string) => (
    xhr.instance.get(`/diary/prev/${id}/`)
        .then(res => (res)).catch(err => (err))
)

const next = (id: number | string) => (
    xhr.instance.get(`/diary/next/${id}/`)
        .then(res => (res)).catch(err => (err))
)

const random = () => (
    xhr.instance.get(`/diary/random/`)
        .then(res => (res)).catch(err => (err))
)

const all = () => (
    xhr.instance.get(`/diary/all/`)
        .then(res => (res)).catch(err => (err))
)

const monthList = (y: number | string, m: number | string) => (
    xhr.instance.get(`/diary/simple_by_month/${y}/${m}/`)
        .then(res => (res)).catch(err => (err))
)

export default {
    latest, byId, byMonth, prev, next, all, byDate, random, monthList
}
