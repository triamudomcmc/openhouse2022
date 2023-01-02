/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react"
import { useQRCode } from "next-qrcode"
import Router from "next/router"
import Link from "next/link"
import NextImage from "next/image"
import { motion } from "framer-motion"

import { useAuth } from "@lib/auth"
import { PageContainer } from "@components/account/PageContainer"
import { groupByN } from "@utilities/array"

interface StampType {
  id: string
  name: string
}

function Stamp({ name }: { name: string }) {
  const [hovered, setHovered] = useState(false)

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="w-[75px] h-[75px] relative"
    >
      <motion.div
        variants={{ initial: { opacity: 0 }, hovered: { opacity: 1 } }}
        animate={hovered ? "hovered" : "initial"}
        className="absolute text-center text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-36 rounded-xl bg-[#37498B] text-white z-20 bg-opacity-90 p-4"
      >
        <p>{name}</p>
      </motion.div>
      <NextImage src="/assets/stamp.svg" alt="stamp" layout="fill" />
    </div>
  )
}

function BlankStamp() {
  return <div className="w-[69px] h-[69px] border-[6px] border-none rounded-full bg-gray-300" />
}

export default function QrGen() {
  const QRCode = useQRCode().Image
  const { user } = useAuth()
  const [uidData, setUidData] = useState(null)
  const [stampData, setStampData] = useState([])

  async function getUidData(fetchUid: string): Promise<void> {
    if (fetchUid) {
      const res = await fetch(`/api/qrinfo/${fetchUid}`, {
        headers: {
          req_uid: user?.uid,
        },
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
      const uidStamp = uidData?.stamp
      const data = []
      let index = 0
      for (let [key, value] of Object.entries(uidStamp)) {
        const struct: {[key: string]: string} = {}
        struct.id = index.toString()
        // @ts-ignore
        struct.name = value?.nameTH
        data.push(struct)
        index + 1
      }
      setStampData(data)
    }
  }, [uidData?.stamp])

  if (user?.uid) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center text-deep-turquoise">
          <h3 className="text-2xl font-bold mt-10">Scan here</h3>
          <p className="font-bold -mt-2">เพื่อสะสมแสตมป์จากซุ้มต่าง ๆ</p>
          <div className="rounded-lg my-10 w-48 h-48 rounded-2xl bg-white">
            <div className="mt-[6px] ml-[6px]">
              <QRCode
                text={user?.uid}
                options={{
                  type: "image/jpeg",
                  quality: 0.5,
                  level: "M",
                  scale: 4,
                  width: 180,
                  color: {
                    dark: "#000000",
                    light: "#FFFFFF",
                  },
                }}
              />
            </div>
          </div>
          <div className="flex flex-col items-center bg-white rounded-3xl py-6 w-full max-w-[380px] shadow-lg">
            <span className="font-bold text-xl mb-6 mt-4">แสตมป์ของ {user?.Info?.username}</span>
            <div className="flex flex-col space-y-3">
              {groupByN(3, stampData).map((group, index) => (
                <div key={index} className="grid grid-cols-3 gap-2">
                  {group.map((stamp) => (
                    <Stamp name={stamp.name} key={stamp.id} />
                  ))}
                  {Array.from({ length: 3 - group.length }).map((_, index) => (
                    <BlankStamp key={index} />
                  ))}
                </div>
              ))}
              {Array.from({ length: 4 - Math.ceil(stampData.length / 3) }).map((_, index) => (
                <div key={index} className="grid grid-cols-3 gap-2">
                  <BlankStamp key={index} />
                  <BlankStamp key={index} />
                  <BlankStamp key={index} />
                </div>
              ))}
            </div>
            <p className="text-gray-500 text-center leading-5 mt-7 mb-2">
              สะสมสแตมป์ให้ครบเพื่อแลกรับรางวัลพิเศษ <br />ณ ซุ้มคณะกรรมการกิจกรรมพัฒนาผู้เรียน (กช.)
            </p>
          </div>
        </div>
      </PageContainer>
    )
  }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen w-full">
      <h3>Please sign up to view your QR code</h3>
      <Link href="@pages/auth">
        <u>Click here to Sign Up</u>
      </Link>
    </div>
  )
}
