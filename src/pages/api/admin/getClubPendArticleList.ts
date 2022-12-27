import { executeOverPerm } from "@handlers/permCheck";
import { getFirestore } from "@lib/firebase-admin";

const db = getFirestore()

export default async function getClubPendArticle(req, res) {
   if (req.method == 'POST') {
        return await executeOverPerm(req, res, ['tucmc'],
            async (req, res) => {
                let pendingList = []
                const pendSnap = await db.collection('pendingAppr').listDocuments()

                for (let doc of pendSnap) {
                    const nameTH = (await doc.get()).data().Info?.nameTH ?? ''
                    const nameEN = (await doc.get()).data().Info?.nameEN ?? ''
                    pendingList.push({
                        id: doc.id,
                        nameEN: nameEN,
                        nameTH: nameTH
                    })
                }

                return res.json({value: pendingList})
            }
        )
    }
    return res.send(304)
}
