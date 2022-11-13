import React, {useEffect, useState} from 'react'

import {useAuth} from "@lib/auth"

import Image from 'next/image'

export default function Sane() {
    const {user, signinWithGoogle, signout} = useAuth()
    if (!user?.uid) {
        return (
            <div>
                <button onClick={() => signinWithGoogle('/myqr')}>Google</button>
            </div>
        )
    }

    return (
        <div>
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