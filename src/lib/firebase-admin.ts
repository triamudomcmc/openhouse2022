import { fireCert } from "@config/fireConfig"
import admin from "firebase-admin"

export const getFirestore = () => {
  try {
    return admin.firestore()
  } catch (error) {
    admin.initializeApp({ credential: admin.credential.cert(fireCert) })
    return admin.firestore()
  }
}
