import { getClubProdArticle } from '@lib/dbMethod'

export default async function viewContent(req, res) {
    const {clubId} = req.query

    const clubArticle = await getClubProdArticle(clubId)

    if (clubArticle) return res.json(clubArticle)
    return res.json({nonexisted: true})
}