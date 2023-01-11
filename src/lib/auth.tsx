import React, { useEffect, useState, useContext } from "react"
import Router, { useRouter } from "next/router"
import {
  onAuthStateChanged,
  User,
  signInWithPopup,
  signInWithEmailLink,
  sendSignInLinkToEmail,
  isSignInWithEmailLink,
  signOut,
  GoogleAuthProvider,
} from "firebase/auth"
import { createUser, getCurrentUserId, getUserData } from "./clientDB"
import { IAuthContext, IInitialUserData, IUserData } from "@ctypes/account"
import { fireConfig } from "@config/fireConfig"
import { initializeApp } from "@firebase/app"
import { auth } from "./firebase"

interface actProp {
  children: React.ReactNode
}

const AuthContext = React.createContext<IAuthContext | null>(null)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC<actProp> = ({ children }) => {
  initializeApp(fireConfig)

  const auther = useProvideAuth()
  const { pathname } = useRouter()

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const userData = await getUserData(user.uid)
        auther.setUser(userData)
        auther.setLoading(false)
      }
    }) // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return <AuthContext.Provider value={auther}>{children}</AuthContext.Provider>
}

function useProvideAuth() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const handleUser = async (rawUser: User | null) => {
    if (rawUser && user === null) {
      const currentAccountId = await getCurrentUserId(rawUser.uid)
      const user = userFormatter(rawUser, currentAccountId)
      await createUser(user.uid, user)
      const data = await getUserData(rawUser.uid)
      setUser(data)
      return data
    } else if (rawUser === null) {
      setUser(null)
      setLoading(null)
    }
  }

  const sendSigninWithEmail = async (email: string, emailLink: string) => {
    await sendSignInLinkToEmail(auth, email, {
      url: emailLink,
      handleCodeInApp: true,
    })
      .then(() => {
        // The link was successfully sent. Inform the user.
        window.localStorage.setItem("emailForSignIn", email)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message

        console.error(`${errorCode} - ${errorMessage}`)
      })
  }

  const signinWithEmail = async (email: string) => {
    setLoading(true)

    if (isSignInWithEmailLink(auth, window.location.href)) {
      const response = await signInWithEmailLink(auth, email, window.location.href)
      window.localStorage.removeItem("emailForSignIn")
      handleUser(response.user)
    }
  }

  const signinWithGoogle = async (redirect: string) => {
    setLoading(true)
    const response = await signInWithPopup(auth, new GoogleAuthProvider())
    const handleStatus = await handleUser(response.user)

    if (handleStatus?.qa) {
      Router.push(`/auth`)
    } else if (redirect) {
      Router.push(redirect)
    }
  }

  const signout = async () => {
    setLoading(true)
    await handleUser(null)
    await signOut(auth)
    Router.push("/auth")
  }

  return {
    user,
    setUser,
    loading,
    setLoading,
    signinWithGoogle,
    signinWithEmail,
    sendSigninWithEmail,
    signout,
  }
}

const userFormatter = (user: User, currentid: string): IInitialUserData => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
    stamp: JSON.parse("{}"),
    account_id: currentid,
  }
}
