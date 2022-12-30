import { executeOverPerm } from "@handlers/permCheck"
import { movePendToProd } from "@lib/dbMethod"

export default async function appr(req, res) {
  const { clubId } = req.query

  if (req.method == "POST") {
    return await executeOverPerm(req, res, ["tucmc"], async (req, res) => {
      await movePendToProd(clubId)
      return res.json({ nonexisted: false })
    })
  }
  return res.send(304)
}
