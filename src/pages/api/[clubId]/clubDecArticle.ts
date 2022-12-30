import { executeOverPerm } from "@handlers/permCheck"
import { declinePend } from "@lib/dbMethod"

export default async function appr(req, res) {
  const { clubId } = req.query

  if (req.method == "POST") {
    return await executeOverPerm(req, res, ["tucmc"], async (req, res) => {
      await declinePend(clubId)
      return res.json({ nonexisted: false })
    })
  }
  return res.send(304)
}
