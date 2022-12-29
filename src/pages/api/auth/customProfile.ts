import { updateUserProfile } from "@lib/clientDB"

export default function customProfile(req, res) {
    if (req.method == 'POST') {
        const data = JSON.parse(req.body)
        const status = updateUserProfile(data?.executerUid ?? null, data?.genres ?? null)
        return res.json(status)
    }
    res.send(304)
}
