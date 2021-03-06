import { Facebook } from "@vectors/Facebook"
import { Instagram } from "@vectors/Instagram"
import { Twitter } from "@vectors/Twitter"
import { Youtube } from "@vectors/Youtube"
import { TUCMCLogo } from "./TUCMCLogo"
import Link from "next/link"
import { motion } from "framer-motion"
import { IAuthContext, useAuth } from "@lib/auth"

const getButton = (auth: IAuthContext | null) => {
  const noAuth = auth?.user === null

  if (noAuth) {
    return (
      <Link passHref href="/register">
        <motion.button
          whileHover={{ scale: 1.1 }}
          style={{ background: "linear-gradient(97.19deg, #C898CC 0.83%, #666EAD 43.54%, #112D55 99.62%)" }}
          className="px-8 py-2 rounded-full inline-flex font-regular font-display text-white"
        >
          ลงทะเบียน
        </motion.button>
      </Link>
    )
  } else {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={() => auth?.signout()}
        style={{ background: "linear-gradient(97.19deg, #C898CC 0.83%, #666EAD 43.54%, #112D55 99.62%)" }}
        className="px-8 py-2 rounded-full inline-flex font-regular font-display text-white"
      >
        ออกจากระบบ
      </motion.button>
    )
  }
}

export const Footer = () => {
  const auth = useAuth()

  return (
    <footer className="antialiased bg-white w-full pt-10 px-8">
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
            {getButton(auth)}
          </div>
        </div>
        <div className="text-[#6B7280] flex flex-col sm:flex-row justify-between w-full max-w-md ml-0 mt-6 sm:mt-0 sm:ml-28">
          <div className="flex flex-col space-y-2 text-center sm:text-right font-display">
            <Link passHref href="/">
              <a className="hover:underline">หน้าแรก</a>
            </Link>
            <Link passHref href="/records">
              <a className="hover:underline">รายการย้อนหลัง</a>
            </Link>
            <Link passHref href="/articles">
              <a className="hover:underline">บทความ</a>
            </Link>
            <Link passHref href="/videos">
              <a className="hover:underline">คลิปวิดีโอ</a>
            </Link>
            <Link passHref href="/clubs">
              <a className="hover:underline">ชมรม</a>
            </Link>
          </div>
          <div className="flex flex-col space-y-2 text-center sm:text-right mt-2 sm:mt-0 font-display">
            <Link passHref href="/programmes">
              <a className="hover:underline">สายการเรียน</a>
            </Link>
            <Link passHref href="/admission">
              <a className="hover:underline">การสอบเข้า</a>
            </Link>
            {auth?.userData?.ticket && (
              <Link passHref href="/ticket">
                <a className="hover:underline">บัตรของคุณ</a>
              </Link>
            )}
            <Link passHref href="/directions">
              <a className="hover:underline">การเดินทางมาโรงเรียนเตรียมฯ</a>
            </Link>
            <Link passHref href="/contact">
              <a className="hover:underline">ติดต่อผู้จัดงาน</a>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center border-t border-gray-400 border-opacity-30 py-5 mt-10">
        <TUCMCLogo className="h-6 sm:h-8" color="#777" />
      </div>
    </footer>
  )
}
