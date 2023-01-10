import { getUserData, markOnsite } from "@lib/clientDB"
import { executeOverPerm } from "@handlers/permCheck"

export default async function getInfo(req, res) {
  const { uid } = req.query
  if (req.method == "POST") {
    return await executeOverPerm(
      req,
      res,
      ["tucmc", "aic", "tusc", "teacher"],
      async (req, res) => {
        const marked = await markOnsite(uid)
        return res.json(marked)
      }
    )
  }
  return res.send(304)
}
