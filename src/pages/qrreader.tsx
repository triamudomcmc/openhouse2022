import React, { useState, useRef, useEffect } from "react"
import { QrReader } from "react-qr-reader"

import { useAuth } from "@lib/auth";


export default function Scan() {
    const {user} = useAuth()
    const [uid, setUid] = useState<string | null>(null);
    const [uidData, setUidData] = useState(null)

    function handleQrUid(result, error) {
        if (result) {
            setUid(result.text)
        }
        if (error) {
            setUid(null)
            setUidData(null)
        }
    }

    useEffect(() => {
        const getUidData = async (uid) => {
            const res = await fetch(`/api/qrinfo/onsite/${uid}`, {
                method: 'POST',
                body: JSON.stringify({
                    executerUid: user?.uid
                })
            })
            if (res) setUidData(await res.json())
        }
        if (uid) getUidData(uid)
    }, [uid, user?.uid])

    if (user?.roles?.hasOwnProperty('tucmc') || user?.roles?.hasOwnProperty('aic')) {
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
        return (
            <h1>Access Denied</h1>
        )
    }
}
