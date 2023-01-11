import { fireConfig } from "@config/fireConfig"
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"

const firebaseApp = initializeApp(fireConfig)
// const analytics = getAnalytics(firebaseApp)

const auth = getAuth(firebaseApp)
const db = getFirestore()

export { auth, db }

export default firebaseApp
