import { updateArticleToPending } from '@lib/dbMethod'

export default async function updateStatus(req, res) {
    if (req.method == 'POST') {
        const {clubId} = req.query
        const result = await updateArticleToPending(clubId, req.body)
        return result
    }
    if (req.method == 'GET') return res.send(304)
}
