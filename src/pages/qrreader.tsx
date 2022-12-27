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
            <div className="flex items-center justify-center w-screen h-screen bg-cream">
                <div>
                    <div className='h-[230px] w-[290px] flex items-center justify-center rounded-[5px] bg-qr-reader'>
                        <QrReader
                            className="w-[240px]"
                            onResult={(result, error) => {
                                handleQrUid(result, error)
                            }}
                            constraints={{ facingMode:  "environment"  }}
                            // containerStyle={{ 'border-radius':'40px'}}
                        />
                    </div>
                    {
                    /* Fallback procedure, manually click button ! */
                    /* <button onClick={getUidData} type="button">Query</button> */
                    }
                        
                    {uidData ?
                        <div className="mt-[24px]">
                            <h1>{uidData.onSite ? 'Marked' : 'Something went wrong please consider re-scan'}</h1>
                            <p className="mt-[8px]">Name: {uidData.name}</p>
                            <p>Email: {uidData.email}</p>
                        </div>
                    : null
                    }
                </div>
            </div>
        )
    }
    else {
        return (
            <h1>Access Denied</h1>
        )
    }
}
