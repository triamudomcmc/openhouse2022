import React, {useEffect, useState} from 'react'

import {useAuth} from "@lib/auth"

import styles from '@styles/Home.module.css'
import Image from 'next/image'

export default function Sane() {
    const {user, signinWithGoogle, signout} = useAuth()
    if (!user?.uid) {
        return (
            <div className={styles.main}>
                <button onClick={() => signinWithGoogle('/myqr')}>Google</button>
            </div>
        )
    }

    return (
        <div className={styles.main}>
            {user?.email ? 
                <>
                    <h3>
                        Welcome! {user.email}
                    </h3>
                </>
            : <h3>sussy</h3>}
            <br/>
            <button onClick={() => signout()}>Sign Out</button>
        </div>
    )
}