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

export const createUser = async (uid: string, data: DocumentData): Promise<void> => {
  const userRef = getUserRef(uid)
  const checkExist = (await getDoc(userRef)).exists()
  if (checkExist) {
    return undefined
  }
  else {
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
  }
  catch {
    const pcurr = curr+1

    await updateDoc(ref, { current: pcurr })

    const prefix = "TU8699"
    const account_id = prefix+("0000"+pcurr).slice(-4)

    return account_id
  }
}

export const markOnsite = async (uid: string): Promise<void> => {
  const marked = {onSite: true}
  const userRef = getUserRef(uid)

  return await updateDoc(userRef, marked)
}

export const stamp = async (club: string,uid: string): Promise<void> => {
  const userRef = getUserRef(uid)

  return await updateDoc(userRef, {[`stamp.${club}`]: true})
}

export const getClubProdRef = (clubId: string) => {
  return doc(db, "prodAppr", clubId)
}

export const getClubPendRef = (clubId: string) => {
  return doc(db, "pendingAppr", clubId)
}

export const getClubProdArticle = async (clubId: string): Promise<null | DocumentData> => {
  const clubRef = getClubProdRef(clubId)
  const doc = await getDoc(clubRef)

  if (doc.exists()) return doc.data()
  return undefined
}

export const getClubPendArticle = async (clubId: string): Promise<null | DocumentData> => {
  const clubRef = getClubPendRef(clubId)
  const doc = await getDoc(clubRef)

  if (doc.exists()) return doc.data()
  return undefined
  //return await getClubProdArticle(clubId)
}

export const updateArticleToPending = async (clubId: string, data) : Promise<void> => {
  const clubRef = getClubPendRef(clubId)

  const finalData = {
    Description: data.Description,
    MainArticle: data.MainArticle,
  }

  // const checkExist = (await getDoc(clubRef)).exists()
  // if (checkExist) return undefined
  // else return setDoc(clubRef, finalData, { merge: true })
  return await setDoc(clubRef, finalData, {merge: true})
}

export const movePendToProd = async (clubId: string) : Promise<void> => {
  const clubPendRef = getClubPendRef(clubId)
  const clubProdRef = getClubProdRef(clubId)

  const pendDoc = await getClubPendArticle(clubId)
  await setDoc(clubProdRef, pendDoc)
  return await deleteDoc(clubPendRef)
}
