import { executeOverPerm } from "@handlers/permCheck"
import { stamp } from "@lib/dbMethod"

export default async function Stamp(req, res) {
    if (req.method == 'POST') {
        const body = JSON.parse(req.body)

        return await executeOverPerm(
            req,
            res,
            ["tucmc", "aic", "tusc", "teacher"],
            async (req, res) => {
              const stampRes = await stamp(body.club, body.clubName, body.uid, body.executerUid)
              if (stampRes) return res.send(200)
            }
        )
    }
    return res.send(304)
}
