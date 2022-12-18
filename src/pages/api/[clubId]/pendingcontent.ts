import { handlers } from '@handlers/gcpHandlers'
import { executeOverPerm } from '@handlers/permCheck'
import { getClubPendArticle } from '@lib/dbMethod'

export default async function viewContent(req, res) {
    const {clubId} = req.query

    if (req.method == 'POST') {
        return await executeOverPerm(req, res, ['tucmc', 'clubPresident'],
            async (req, res) => {
                let finalData = {}
                const clubPendArticle = await getClubPendArticle(clubId)
                if (clubPendArticle) {
                    finalData = clubPendArticle

                    finalData['imageUrl'] = {}
                    Object.keys(clubPendArticle?.Images).length != 0 ? finalData['imageUrl'] = await handlers('getImage', JSON.stringify(clubPendArticle?.Images), clubId) : false
                    let reviewImageUrl = {}
                    for (const index in finalData['Reviews']) {
                        finalData['Reviews'][index]['Image'] ? reviewImageUrl[index] = finalData['Reviews'][index]['Image'] : null
                    }
                    finalData['reviewImageUrl'] = await handlers('getImage', JSON.stringify(reviewImageUrl), clubId)
                    if (finalData) return res.json(finalData)
                }
                return res.json({nonexisted: true})
            }
        )
    }
    return res.send(304)
}
