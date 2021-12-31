import { Facebook } from "@vectors/Facebook"
import { Instagram } from "@vectors/Instagram"
import { Twitter } from "@vectors/Twitter"
import { Youtube } from "@vectors/Youtube"
import { TUCMCLogo } from "./TUCMCLogo"
import Link from "next/link"
import { motion } from "framer-motion"
import { useAuth } from "@lib/auth"

export const Footer = () => {
  const auth = useAuth()

  return (
    <footer className="bg-white w-full pt-10 px-8">
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
            {!auth?.user && (
              <motion.button
                style={{ background: "linear-gradient(97.19deg, #C898CC 0.83%, #666EAD 43.54%, #112D55 99.62%)" }}
                className="px-8 py-2 rounded-full inline-flex font-medium font-display text-white"
                whileHover={{ scale: 1.1 }}
              >
                เข้าสู่ระบบ
              </motion.button>
            )}
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
            <Link href="/mycard">
              <a className="hover:underline">การ์ดของคุณ</a>
            </Link>
            <Link href="/info">
              <a className="hover:underline">ข้อมูลเกี่ยวกับโรงเรียน</a>
            </Link>
            <Link href="/contact">
              <a className="hover:underline">ติดต่อ</a>
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
