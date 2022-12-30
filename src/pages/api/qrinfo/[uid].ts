import { getUserData, markOnsite } from "@lib/clientDB"

export default async function getInfo(req, res) {
  const { uid } = req.query
  if (req.headers.req_uid && req.headers.req_uid == uid) {
    const uidData = await getUserData(uid)

    if (uidData) return res.json(uidData)
  }
  return res.send(`Access Denied, query id: ${uid}`)
}
