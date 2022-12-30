import { executeOverPerm } from "@handlers/permCheck"
import { updateArticleToPending } from "@lib/dbMethod"

export default async function updateStatus(req, res) {
  if (req.method == "POST") {
    const { clubId } = req.query
    return await executeOverPerm(req, res, ["tucmc", "clubPresident"], async (req, res) => {
      const result = await updateArticleToPending(clubId, req.body)

      return res.send({ status: true })
    })
  }
  return res.send(304)
}
