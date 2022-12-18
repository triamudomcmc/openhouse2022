import { handlers } from '@handlers/gcpHandlers'
import { getClubProdArticle } from '@lib/dbMethod'

export default async function viewContent(req, res) {
    const {clubId} = req.query

    let finalData = {}
    const clubArticle = await getClubProdArticle(clubId)
    if (clubArticle) {
        finalData = clubArticle

        finalData['imageUrl'] = {}
        Object.keys(clubArticle?.Images).length != 0 ? finalData['imageUrl'] = await handlers('getImage', JSON.stringify(clubArticle?.Images), clubId) : false
        let reviewImageUrl = {}
        for (const index in finalData['Reviews']) {
            finalData['Reviews'][index]['Image'] ? reviewImageUrl[index] = finalData['Reviews'][index]['Image'] : null
        }
        finalData['reviewImageUrl'] = await handlers('getImage', JSON.stringify(reviewImageUrl), clubId)
        if (finalData) return res.json(finalData)
    }
    return res.json({nonexisted: true})
}