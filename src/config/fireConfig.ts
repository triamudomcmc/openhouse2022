import { ServiceAccount } from "firebase-admin"

export const fireCert: ServiceAccount = {
  // type: process.env.FIREBASE_TYPE,
  projectId: process.env.FIREBASE_PROJECT_ID,
  //private_key_id: process.env.FIREBASE_PRIVATE_KEY_ID,
  privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/gm, "\n"),
  clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  // client_id: process.env.FIREBASE_CLIENT_ID,
  // auth_uri: process.env.FIREBASE_AUTH_URI,
  // token_uri: process.env.FIREBASE_TOKEN_URI,
  // auth_provider_x509_cert_url: process.env.FIREBASE_AUTH_PROVIDER_CERT,
  // client_x509_cert_url: process.env.FIREBASE_CLIENT_CERT,
}

export const fireConfig = {
  apiKey: "AIzaSyAFy7jPwbHrgB2qWn6fdwnrIXpFwFFohyE",
  authDomain: "tucmc-oph2023.firebaseapp.com",
  projectId: "tucmc-oph2023",
  storageBucket: "tucmc-oph2023.appspot.com",
  messagingSenderId: "578053861085",
  appId: "1:578053861085:web:41bd06a737cacc1d25b534",
  measurementId: "G-SV6HF6H8X8",
}
