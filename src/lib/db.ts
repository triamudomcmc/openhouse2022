import {
  DocumentData,
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  getDoc,
  addDoc,
  collection,
  getDocs,
} from "firebase/firestore"
import firebaseApp from "./firebase"

const db = getFirestore(firebaseApp)

export const getUserRef = (uid: string) => {
  return doc(db, "users", uid)
}

export const updateLiveFeedback = (feedBack: string) => {
  return addDoc(collection(db, "newquestions"), { question: feedBack })
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

// export const getTicketData = async (uid: string): Promise<null | DocumentData> => {
//   const userRef = doc(db, "users", uid)
//   const docObj = await getDoc(userRef)
//   const data = docObj.data()

//   if (!data) return null

//   return {
//     type: data.ticket,
//     uid: uid,
//     name: data.nickname,
//   }
// }

// export const getDonatorsRef = () => {
//   return collection(db, "donators")
// }

// export const addDonators = (data: DocumentData): Promise<DocumentData> => {
//   const donatorsRef = getDonatorsRef()
//   return addDoc(donatorsRef, data)
// }
