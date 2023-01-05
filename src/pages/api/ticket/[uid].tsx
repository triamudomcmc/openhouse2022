import { getUserData } from "@lib/clientDB"
import screenshot from "@lib/screenshot"
import { NextApiRequest } from "next"

export default async function getTicket(req, res) {
  const { uid } = req.query

  const userData = await getUserData(uid)

  if (userData) {
    const file = await screenshot(`${getProtocol(req)}://${req.headers.host}/ticket?uid=${userData?.uid}&profileIcon=${userData?.Info?.profileIcon}&username=${userData?.Info?.username}&firstname=${userData?.Info?.firstname}&lastname=${userData?.Info?.lastname}&status=${userData?.Info?.status}`)

    res.setHeader("Content-Type", `image/png`)
    res.setHeader("Cache-Control", `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`)
    res.statusCode = 200
    res.end(file)
  }
  else return res.send(304)
}

const getProtocol = (req: NextApiRequest) => (req.headers.host?.includes("localhost") ? "http" : "https")
