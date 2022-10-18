import React, {useEffect, useState, useContext} from 'react'
import Router, {useRouter} from 'next/router'
import {
    getAuth,
    onAuthStateChanged,
    User,
    signInWithPopup,
    signOut,
    GoogleAuthProvider,
} from 'firebase/auth'
import firebaseApp from "./firebase"
import { createUser, getUserData } from './dbMethod'
import { IAuthContext, IInitialUserData, IUserData } from '@ctypes/account'

interface actProp {
    children: React.ReactNode
}

const auth = getAuth(firebaseApp)

const AuthContext = React.createContext<IAuthContext | null>(null)

export const useAuth = () => {
    return useContext(AuthContext)
}

export const AuthProvider: React.FC<actProp> = ({ children }) => {
    const auther = useProvideAuth()
    const {pathname} = useRouter()

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
            const user = userFormatter(rawUser)
            await createUser(user.uid, user)
            setUser(rawUser)
        } else if (rawUser === null) {
            setUser(null)
            setLoading(null)
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

    const signout = async () => {
        setLoading(true)
        await handleUser(null)
        await signOut(auth)
    }

    return {
        user,
        setUser,
        loading,
        setLoading,
        signinWithGoogle,
        signout
    }
}

const userFormatter = (user: User): IInitialUserData => {
    return {
        uid: user.uid,
        email: user.email,
        name: user.displayName,
        provider: user.providerData[0].providerId,
        photoUrl: user.photoURL,
    }
}