import {credential} from 'firebase-admin'
import {getFirestore} from 'firebase-admin/firestore'
import {initializeApp} from 'firebase-admin/app'
import { fireConfig } from 'firebase.config.ts'

const initializeDB = () => {
  try {
    getFirestore()
  } catch (error) {
    const app = initializeApp({
      credential: credential.cert(fireConfig),
    })
  }
}

export {initializeDB}
