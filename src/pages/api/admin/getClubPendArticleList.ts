import { executeOverPerm } from "@handlers/permCheck"
import { getFirestore } from "@lib/firebase-admin"

const db = getFirestore()

export default async function getClubPendArticle(req, res) {
  if (req.method == "POST") {
    return await executeOverPerm(req, res, ["tucmc"], async (req, res) => {
      let pendingList = []
      const pendSnap = await db.collection("pendingAppr").get()

      pendSnap.forEach((doc) => {
        const data = doc.data()
        if (!data.declined) {
          const nameTH = data.Info?.nameTH ?? ""
          const nameEN = data.Info?.nameEN ?? ""
          const type = data.type ?? ""
          pendingList.push({
            id: doc.id,
            nameEN: nameEN,
            nameTH: nameTH,
            type: type,
          })
        }
      })

      if (pendingList.length > 0) return res.json({ value: pendingList })
    })
  }
  return res.send(304)
}
