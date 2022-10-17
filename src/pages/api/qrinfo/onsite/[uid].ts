import { getUserData, markOnsite } from "@lib/dbMethod"

export default async function getInfo(req, res) {
    const { uid } = req.query
    const uidData = await getUserData(uid)
    const marked = await markOnsite(uid)

    if (uidData) return res.json(uidData,marked)
}