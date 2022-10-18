import React, { useState, useRef } from "react"
import { QrReader } from "react-qr-reader"

import { useAuth } from "@lib/auth";
import styles from "../styles/Home.module.css"


export default function Scan() {
    const {user} = useAuth()
    const [uid, setUid] = useState<string | null>(null);
    const [uidData, setUidData] = useState(null)

    function handleQrUid(result, error) {
        if (result) {
            setUid(result.text)
            getUidData(result.text)
        }
    }

    async function getUidData(fetchUid: string) {
        if (fetchUid) {
            const res = await fetch(`/api/qrinfo/onsite/${fetchUid}`)
            const tmp = await res.json()
            if (tmp) setUidData(tmp)
        }
    }

    try {
        if (user?.roles['tucmc'] || user?.roles['aic']) {
            return (
                <div className={styles.main}>
                        <QrReader
                            onResult={(result, error) => {
                                handleQrUid(result, error)
                            }}
                            constraints={{ facingMode:  "environment"  }}
                            containerStyle={{ width: "50%", height: "50%" }}
                        />
                    {
                    /* Fallback procedure, manually click button ! */
                    /* <button onClick={getUidData} type="button">Query</button> */
                    }
                        
                    {uidData ?
                        <div>
                            <h1>{uidData.onSite ? 'Marked' : 'Something went wrong please consider re-scan'}</h1>
                            <p>Name: {uidData.name}</p>
                            <p>Email: {uidData.email}</p>
                        </div>
                    : null
                    }
                </div>
            )
        }
    }
    catch {
        return (
            <div className={styles.main}><h5>Access Denied</h5></div>
        )
    }
}
