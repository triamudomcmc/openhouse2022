import { getDb } from "./firebase-admin"

const db = getDb()

export async function getTicketData(uid: string) {
  const ref = db.collection("users").doc(uid)
  const doc = await ref.get()
  const data = doc.data()

  if (!data) return null

  return {
    type: data.ticket,
    uid: uid,
    name: data.username,
  }
}
