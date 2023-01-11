import React, { useState, useRef, useEffect, ReactNode } from "react"
import { QrReader } from "react-qr-reader"

import { useAuth } from "@lib/auth"
import noAuth from "@pages/noAuth"
import { PageContainer } from "@components/account/PageContainer"
import { FC } from "react"

const FocusRing: FC<{
  color?: number
}> = ({color}) => {
  const FDVariant = color
  return (
    <svg width="200" height="200" viewBox="0 0 241 238" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M34.0939 3C20.3234 2.99999 1.38818 5.34239 3.10953 37.5487"
        stroke={FDVariant === 1 ? 'white' : 'orange'}
        strokeWidth="5.75812"
        strokeLinecap="round"
      />
      <path
        d="M204.534 3C219.325 2.99999 239.662 5.34239 237.814 37.5487"
        stroke={FDVariant === 1 ? 'white' : 'orange'}
        strokeWidth="5.75812"
        strokeLinecap="round"
      />
      <path
        d="M204.534 234.477C219.325 234.477 239.662 232.134 237.814 199.928"
        stroke={FDVariant === 1 ? 'white' : 'orange'}
        strokeWidth="5.75812"
        strokeLinecap="round"
      />
      <path
        d="M34.0939 234.477C20.3234 234.477 1.38818 232.134 3.10953 199.928"
        stroke={FDVariant === 1 ? 'white' : 'orange'}
        strokeWidth="5.75812"
        strokeLinecap="round"
      />
    </svg>
  )
}

export default function Scan() {
  const { user } = useAuth()
  const [uid, setUid] = useState<string | null>(null)
  const [FDVariant, setFDVariant] = useState<number>(0)
  const [marked, setMarked] = useState<boolean>(true)

  const descriptionVariants: ReactNode[] = [
    <span key="marked" className="bg-orange py-0.5 px-14 rounded-full">
      
    </span>,
    <div key="stamped" className="bg-[#C9CCE9] py-0.5 px-5 rounded-full">
      <span className="text-white font-semibold">STAMPED</span>
    </div>,
  ]

  async function mark(uid: string) {
    const res = await fetch(`/api/qrinfo/onsite/${uid}`, {
      method: "POST",
      body: JSON.stringify({
        executerUid: user?.uid,
      }),
    })
    if (res) {
      setMarked(true)
      setFDVariant(1)
    }
  }

  useEffect(() => {
    if (uid) mark(uid)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uid, user?.uid])

  function handleQrUid(result, error) {
    if (result) {
      setUid(result.text)
    }
    if (error) {
      setUid(null)
      setFDVariant(0)
    }
  }

  if (user?.roles?.hasOwnProperty("tucmc") || user?.roles?.hasOwnProperty("aic")) return (
    <PageContainer>
      <div className="flex flex-col items-center mt-10">
        <div
          style={{ background: "linear-gradient(180deg, #8087CD 0%, #E29E78 100%)" }}
          className="flex items-center justify-center h-[250px] w-[250px] rounded-[26.9px]"
        >
          <div className="h-[220px] w-[220px] bg-[#130D03] relative rounded-[25.56px]">
            <QrReader
              className="absolute w-[220px]"
              onResult={(result, error) => {
                handleQrUid(result, error)
              }}
              constraints={{ facingMode: "environment" }}
              containerStyle={{ "borderRadius": "25.56px" }}
            />
            <div className="absolute flex items-center justify-center w-full h-full">
              <FocusRing color={FDVariant}/>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center mt-4 w-[191px]">
          <div className="mb-2">{descriptionVariants[FDVariant]}</div>
        </div>
      </div>
    </PageContainer>
  )

  return noAuth()
}
