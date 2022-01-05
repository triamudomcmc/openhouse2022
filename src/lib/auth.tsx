import React, { useState, useEffect, useContext, useMemo } from "react"
import Router, { useRouter } from "next/router"

import {
  getAuth,
  User,
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailLink,
  sendSignInLinkToEmail,
  signOut,
  isSignInWithEmailLink,
  onIdTokenChanged,
} from "firebase/auth"
import { onSnapshot } from "firebase/firestore"
import firebaseApp from "./firebase"
import { createUser, getUserRef, getUserData } from "./db"
import { Loading } from "@components/common/Loading"

export interface IUserData extends IInitialUserData {
  username: string
  firstname: string
  lastname: string
  status: string
  school?: string
  grade?: string
  news: string[]
  purpose: string[]
  ticket: string | null
}

interface IInitialUserData {
  uid: string
  email: string | null
  name: string | null
  provider: string
  photoUrl: string | null
}

const auth = getAuth(firebaseApp)

export interface IAuthContext {
  user: User | null
  userData: IUserData | null
  loading: boolean
  setLoading: (loading: boolean) => void
  signinWithFacebook: (redirect: string) => Promise<void>
  signinWithGoogle: (redirect: string) => Promise<void>
  sendSigninWithEmail: (email: string, emailLink: string) => Promise<void>
  signinWithEmail: (email: string) => Promise<void>
  signout: () => void
}

const AuthContext = React.createContext<IAuthContext | null>(null)

export const useAuth = () => {
  return useContext(AuthContext)
}

export const AuthProvider: React.FC = ({ children }) => {
  const auth = useProvideAuth()
  const { pathname } = useRouter()

  // const checkOnboard = useMemo(() => {
  //   let status = false
  //   if (pathname === "/onboard" && auth.user === null) {
  //     // not logged in - wait for redirect
  //     status = true
  //   }
  //   if ((pathname === "/onboard") !== (auth?.userData?.password === "")) {
  //     // onboard done - wait for redirect
  //     status = true
  //   }
  //   if (pathname === "/tos" || pathname === "/privacy-policy") {
  //     status = false
  //   }
  //   return status
  // }, [pathname, auth])

  const checkOnboard = useMemo(() => {
    const isAuth = auth.user !== null
    const isRegistered = auth.user && auth?.userData?.username !== ""
    // const registeredNoGame = auth.user && auth?.userData?.username !== "" && !auth.userData?.ticket
    // const playedGame = auth.user && auth?.userData?.username !== "" && auth.userData?.ticket

    let status = false
    if (pathname === "/onboard" && !isAuth) {
      // not logged in - wait for redirect
      status = true
    }
    if (pathname === "/onboard" && isRegistered) {
      // onboard done - wait for redirect
      status = true
    }
    return status
  }, [pathname, auth])

  const checkGame = useMemo(() => {
    const isAuth = auth.user !== null
    // const isRegistered = auth.user && auth?.userData?.username !== ""
    // const registeredNoGame = auth.user && auth?.userData?.username !== "" && !auth.userData?.ticket
    const playedGame = auth.user && auth?.userData?.username !== "" && auth.userData?.ticket

    let status = false
    if (pathname === "/game" && !isAuth) {
      // not logged in - wait for redirect
      status = true
    }
    if (pathname === "/game" && playedGame) {
      // game done - wait for redirect
      status = true
    }
    return status
  }, [pathname, auth])

  useEffect(() => {
    const noAuth = auth.user === null
    const authNoRegistered = auth.user && !(auth?.userData?.username !== "")
    const registered = auth.user && auth?.userData?.username !== ""
    const registeredNoGame = auth.user && auth?.userData?.username !== "" && !auth.userData?.ticket
    const playedGame = auth.user && auth?.userData?.username !== "" && auth.userData?.ticket

    if (auth.loading === false) {
      // register
      if (pathname === "/register") {
        if (registered) Router.push("/")
        else if (authNoRegistered) Router.push("/register/onboard")
        else if (registeredNoGame) Router.push("/game")
        else if (playedGame) Router.push("/ticket")
      }
      // onboard
      else if (pathname === "/register/onboard") {
        if (noAuth) Router.push("/register")
        else if (registeredNoGame) Router.push("/game")
        else if (playedGame) Router.push("/ticket")
      }
      // login
      else if (pathname === "/login") {
        if (authNoRegistered) Router.push("/register/onboard")
        else if (registered) Router.push("/")
        else if (registeredNoGame) Router.push("/game")
        else if (playedGame) Router.push("/ticket")
      }
      // ticket
      else if (pathname === "/ticket") {
        if (noAuth) Router.push("/register?redirect=ticket")
        else if (authNoRegistered) Router.push("/register/onboard?redirect=ticket")
        else if (registeredNoGame) Router.push("/game")
      }
      // game
      else if (pathname === "/game") {
        if (noAuth) Router.push("/register?redirect=game")
        else if (authNoRegistered) Router.push("/register/onboard?redirect=game")
        else if (playedGame) Router.push("/ticket")
      }
    }
  }, [pathname, auth])

  if (auth.loading || checkOnboard || checkGame) {
    return <Loading />
  }

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
}

function useProvideAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [userData, setUserData] = useState<IUserData | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (user?.uid) {
      const userRef = getUserRef(user.uid)

      const unsubscribe = onSnapshot(userRef, (doc) => {
        setUserData((data) => {
          if (data) {
            return { ...data, ...doc.data() }
          } else return null
        })
      })

      return () => {
        unsubscribe()
        setUserData(null)
      }
    }
  }, [user?.uid])

  const handleUser = async (rawUser: User | null) => {
    if (rawUser && user === null) {
      const user = formatUser(rawUser)
      await createUser(user.uid, user)

      setUser(rawUser)
      const tmpData: any = await getUserData(user.uid)
      setUserData({
        username: "",
        firstname: "",
        lastname: "",
        ...tmpData,
      })
      setLoading(false)
    } else if (rawUser === null) {
      setUser(null)
      setUserData(null)
      setLoading(false)
    }
  }

  const signinWithFacebook = async (redirect: string) => {
    setLoading(true)

    const response = await signInWithPopup(auth, new FacebookAuthProvider())

    handleUser(response.user)

    if (redirect) {
      Router.push(redirect)
    }
  }

  const signinWithGoogle = async (redirect: string) => {
    setLoading(true)

    const response = await signInWithPopup(auth, new GoogleAuthProvider())

    handleUser(response.user)

    if (redirect) {
      Router.push(redirect)
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

  const signout = async () => {
    setLoading(true)

    await handleUser(null)
    Router.push("/")
    await signOut(auth)
  }

  useEffect(() => {
    const unsubscribe = onIdTokenChanged(auth, handleUser)

    return () => unsubscribe()
  }, [])

  return {
    user,
    userData,
    loading,
    setLoading,
    signinWithFacebook,
    signinWithGoogle,
    sendSigninWithEmail,
    signinWithEmail,
    signout,
  }
}

const formatUser = (user: User): IInitialUserData => {
  return {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    provider: user.providerData[0].providerId,
    photoUrl: user.photoURL,
  }
}
