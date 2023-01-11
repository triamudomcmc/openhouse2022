import { getUserData } from "@lib/clientDB"
import { markOnsite } from '@lib/dbMethod'
import { executeOverPerm } from "@handlers/permCheck"

export default async function getInfo(req, res) {
  const { uid } = req.query
  if (req.method == "POST") {
    return await executeOverPerm(
      req,
      res,
      ["tucmc", "tusc", "clubPresident", "clubStaff", "teacher"],
      async (req, res) => {
        const uidData = await getUserData(uid)
        if (uidData) return res.json(uidData)
      }
    )
  }
  return res.send(304)
}
