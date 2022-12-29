/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from 'react'
import { useQRCode } from 'next-qrcode'
import Router from 'next/router'
import Link from 'next/link'

import {useAuth} from '@lib/auth'

export default function QrGen() {
    const {Image} = useQRCode()
    const {user} = useAuth()
    const [loading, setLoading] = useState<boolean>(true)
    const [uidData, setUidData] = useState(null)
    const [stampData, setStampData] = useState(null)
    const [clubPanelUrl, setClubPanelUrl] = useState<string>('/')

    async function getUidData(fetchUid: string) {
        if (fetchUid) {
            const res = await fetch(`/api/qrinfo/${fetchUid}`, {
                headers: {
                    req_uid: user?.uid
                }
            })
            const tmp = await res.json()
            if (tmp) {
                setUidData(tmp)
                setLoading(false)
            }
        }
    }

    useEffect(() => {
        if (user?.uid) {
            getUidData(user?.uid)
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [user?.uid])

    useEffect(() => {
        if (uidData?.stamp) {
            if (Object.keys(uidData?.stamp)) {
                setStampData(Object.keys(uidData?.stamp))
            }
        }
    }, [uidData?.stamp])

    if (loading) return (
        <div>Loading...</div>
    )

    if (uidData) {
        return (
            <div>
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
                        },
                    }}
                />

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
        <div>
            <h3>Please sign up to view your QR code</h3>
            <Link href='@pages/auth'><u>Click here to Sign Up</u></Link>
        </div>
    )
}