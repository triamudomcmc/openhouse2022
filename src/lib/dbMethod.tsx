import {
  DocumentData,
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  addDoc,
  collection,
} from 'firebase/firestore'
import firebaseApp from './firebase'

const db = getFirestore(firebaseApp)

export const getUserRef = (uid: string) => {
  return doc(db, "account", uid)
}

export const updateUser = (uid: string, data: DocumentData): Promise<void> => {
  const userRef = getUserRef(uid)

  return updateDoc(userRef, data)
}

export const createUser = (uid: string, data: DocumentData): Promise<void> => {
  const userRef = getUserRef(uid)

  return setDoc(userRef, data, { merge: true })
}

export const getUserData = async (uid: string): Promise<null | DocumentData> => {
  const userRef = getUserRef(uid)
  const doc = await getDoc(userRef)

  if (doc.exists()) {
    return doc.data()
  } else {
    return null
  }
}

export const markOnsite = async (uid: string): Promise<void> => {
  const marked = {onSite: true}
  const userRef = getUserRef(uid)

  return await updateDoc(userRef, marked)

}