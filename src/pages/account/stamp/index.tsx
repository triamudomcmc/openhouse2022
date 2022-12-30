/* eslint-disable jsx-a11y/alt-text */
import React, {useEffect, useState} from 'react'
import { useQRCode } from 'next-qrcode'
import Router from 'next/router'
import Link from 'next/link'

import {useAuth} from '@lib/auth'
import {PageContainer} from "@components/account/PageContainer"

export default function QrGen() {
    const {Image} = useQRCode()
    const {user} = useAuth()
    const [uidData, setUidData] = useState(null)
    const [stampData, setStampData] = useState(null)

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

    if (user?.uid) {
        return (
          <PageContainer>
            <div className="flex flex-col items-center text-deep-turquoise">
              <h3 className="text-2xl font-bold mt-10">Scan here</h3>
              <p className="font-bold -mt-2">เพื่อสะสมแสตมป์จากซุ้มต่าง ๆ</p>
              <div className="rounded-lg my-10">
                <div className="w-48 h-48 rounded-2xl bg-gray-300"/>
                </div>
                <div className="flex flex-col items-center bg-white rounded-3xl py-6 w-full max-w-[380px] shadow-lg">
                  <span className="font-bold text-xl mb-6 mt-4">แสตมป์ของ Babyaraika</span>
                  <div className="flex flex-col space-y-3">
                    <div className="flex flex-row space-x-2">
                      <div className="w-[69px] h-[69px] rounded-full bg-gray-300"/>
                      <div className="w-[69px] h-[69px] rounded-full bg-gray-300"/>
                      <div className="w-[69px] h-[69px] rounded-full bg-gray-300"/>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <div className="w-[69px] h-[69px] rounded-full bg-gray-300"/>
                      <div className="w-[69px] h-[69px] rounded-full bg-gray-300"/>
                      <div className="w-[69px] h-[69px] rounded-full bg-gray-300"/>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <div className="w-[69px] h-[69px] rounded-full bg-gray-300"/>
                      <div className="w-[69px] h-[69px] rounded-full bg-gray-300"/>
                      <div className="w-[69px] h-[69px] rounded-full bg-gray-300"/>
                    </div>
                    <div className="flex flex-row space-x-2">
                      <div className="w-[69px] h-[69px] rounded-full bg-gray-300"/>
                      <div className="w-[69px] h-[69px] rounded-full bg-gray-300"/>
                      <div className="w-[69px] h-[69px] rounded-full bg-gray-300"/>
                    </div>
                  </div>
                  <p className="text-gray-500 text-center leading-5 mt-7 mb-2">สะสมสแตมป์ให้ครบเพื่อแลกรับรางวัลพิเศษ <br/>
                    ณ ซุ้มคณะกรรมการกิจกรรมพัฒนาผู้เรียน (กช.)</p>
                </div>
            </div>
          </PageContainer>)
    }
    return (
        <div className="flex flex-col items-center justify-center min-h-screen w-full">
            <h3>Please sign up to view your QR code</h3>
            <Link href='@pages/auth'><u>Click here to Sign Up</u></Link>
        </div>
    )
}