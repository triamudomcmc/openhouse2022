import { movePendToProd } from '@lib/dbMethod'

export default async function appr(req, res) {
    const {clubId} = req.query

    await movePendToProd(clubId)
    return res.json({nonexisted: false})
}
