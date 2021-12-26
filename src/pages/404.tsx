import { TUCMCLogo } from "@components/common/TUCMCLogo"
import { motion } from "framer-motion"
import { NextPage } from "next"
import Link from "next/link"

const NotFound: NextPage = () => {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center color-clubs">
      <p className="font-display font-regular text-md text-white">404 | Not Found</p>
      <Link href="/">
        <motion.a
          className="px-8 py-2 rounded-full cursor-pointer inline-flex font-display text-white border border-white hover:bg-gray-200 hover:text-gray-900 transition-colors mt-4"
          whileHover={{ scale: 1.1 }}
        >
          กลับสู่หน้าแรก
        </motion.a>
      </Link>
    </div>
  )
}

export default NotFound
