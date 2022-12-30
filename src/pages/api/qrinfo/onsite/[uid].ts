import { getUserData, markOnsite } from "@lib/clientDB"
import { executeOverPerm } from "@handlers/permCheck"

export default async function getInfo(req, res) {
  const { uid } = req.query
  if (req.method == "POST") {
    return await executeOverPerm(
      req,
      res,
      ["tucmc", "aic", "tusc", "clubPresident", "clubStaff", "teacher"],
      async (req, res) => {
        const uidData = await getUserData(uid)
        const marked = await markOnsite(uid)
        if (uidData) return res.json(uidData, marked)
      }
    )
  }
  return res.send(304)
}
