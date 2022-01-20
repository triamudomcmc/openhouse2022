import { motion } from "framer-motion"
import Router from "next/router"
import Image from "next/image"
import Link from "next/link"

export const Programme = ({ name, thainame }: { name: string; thainame: string }) => {
  return (
    <Link passHref href={`/programmes/${name}`}>
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="text-center cursor-pointer w-[100px] sm:w-[160px]"
      >
        <div className="w-[100px] sm:w-[160px]">
          <Image width={160} height={160} alt={"name"} src={`/images/branches/${name}.png`} />
        </div>
        <h3 className="font-light">{thainame}</h3>
      </motion.a>
    </Link>
  )
}
