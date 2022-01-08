import { AdaptiveBg } from "@components/common/AdaptiveBg"
import { MetaData } from "@components/common/Meta"
import { PortraitTicket } from "@components/ticket/Portrait"
import { SquareTicket, TicketProps } from "@components/ticket/Square"
import { getTicketData } from "@lib/db-admin"
import { ticketTypes } from "@types"
import { useWindowDimensions } from "@utils/useWindowDimensions"
import classNames from "classnames"
import { motion } from "framer-motion"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link"
import { useState } from "react"
import Head from "next/head"

export interface ticketProps {
  name: string | null
  type: ticketTypes | null
  uid: string | null
}

const TicketPage: NextPage<TicketProps> = ({ name, type, uid }) => {
  const [isSquare, setSquareDisplay] = useState(false)
  const { width } = useWindowDimensions()

  const cardWidth: number = width / 2 < 500 ? (width / 2 < 350 ? 350 : width / 2) : 500

  if (!name || !type || !uid)
    return (
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/ticket.jpg", height: "1224px", expandTo: "100%"}}
        secondary={{ background: "/images/backgrounds/ticket-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/ticket-mobile-default.jpg", height: "926px" }}
        classname="py-2"
        element="main"
      >
        <MetaData />
        <div className="w-screen h-screen flex flex-col justify-center items-center">
          <p className="font-display font-regular text-md text-white">ไม่พบตั๋วการเดินทางดังกล่าว</p>
          <Link href="/">
            <motion.a
              className="px-8 py-2 rounded-full cursor-pointer inline-flex font-display text-white border border-white hover:bg-gray-200 hover:text-gray-900 transition-colors mt-4"
              whileHover={{ scale: 1.1 }}
            >
              กลับสู่หน้าแรก
            </motion.a>
          </Link>
        </div>
      </AdaptiveBg>
    )

  const switchToSquare = () => {
    setSquareDisplay(true)
  }

  const switchToPortrait = () => {
    setSquareDisplay(false)
  }

  return (
    <>
      <AdaptiveBg
        primary={{ background: "/images/backgrounds/ticket.jpg", height: "1224px", expandTo: "100%" }}
        secondary={{ background: "/images/backgrounds/ticket-mobile.jpg", height: "926px" }}
        mobile={{ background: "/images/backgrounds/ticket-mobile-default.jpg", height: "926px" }}
        classname="main-section font-display"
      >
        <Head>
          <title>{name}&apos;s ticket</title>
          <meta name="description" content="ลงทะเบียนเพื่อรับตั๋วของคุณเลย !" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />

          {/* Open Graph / Facebook  */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://openhouse.triamudom.ac.th/" />
          <meta property="og:title" content={`${name}'s ticket'`} />
          <meta property="og:description" content="ลงทะเบียนเพื่อรับตั๋วของคุณเลย !" />
          <meta property="og:image" content={`/meta/ticket/${type}.png`} />

          {/* Twitter  */}
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://openhouse.triamudom.ac.th/" />
          <meta property="twitter:title" content={`${name}'s ticket`} />
          <meta property="twitter:description" content="ลงทะเบียนเพื่อรับตั๋วของคุณเลย !" />
          <meta property="twitter:image" content={`/meta/ticket/${type}.png`} />
        </Head>
        <div className="flex flex-col items-center space-y-4">
          <h2 className="text-center text-white font-display text-4xl font-semibold mb-4">ตั๋วการเดินทางของ {name}</h2>
          <PortraitTicket width={cardWidth} type={type} name={name} uid={uid} />
        </div>
        <div className="mt-4">
          <div className="flex flex-row justify-center">
            <div className="flex flex-col items-center justify-between w-10/12 p-5 sm:w-1/2 md:w-4/12 md:p-6 bg-white shadow-lg rounded-3xl">
              <div className="pb-4 text-lg font-semibold md:pb-5">
                <p className="text-base text-center text-pink-900">ลงทะเบียนเข้าร่วมงาน</p>
                <p className="text-base text-center text-pink-900">เพื่อรับการ์ดของคุณ</p>
              </div>
              <Link href="/register">
                <motion.a
                  whileHover={{ scale: 1.1 }}
                  className="text-xl font-thin px-16 rounded-full py-3"
                  style={{ background: "linear-gradient(267.68deg, #A1677D 4.3%, #EFBB8B 94.12%)" }}
                >
                  <span className="text-white">ลงทะเบียน</span>
                </motion.a>
              </Link>
            </div>
          </div>
        </div>
      </AdaptiveBg>
    </>
  )
}

export const getStaticProps: GetStaticProps<ticketProps> = async ({ params }) => {
  const uid = params?.uid?.toString() || null

  if (uid) {
    const ticketData = await getTicketData(uid)

    return {
      props: {
        name: ticketData?.name ?? null,
        uid: ticketData?.uid ?? null,
        type: ticketData?.type ?? null,
      },
      revalidate: 1000,
    }
  }

  return {
    props: {
      name: null,
      uid: null,
      type: null,
    },
    revalidate: 5,
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: "blocking",
  }
}

export default TicketPage
