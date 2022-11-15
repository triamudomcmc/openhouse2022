import { executeOverPerm } from '@handlers/permCheck'
import { getClubPendArticle } from '@lib/dbMethod'

export default async function viewContent(req, res) {
    const {clubId} = req.query

    if (req.method == 'POST') {
        return await executeOverPerm(req, res, ['tucmc', 'clubPresident'],
            async (req, res) => {
                const clubArticle = await getClubPendArticle(clubId)
                if (clubArticle) return res.json(clubArticle)
                return res.json({nonexisted: true})
            }
        )
    }
    return res.send(304)
}
