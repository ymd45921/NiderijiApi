import xhr from "./xhr";

const latest = () => (
    xhr.instance.get('/diary/latest/')
)

const byId = (id: number | string) => (
    xhr.instance.get(`/diary/${id}/`)
)

const byMonth = (y: number | string, m: number | string) => (
    xhr.instance.get(`/diary/${y}/${m}/`)
)

const byDate = (y: number | string, m: number | string, d: number | string) => (
    xhr.instance.get(`/diary/?date=${y}-${m}-${d}`)
)

const prev = (id: number | string) => (
    xhr.instance.get(`/diary/prev/${id}/`)
)

const next = (id: number | string) => (
    xhr.instance.get(`/diary/next/${id}/`)
)

const random = () => (
    xhr.instance.get(`/diary/random/`)
)

const all = () => (
    xhr.instance.get(`/diary/all/`)
)

const monthList = (y: number | string, m: number | string) => (
    xhr.instance.get(`/diary/simple_by_month/${y}/${m}/`)
)

export default {
    latest, byId, byMonth, prev, next, all, byDate, random, monthList
}
