import { updateUserQA } from "@lib/dbMethod"

export default function qa(req, res) {
  if (req.method == "POST") {
    const data = JSON.parse(req.body)
    updateUserQA(data.executerUid, data)
    return res.send(data)
  }
  return res.send(304)
}
