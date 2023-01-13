/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react"
import { useQRCode } from "next-qrcode"
import NextImage from "next/image"
import { motion } from "framer-motion"

import { useAuth } from "@lib/auth"
import { PageContainer } from "@components/account/PageContainer"
import { groupByN } from "@utilities/array"
import noAuth from "@pages/noAuth"
import notFound from "@pages/404"
import { getUserData } from "@lib/clientDB"
import { IUserData } from "@ctypes/account"

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
  // const [isFull, setIsFull] = useState(false)

  async function getUidData(fetchUid: string): Promise<void> {
    if (fetchUid) {
      const uidData = await getUserData(user?.uid)
      setUidData(uidData as IUserData)
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
        const struct: { [key: string]: string } = {}
        struct.id = index.toString()
        // @ts-ignore
        struct.name = value?.nameTH
        data.push(struct)
        index + 1
      }
      setStampData(data)
      // if(stampData.length >= 12) setIsFull(true)
    }
  }, [uidData?.stamp])

  if (user?.uid && (user?.club || user?.roles?.hasOwnProperty("staff"))) return notFound()

  if (user?.uid) {
    return (
      <PageContainer>
        <div className="flex flex-col items-center text-deep-turquoise">
          <h3 className="mt-10 text-2xl font-bold">Scan here</h3>
          <p className="-mt-2 font-bold">เพื่อสะสมแสตมป์จากซุ้มต่าง ๆ</p>
          <div className="w-48 h-48 my-10 bg-white rounded-lg">
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
          <div
            className={`flex flex-col relative items-center bg-white rounded-3xl py-6 w-full max-w-[380px] shadow-lg `}
          >
            {/* {stampData.length >= 12 &&  */}
            <div className="absolute z-50 flex flex-col items-center justify-center w-full h-full -mt-6 bg-[#000000] bg-opacity-50 rounded-3xl">
              <h1 className="text-white text-[30px] lg:text-[40px]">สะสมครบแล้ว !</h1>
              {/* <p className="px-[30px] mt-3 lg:mt-5 text-white">มาแลกรับของรางวัลสุดพิเศษ</p> */}
              <p className="px-[30px] mt-3 lg:mt-5 text-white text-center">
                ของรางวัลสำหรับวันนี้ได้ถูกแลกครบแล้ว
                <br />
                ขอบคุณที่มาร่วมกิจกรรม
              </p>
              {/* <p className="px-[30px] text-white">ได้ที่ซุ้ม กช. บริเวณข้างตึก 81 ปีได้เลย</p> */}
            </div>
            {/* } */}
            <span className="mt-4 mb-6 text-xl font-bold text-center">แสตมป์ของ {user?.Info?.username}</span>
            <div className="flex flex-col space-y-3">
              {groupByN(3, stampData).map((group, index) => (
                <div key={index}>
                  {index <= 3 && (
                    <div key={index} className="grid grid-cols-3 gap-2">
                      {group.map((stamp) => (
                        <Stamp name={stamp.name} key={stamp.id} />
                      ))}
                      {Array.from({ length: 3 - group.length }).map((_, index) => (
                        <BlankStamp key={index} />
                      ))}
                    </div>
                  )}
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
            <p className="mb-2 leading-5 text-center text-gray-500 mt-7">
              สะสมแสตมป์ให้ครบเพื่อแลกรับรางวัลพิเศษ <br />ณ ซุ้มคณะกรรมการงานกิจกรรมพัฒนาผู้เรียน (กช.)
            </p>
          </div>
        </div>
      </PageContainer>
    )
  }
  return noAuth()
}
