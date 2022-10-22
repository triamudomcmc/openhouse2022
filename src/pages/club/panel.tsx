import React, {useEffect, useState} from 'react'
import { QrReader } from 'react-qr-reader'

import { useAuth } from '@lib/auth'
import { stamp } from '@lib/dbMethod'

import styles from '@styles/Home.module.css'

export default function ClubPanel() {
    const {user} = useAuth()
    const [club, setClub] = useState(null)
    const [uid, setUid] = useState(null)
    const [uidData, setUidData] = useState(null)
    const [stpress, setStPress] = useState(false)

    function handleQrUid(result, error) {
        if (result) {
            setStPress(false)
            setUid(result.text)
            getUidData(result.text)
        }
        if (error) {
            setStPress(false)
            setUidData(null)
            getUidData(null)
        }
    }

    async function getUidData(fetchUid: string) {
        if (fetchUid) {
            const res = await fetch(`/api/qrinfo/onsite/${fetchUid}`)
            const tmp = await res.json()
            if (tmp) setUidData(tmp)
        }
    }

    async function stampit() {
        stamp(club, uid)
        setStPress(true)
    }

    useEffect(() => {
        if (user?.club) setClub(user?.club)
    }, [user?.club])

    if (club !== null) {
        return (
            <div className={styles.main}>
                <h3>Club Panel</h3>
                <h5>Your club is: {club}</h5>
                    <QrReader
                        onResult={(result, error) => {
                            handleQrUid(result, error)
                        }}
                        constraints={{ facingMode:  "environment"  }}
                        containerStyle={{ width: "50%", height: "50%" }}
                    />
                    
                {uidData ?
                
                    <div>
                        <p>Name: {uidData.name}</p>
                        <p>Email: {uidData.email}</p>
                        {uidData?.stamp[club] || stpress ? 
                            <button type="button" disabled>Already got one</button>
                        : <button onClick={stampit}>Stamp</button>}
                    </div>
                : null
                }
            </div>
        )
    }

    return (
        <div className={styles.main}>
            <h3>Access Denied</h3>
        </div>
    )
}