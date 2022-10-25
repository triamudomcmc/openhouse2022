import { getUserData, markOnsite } from "@lib/dbMethod"
import { uer } from '@ctypes/perm'

export default async function getInfo(req, res) {
    const { uid } = req.query
    if (req.headers.roles) {
        const role = Object.keys(JSON.parse(req.headers.roles))

        // ***  IN-SECURE AF, MOCK N/CONCEPT USE ONLY  *** //
        if (role.filter((a) => { return uer.includes(a) })) {
            const uidData = await getUserData(uid)
            const marked = await markOnsite(uid)
            if (uidData) return res.json(uidData,marked)
        }
        else {
            return false
        }
    }
    
    return res.send('Access Denied')
}