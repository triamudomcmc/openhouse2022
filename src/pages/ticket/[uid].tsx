import { AdaptiveBg } from "@components/common/AdaptiveBg"
import { PortraitTicket } from "@components/ticket/Portrait"
import { SquareTicket, TicketProps } from "@components/ticket/Square"
import { ClipboardCopyIcon } from "@heroicons/react/outline"
import { getTicketData } from "@lib/db-admin"
import { useToast } from "@lib/toast"
import { ticketTypes } from "@types"
import { SITE_URL } from "@utils/constants"
import { useWindowDimensions } from "@utils/useWindowDimensions"
import classNames from "classnames"
import { motion } from "framer-motion"
import { GetStaticPaths, GetStaticProps, NextPage } from "next"
import Link from "next/link"
import { useState } from "react"

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
        primary={{ background: "url('/images/backgrounds/ticket.jpg')", height: "1224px" }}
        secondary={{ background: "url('/images/backgrounds/ticket-mobile.jpg')", height: "926px" }}
        mobile={{ background: "url('/images/backgrounds/ticket-mobile-default.jpg')", height: "926px" }}
        classname="py-2"
      >
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
    <AdaptiveBg
      primary={{ background: "url('/images/backgrounds/ticket.jpg')", height: "1224px" }}
      secondary={{ background: "url('/images/backgrounds/ticket-mobile.jpg')", height: "926px" }}
      mobile={{ background: "url('/images/backgrounds/ticket-mobile-default.jpg')", height: "926px" }}
      classname="main-section"
    >
      <div className="flex flex-col items-center space-y-4">
        <h2 className="text-center text-white font-display text-4xl font-semibold">ตั๋วการเดินทางของ {name}</h2>
        <div className="flex flex-row mb-10 space-x-8">
          <div onClick={switchToSquare} className="flex flex-col items-center">
            <div
              className={classNames(
                isSquare ? "bg-pink-200" : "bg-white hover:bg-gray-100",
                "transition-colors flex flex-row items-center justify-center rounded-lg shadow-md cursor-pointer w-20 h-20 md:w-24 md:h-24"
              )}
            >
              <div
                className={classNames(
                  isSquare ? "border-white" : "border-gray-400",
                  "w-12 h-12 border-2 rounded md:w-16 md:h-16 md:rounded-lg"
                )}
              ></div>
            </div>
            <p className="mt-2 text-sm font-medium text-white md:text-base">Square</p>
          </div>
          <div onClick={switchToPortrait} className="flex flex-col items-center">
            <div
              className={classNames(
                !isSquare ? "bg-pink-200" : "bg-white hover:bg-gray-100",
                "transition-colors flex flex-row items-center justify-center rounded-lg shadow-md cursor-pointer w-20 h-20 md:w-24 md:h-24"
              )}
            >
              <div
                className={classNames(
                  !isSquare ? "border-white" : "border-gray-400",
                  "w-8 h-12 border-2 rounded-lg md:w-10 md:h-16"
                )}
              ></div>
            </div>
            <p className="mt-2 text-sm font-medium text-white md:text-base">Portrait</p>
          </div>
        </div>
        {isSquare ? (
          <SquareTicket width={cardWidth} type={type} name={name} uid={uid} />
        ) : (
          <PortraitTicket width={cardWidth} type={type} name={name} uid={uid} />
        )}
      </div>
    </AdaptiveBg>
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
