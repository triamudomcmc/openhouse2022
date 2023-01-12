import screenshot from "@lib/screenshot"
import { NextApiRequest } from "next"

const allowCors = fn => async (req, res) => {
  res.setHeader('Access-Control-Allow-Credentials', false)
  res.setHeader('Access-Control-Allow-Origin', "*");
  res.setHeader('Access-Control-Allow-Methods', 'GET')
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  )
  if (req.method === 'OPTIONS') {
    res.status(200).end()
    return
  }
  return await fn(req, res)
}

async function getTicket(req, res) {
  const { uid, profileIcon, username, firstname, lastname, status, account_id } = JSON.parse(req.body)

  const file = await screenshot(`${getProtocol(req)}://${req.headers.host}/ticket?uid=${uid}&profileIcon=${profileIcon}&username=${username}&firstname=${firstname}&lastname=${lastname}&status=${status}&account_id=${account_id}`)

  res.setHeader("Content-Type", `image/png`)
  res.setHeader("Cache-Control", `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`)
  res.statusCode = 200
  res.end(file)
}

export default async allowCors(getTicket)


const getProtocol = (req: NextApiRequest) => (req.headers.host?.includes("localhost") ? "http" : "https")
