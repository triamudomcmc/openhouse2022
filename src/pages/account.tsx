/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from 'react'
import { useQRCode } from 'next-qrcode'
import {useRouter} from 'next/router'
import Link from 'next/link'

import {useAuth} from '@lib/auth'
import notFound from './404'

export default function QrGen() {
    const {Image} = useQRCode()
    const router = useRouter()
    const {user} = useAuth()
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

    useEffect(() => {
        if (user?.club) setClubPanelUrl(`/clubs/${user?.club}/panel`)
    }, [clubPanelUrl, user?.club])

    useEffect(() => {
        if (!(user?.Info ?? false)) {
            router.push({
                pathname: "/auth",
                query: {
                  method: "email",
                },
            })
        }
    }, [router, user])

    if (user?.uid) {
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
                <h3>Account Information</h3>
                <h5>Name:{uidData?.name}</h5>
                <h5>ID: {uidData?.account_id}</h5>

                {user?.club && clubPanelUrl
                ?   <Link href={`${clubPanelUrl}`}>
                        Club Panel
                    </Link>
                : null
                }

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
        notFound()
    )
}