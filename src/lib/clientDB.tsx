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


export const getUserRef = (uid: string) => {
  const db = getFirestore()
  return doc(db, "account", uid)
}

export const getClubProdRef = (clubId: string) => {
  const db = getFirestore()
  return doc(db, "prodAppr", clubId)
}

export const getClubPendRef = (clubId: string) => {
  const db = getFirestore()
  return doc(db, "pendingAppr", clubId)
}

export const updateUser = (uid: string, data: DocumentData): Promise<void> => {
  const userRef = getUserRef(uid)

  return updateDoc(userRef, data)
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
  const db = getFirestore()
  const ref = doc(db, "account", "count")
  const curr = (await getDoc(ref)).data().current

  try {
    const userid = (await getUserData(uid)).account_id
    return userid
  } catch {
    const pcurr = curr + 1

    await updateDoc(ref, { current: pcurr })

    const prefix = "TU8699"
    const account_id = prefix + ("00000" + pcurr).slice(-5)

    return account_id
  }
}
