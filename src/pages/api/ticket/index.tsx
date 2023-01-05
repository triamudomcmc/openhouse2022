import screenshot from "@lib/screenshot"
import { NextApiRequest } from "next"

export default async function getTicket(req, res) {
  const { uid, profileIcon, username, firstname, lastname, status, account_id } = JSON.parse(req.body)

  const file = await screenshot(`${getProtocol(req)}://${req.headers.host}/ticket?uid=${uid}&profileIcon=${profileIcon}&username=${username}&firstname=${firstname}&lastname=${lastname}&status=${status}&account_id=${account_id}`)

  res.setHeader("Content-Type", `image/png`)
  res.setHeader("Cache-Control", `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`)
  res.statusCode = 200
  res.end(file)
}

const getProtocol = (req: NextApiRequest) => (req.headers.host?.includes("localhost") ? "http" : "https")
