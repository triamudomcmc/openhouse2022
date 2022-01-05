import {motion} from "framer-motion";
import Router from "next/router";
import Image from "next/image";

export const Programme = ({ name, thainame }: { name: string; thainame: string }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => {
        Router.push("/programmes/" + name)
      }}
      className="text-center cursor-pointer w-[100px] sm:w-[160px]"
    >
      <div className="w-[100px] sm:w-[160px]">
        <Image width={160} height={160} src={`/images/branches/${name}.png`} />
      </div>
      <h1 className="font-light">{thainame}</h1>
    </motion.div>
  )
}
