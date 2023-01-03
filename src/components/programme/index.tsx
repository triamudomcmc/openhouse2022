import { motion } from "framer-motion"
import Router from "next/router"
import Image from "next/image"
import Link from "next/link"

export const Programme = ({ name, thainame, width, height,className }: { name: string; thainame: string , width?: string, height?: string, className?:string}) => {
  return (
    <Link passHref href={`/programmes/${name}`}>
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={`text-center cursor-pointer ${className} `}
      >
        <div>
          <img alt={`${name}`} src={`/assets/programme/${name}.png`} className="mx-auto" />
        </div>
        <div className={`max-w-[150px] mx-auto `}>
          <h3 className="font-light bg-[#FFF4F4]">{thainame}</h3>
        </div>
      </motion.a>
    </Link>
  )
}
