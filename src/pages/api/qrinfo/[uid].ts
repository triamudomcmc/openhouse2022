import { getUserData, markOnsite } from "@lib/dbMethod"

export default async function getInfo(req, res) {
    const { uid } = req.query
    const uidData = await getUserData(uid)

    if (uidData) return res.json(uidData)
}