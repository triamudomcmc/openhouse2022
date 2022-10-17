import React, { useState, useRef } from "react"
import { QrReader } from "react-qr-reader"

import { useAuth } from "@lib/auth";
import styles from "../styles/Home.module.css"


export default function Scan() {
    const {user} = useAuth()
    const [uid, setUid] = useState(null);
    const [uidData, setUidData] = useState(null)
    async function getUidData(fetchUid: string) {
        if (fetchUid) {
            const res = await fetch(`/api/qrinfo/onsite/${fetchUid}`)
            const tmp = await res.json()
            if (tmp) setUidData(tmp)
        }
    }

    if (user?.roles['tucmc']) {
        return (
            <div className={styles.main}>
                <div className={styles.container}>
                    <QrReader
                        onResult={(result, error) => {
                            if (result) {
                                setUid(result?.text)
                                getUidData(result?.text)
                            }
                        }}
                        constraints={{ facingMode:  "environment"  }}
                        containerStyle={{ width: "50%", height: "50%" }}
                    />
                    <p>read onboard: {uid}</p>
                </div>
                {/* <button onClick={getUidData} type="button">Query</button> */}
                    
                {uidData?.name ?
                    <div>
                        <p>Name: {uidData.name}</p>
                        <p>Email: {uidData.email}</p>
                    </div>
                : null
                }
            </div>
        )
    }

    return (
        <div className={styles.main}><h5>Access Denied</h5></div>
    )
}
