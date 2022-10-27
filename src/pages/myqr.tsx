/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from 'react'
import { useQRCode } from 'next-qrcode'
import Link from 'next/link'

import {useAuth} from '@lib/auth'
import styles from '@styles/Home.module.css'

export default function QrGen() {
    const {Image} = useQRCode()
    const {user} = useAuth()
    const [uidData, setUidData] = useState(null)
    const [stampData, setStampData] = useState(null)

    async function getUidData(fetchUid: string) {
        if (fetchUid) {
            const res = await fetch(`/api/qrinfo/${fetchUid}`, {
                headers: {
                    req_uid: user?.uid
                }
            })
            const tmp = await res.json()
            if (tmp) setUidData(tmp)
        }
    }

    useEffect(() => {
        if (user?.uid) {
            getUidData(user?.uid)
        }
    }, [user?.uid])

    useEffect(() => {
        if (uidData?.stamp) {
            if (Object.keys(uidData?.stamp)) {
                setStampData(Object.keys(uidData?.stamp))
            }
        }
    }, [stampData, uidData?.stamp])

    
    if (user?.uid) {
        return (
            <div className={styles.main}>
                <Image 
                    text={user?.uid}
                    options={{
                        type: 'image/jpeg',
                        quality: 0.5,
                        level: 'M',
                        margin: 3,
                        scale: 4,
                        width: 200,
                        color: {
                        dark: '#000000',
                        light: '#cccccc',
                        },
                    }}
                />
                <h3>Account Information</h3>
                <h5>Name:{uidData?.name}</h5>
                <h5>ID: {uidData?.account_id}</h5>

                <h3>Stamp journey ~</h3>
                {stampData ? 
                    <div>
                        {stampData.map((club: string) => {
                            return <p key={club}>{club}</p>
                        })}
                    </div>
                : <div><p>Nothing yet...</p></div>
                }
            </div>
        )
    }
    return (
        <div className={styles.main}>
            <h3>Please sign up to view your QR code</h3>
            <Link href='auth'><u>Click here to Sign Up</u></Link>
        </div>
    )
}