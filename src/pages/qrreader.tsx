import React, { useState, useRef, useEffect } from "react"
import { QrReader } from "react-qr-reader"

import { useAuth } from "@lib/auth"

export default function Scan() {
  const { user } = useAuth()
  const [uid, setUid] = useState<string | null>(null)
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
        method: "POST",
        body: JSON.stringify({
          executerUid: user?.uid,
        }),
      })
      if (res) setUidData(await res.json())
    }
    if (uid) getUidData(uid)
  }, [uid, user?.uid])

  if (user?.roles?.hasOwnProperty("tucmc") || user?.roles?.hasOwnProperty("aic")) {
    return (
      <div className="flex items-center justify-center w-screen h-screen bg-cream">
        <div className="mx-[10px]">
          <div className="h-[230px] w-[290px] lg:w-[320px] lg:h-[254px] flex items-center justify-center rounded-[5px] bg-qr-reader mx-auto">
            <QrReader
              className="w-[240px] lg:w-[277px]"
              onResult={(result, error) => {
                handleQrUid(result, error)
              }}
              constraints={{ facingMode: "environment" }}
              // containerStyle={{ 'border-radius':'40px'}}
            />
          </div>
          {/* Fallback procedure, manually click button ! */
          /* <button onClick={getUidData} type="button">Query</button> */}

          {uidData ? (
            <div className="mt-[24px] text-[20px] lg:text-[28px] text-blue-text">
              <h1 className="text-center text-[24px] lg:text-[32px]">
                {uidData.onSite ? "Marked" : "Something went wrong please consider re-scan"}
              </h1>
              <p className="mt-[15px] lg:mtx-[25px] text-left">
                <span className="font-[600]">Name:</span> {uidData.name}
              </p>
              <p className="text-left">
                <span className="font-[600]">Email:</span> {uidData.email}
              </p>
            </div>
          ) : null}
        </div>
      </div>
    )
  } else {
    return <h1>Access Denied</h1>
  }
}
