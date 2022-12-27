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



const getClubProd = async (clubId: string) => {
  return await adminDb.collection("prodAppr").doc(clubId).get()
}

const getClubPend = async (clubId: string) => {
  return await adminDb.collection("pendingAppr").doc(clubId).get()
}

export const getClubProdArticle = async (clubId: string): Promise<null | DocumentData> => {
  const clubDoc = await getClubProd(clubId)
  if (clubDoc.exists) return clubDoc.data()
  return undefined
}

export const getClubPendArticle = async (clubId: string): Promise<null | DocumentData> => {
  const clubDoc = await getClubPend(clubId)
  if (clubDoc.exists) return clubDoc.data()
  return undefined
  //return await getClubProdArticle(clubId)
}

export const updateArticleToPending = async (clubId: string, data) : Promise<void> => {

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
  await adminDb.collection("pendingAppr").doc(clubId).set(finalData, {merge: true})

  return
}

export const updateImage = async (clubId: string, file: string, field: string) : Promise<void> => {

  await adminDb.collection("pendingAppr").doc(clubId).set({Images: { [field]: file }}, {merge: true})
  return 
}

export const updateProfileImage = async (clubId: string, data) : Promise<void> => {

  await adminDb.collection("pendingAppr").doc(clubId).set({Reviews: data}, {merge: true})
}

export const movePendToProd = async (clubId: string) : Promise<void> => {
  const pendDoc = await getClubPend(clubId)
  await adminDb.collection("prodAppr").doc(clubId).set(pendDoc.data())
  await pendDoc.ref.delete()
}

export const declinePend = async (clubId: string) : Promise<void> => {
  await adminDb.collection('pendingAppr').doc(clubId).set({decliened: true}, {merge: true})
}
