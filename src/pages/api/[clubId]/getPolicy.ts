import { executeOverPerm } from "@handlers/permCheck"
import { toGCP } from "@handlers/gcpHandlers"

export default async function uploadToGCP(req, res) {
    if (req.method == 'POST') {
        const {clubId} = req.query
        return await executeOverPerm(req, res, ['tucmc', 'clubPresident'],
        async (req, res) => {
            const result = await toGCP(req.body, clubId)
            return res.send(JSON.stringify(result))
        })
    }
    return res.send(304)
}
