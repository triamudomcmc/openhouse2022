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

import { getFirestore as getDB } from './firebase-admin'

const adminDb = getDB()



export const getClubProdArticle = async (clubId: string): Promise<null | DocumentData> => {
  const clubDoc = await adminDb.collection("prodAppr").doc(clubId).get()

  if (clubDoc.exists) return clubDoc.data()
  return undefined
}

export const getClubPendArticle = async (clubId: string): Promise<null | DocumentData> => {
  const clubDoc = await adminDb.collection("pendingAppr").doc(clubId).get()
  if (clubDoc.exists) return clubDoc.data()
  return undefined
  //return await getClubProdArticle(clubId)
}

export const updateArticleToPending = async (clubId: string, data) : Promise<void> => {
  const clubRef = getClubPendRef(clubId)

  data = JSON.parse(data)
  const finalData = {
    Info: {
      nameTH: data.Info?.nameTH,
      nameEN: data.Info?.nameEN,
      member: data.Info?.member
    },
    // Images: data.Images ?? {},
    Contacts: data.Contacts ?? [''],
    ClubArticle: data.ClubArticle,
    ClubArticleDes: data.ClubArticleDes ?? '',
    Advantage: data.Advantage,
    AdvantageDes: data.AdvantageDes ?? '',
    Work: data.Work,
    WorkDes: data.WorkDes ?? '',
    Reviews: data.Reviews
  }
  
  return await setDoc(clubRef, finalData, {merge: true})
}

export const updateImage = async (clubId: string, file: string, field: string) : Promise<void> => {
  const clubPendRef = getClubPendRef(clubId)

  return await setDoc(clubPendRef, {Images: { [field]: file }}, {merge: true})
}

export const updateProfileImage = async (clubId: string, data) : Promise<void> => {
  const clubPendRef = getClubPendRef(clubId)

  return await setDoc(clubPendRef, {Reviews: data}, {merge: true})
}

export const movePendToProd = async (clubId: string) : Promise<void> => {
  const clubPendRef = getClubPendRef(clubId)
  const clubProdRef = getClubProdRef(clubId)

  const pendDoc = await getClubPendArticle(clubId)
  await setDoc(clubProdRef, pendDoc)
  return await deleteDoc(clubPendRef)
}
