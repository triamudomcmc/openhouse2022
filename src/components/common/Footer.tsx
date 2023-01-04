import { FC } from "react"
import { Facebook } from "@vectors/icons/Facebook"
import { Twitter } from "@vectors/icons/Twitter"
import { Youtube } from "@vectors/icons/Youtube"
import { Instagram } from "@vectors/icons/Instagram"
import Link from "next/link"
import { motion } from "framer-motion"
import { Tiktok } from "@vectors/icons/Tiktok"
import KorChor from "@vectors/icons/korchor"
// import { IAuthContext, useAuth } from "@lib/auth"

import { useAuth } from "@lib/auth"
import { userAgent } from "next/server"

const getButton = (user, signout) => {
  if (!user) {
    return (
      <Link passHref href="/auth">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="inline-flex px-8 py-2 text-white rounded-full font-regular font-display footer-button"
        >
          ลงทะเบียน
        </motion.button>
      </Link>
    )
  } else {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={signout}
        className="inline-flex px-8 py-2 text-white rounded-full font-regular font-display footer-button"
      >
        ออกจากระบบ
      </motion.button>
    )
  }
}

export const Footer: FC<{ theme?: string }> = ({ theme }) => {
  // const auth = useAuth()
  const { user, signout } = useAuth()

  return (
    <footer className={`w-full px-8 pt-10 antialiased ${theme == "light" ? "bg-white" : "bg-blue-text"}`}>
      <div className="flex flex-col items-center justify-between w-full max-w-6xl px-0 mx-auto sm:flex-row sm:items-start sm:px-20">
        <div className="flex justify-center">
          <div className="space-y-5 text-center sm:text-left">
            <div className={`${theme == "light" ? "text-[#37498B]" : "text-white"} font-semibold font-sans`}>
              <p>TRIAM UDOM ONLINE</p>
              <p className="-mt-1">OPEN HOUSE 2023</p>
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
              <motion.a href="https://www.tiktok.com/@triamudom.oph" target="_blank" whileHover={{ scale: 1.05 }}>
                <Tiktok />
              </motion.a>
            </div>
            {getButton(user, signout)}
          </div>
        </div>
        <div
          className={`${
            theme == "light" ? "text-deep-turquoise" : "text-white"
          } flex flex-col sm:flex-row justify-between w-full max-w-md ml-0 mt-6 sm:mt-0 sm:ml-28`}
        >
          <div className="flex flex-col space-y-2 text-center sm:text-right font-display">
            <Link passHref href="/">
              <a className="hover:underline">หน้าแรก</a>
            </Link>
            {/* <Link passHref href="/records">
              <a className="hover:underline">รายการย้อนหลัง</a>
            </Link> */}
            {/* <Link passHref href="/programmes">
              <a className="hover:underline">สายการเรียน</a>
            </Link> */}
            <Link passHref href="/clubs">
              <a className="hover:underline">ชมรม</a>
            </Link>
            {user?.uid && (
              <Link passHref href="account/ticket">
                <a className="hover:underline">บัตรของคุณ</a>
              </Link>
            )}
          </div>
          <div className="flex flex-col mt-2 space-y-2 text-center sm:text-right sm:mt-0 font-display">
            {/* <Link passHref href="/map">
              <a className="hover:underline">แผนผัง</a>
            </Link> */}
            <Link passHref href="/admission">
              <a className="hover:underline">การสอบเข้า</a>
            </Link>
            {/* {user?.uid && (
              <Link passHref href="account/ticket">
                <a className="hover:underline">บัตรของคุณ</a>
              </Link>
            )} */}
            <Link passHref href="/directions">
              <a className="hover:underline">การเดินทาง</a>
            </Link>
            <Link passHref href="/contact">
              <a className="hover:underline">ติดต่อ</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 mt-10 border-t border-[#CBD5E0] border-opacity-30">
        <KorChor classname="h-4 lg:h-8" fill={`${theme == "light" ? "" : "#FDF1DB"}`} />
      </div>
    </footer>
  )
}
