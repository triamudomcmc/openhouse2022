import { fireConfig } from "@config/fireConfig"
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseApp = initializeApp(fireConfig)
// const analytics = getAnalytics(firebaseApp)

export default firebaseApp
