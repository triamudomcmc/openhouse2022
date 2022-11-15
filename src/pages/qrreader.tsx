import React, { useState, useRef } from "react"
import { QrReader } from "react-qr-reader"

import { useAuth } from "@lib/auth";


export default function Scan() {
    const {user} = useAuth()
    const [uid, setUid] = useState<string | null>(null);
    const [uidData, setUidData] = useState(null)

    function handleQrUid(result, error) {
        if (result) {
            setUid(result.text)
            getUidData(result.text)
        }
        if (error) {
            setUidData(null)
        }
    }

    async function getUidData(fetchUid: string) {
        if (fetchUid) {
            const res = await fetch(`/api/qrinfo/onsite/${fetchUid}`, {
                method: 'POST',
                body: JSON.stringify({
                    executerUid: user?.uid
                })
            })
            const tmp = await res.json()
            if (tmp) setUidData(tmp)
        }
    }

    try {
        if (user?.roles['tucmc'] || user?.roles['aic']) {
            return (
                <div>
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
        else {
            return false
        }
    }
    catch {
        return (
            <div><h5>Access Denied</h5></div>
        )
    }
}
