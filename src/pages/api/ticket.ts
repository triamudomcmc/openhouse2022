import screenshot from "@lib/screenshot"
import type { NextApiRequest, NextApiResponse } from "next"
import {getDb} from "@lib/firebase-admin";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const {
    query: { type, name, uid, size },
  } = req

  const file = await screenshot(
    `${getProtocol(req)}://${req.headers.host}/_ticket?type=${type}&name=${name}&uid=${uid}&size=${size}`,
    1080,
    getHeight(size as string)
  )

  res.setHeader("Content-Type", `image/jpeg`)
  res.setHeader("Cache-Control", `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`)
  res.statusCode = 200
  res.end(file)
}

const getProtocol = (req: NextApiRequest) => (req.headers.host?.includes("localhost") ? "http" : "https")

const getHeight = (size: string) => (size === "square" ? 1080 : 1920)
