import { getUserData, markOnsite } from "@lib/clientDB"

export default async function getInfo(req, res) {
  const { uid } = req.query
  if (req.headers.req_uid && req.headers.req_uid == uid) {
    const uidData = await getUserData(uid)

    if (uidData.Info) return res.json(uidData)
    else if (uidData) return res.status(304).json(uidData)
  }
  return res.status(304)
}
