import { getClubPendArticle } from '@lib/dbMethod'

export default async function viewContent(req, res) {
    const {clubId} = req.query

    const clubArticle = await getClubPendArticle(clubId)

    if (clubArticle) return res.json(clubArticle)
    return res.json({nonexisted: true})
}
