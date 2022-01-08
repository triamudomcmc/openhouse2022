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
import {Footer} from "@components/common/Footer";
import {Facebook} from "@vectors/Facebook";
import {Instagram} from "@vectors/Instagram";
import {Twitter} from "@vectors/Twitter";
import {Youtube} from "@vectors/Youtube";
import {TUCMCLogo} from "@components/common/TUCMCLogo";

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
      </AdaptiveBg>
      <div className="relative font-display">
        <div className="flex w-full justify-center absolute top-[-90px]">
          <div className="mt-4 w-full">
            <div className="flex flex-row justify-center">
              <div className="flex flex-col items-center justify-between w-10/12 p-5 sm:w-1/2 md:w-4/12 md:p-6 bg-white shadow-xl rounded-3xl">
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
        </div>
        <footer className="antialiased bg-white w-full pt-[150px] px-8">
          <div className="flex flex-col sm:flex-row sm:items-start items-center px-0 sm:px-20 justify-between max-w-6xl mx-auto w-full">
            <div className="flex justify-center">
              <div className="sm:text-left text-center space-y-5">
                <div className="text-[#1D3662] font-semibold font-sans">
                  <p>TRIAM UDOM ONLINE</p>
                  <p className="-mt-1">OPEN HOUSE 2022</p>
                </div>
                <div className="flex space-x-3">
                  <motion.a
                    href="https://www.facebook.com/TriamUdomOPH"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Facebook />
                  </motion.a>
                  <motion.a
                    href="https://www.instagram.com/triamudom.oph/"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Instagram />
                  </motion.a>
                  <motion.a
                    href="https://twitter.com/triamudomoph"
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Twitter />
                  </motion.a>
                  <motion.a
                    href="https://www.youtube.com/c/TriamUdomOpenHouse"
                    target="_blank"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Youtube />
                  </motion.a>
                </div>
              </div>
            </div>
            <div className="text-[#6B7280] flex flex-col sm:flex-row justify-between w-full max-w-md ml-0 mt-6 sm:mt-0 sm:ml-28">
              <div className="flex flex-col space-y-2 text-center sm:text-right font-display">
                <Link href="/">
                  <a className="hover:underline">หน้าแรก</a>
                </Link>
                <Link href="/live">
                  <a className="hover:underline">รายการสด</a>
                </Link>
                <Link href="/articles">
                  <a className="hover:underline">บทความ</a>
                </Link>
                <Link href="/videos">
                  <a className="hover:underline">คลิปวิดีโอ</a>
                </Link>
                <Link href="/clubs">
                  <a className="hover:underline">ชมรม</a>
                </Link>
              </div>
              <div className="flex flex-col space-y-2 text-center sm:text-right mt-2 sm:mt-0 font-display">
                <Link href="/programmes">
                  <a className="hover:underline">สายการเรียน</a>
                </Link>
                <Link href="/admission">
                  <a className="hover:underline">การสอบเข้า</a>
                </Link>
                <Link href="/ticket">
                  <a className="hover:underline">การ์ดของคุณ</a>
                </Link>
                <Link href="/admission">
                  <a className="hover:underline">การเดินทางมาโรงเรียนเตรียมฯ</a>
                </Link>
                <Link href="/contact">
                  <a className="hover:underline">ติดต่อผู้จัดงาน</a>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center border-t border-gray-400 border-opacity-30 py-5 mt-10">
            <TUCMCLogo className="h-6 sm:h-8" color="#777" />
          </div>
        </footer>
      </div>
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
