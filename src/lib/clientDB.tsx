import {
  DocumentData,
  getFirestore,
  collection,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  addDoc,
  deleteDoc,
  serverTimestamp,
} from "firebase/firestore"
import firebaseApp from "./firebase"

const db = getFirestore(firebaseApp)
export const getUserRef = (uid: string) => {
  return doc(db, "account", uid)
}

export const stamp = async (club: string, clubName: string, uid: string): Promise<void> => {
  const userRef = getUserRef(uid)

  return await updateDoc(userRef, { [`stamp.${club}`]: { timestamp: serverTimestamp(), nameTH: clubName } })
}

export const getClubProdRef = (clubId: string) => {
  return doc(db, "prodAppr", clubId)
}

export const getClubPendRef = (clubId: string) => {
  return doc(db, "pendingAppr", clubId)
}

export const updateUser = (uid: string, data: DocumentData): Promise<void> => {
  const userRef = getUserRef(uid)

  return updateDoc(userRef, data)
}

export const markOnsite = async (uid: string): Promise<void> => {
  const marked = { onSite: true }
  const userRef = getUserRef(uid)

  return await updateDoc(userRef, marked)
}

export const createUser = async (uid: string, data: DocumentData): Promise<void> => {
  const userRef = getUserRef(uid)
  const checkExist = (await getDoc(userRef)).exists()
  if (checkExist) {
    return undefined
  } else {
    data.qa = true
    return await setDoc(userRef, data, { merge: true })
  }
}

export const getUserData = async (uid: string): Promise<null | DocumentData> => {
  const userRef = getUserRef(uid)
  const doc = await getDoc(userRef)

  if (doc.exists()) return doc.data()
  return null
}
export const getCurrentUserId = async (uid: string): Promise<string> => {
  const ref = doc(db, "account", "count")
  const curr = (await getDoc(ref)).data().current

  try {
    const userid = (await getUserData(uid)).account_id
    return userid
  } catch {
    const pcurr = curr + 1

    await updateDoc(ref, { current: pcurr })

    const prefix = "TU8699"
    const account_id = prefix + ("0000" + pcurr).slice(-4)

    return account_id
  }
}
