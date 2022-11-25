import { executeOverPerm } from "@handlers/permCheck"
import { upToGCP } from "@handlers/uploader"

export default async function uploader(req, res) {
    if (req.method == 'POST') return await executeOverPerm(req, res, ['tucmc', 'clubPresident'],
    async (req, res) => {
        return res.json({uploadData: await upToGCP(req, res)})
    })
    return res.send(304)
}
