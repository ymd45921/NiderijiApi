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

const prev = (id: number | string) => (
    xhr.instance.get(`/diary/prev/${id}/`)
        .then(res => (res)).catch(err => (err))
)

const next = (id: number | string) => (
    xhr.instance.get(`/diary/next/${id}/`)
        .then(res => (res)).catch(err => (err))
)

export default {
    latest, byId, byMonth, prev, next
}
