import { motion, AnimatePresence } from "framer-motion"
import { useState, FC } from "react"
import { InformationCircleIcon } from "@heroicons/react/outline"

const TooltipHover: FC<{
  // width: string
  // height: string
  text: string
  className?: string
}> = ({ text, className }) => {
  const [isHover, setHover] = useState(false)
  return (
    <div>
      <AnimatePresence>{isHover && <Tooltip className={className} text={text} />}</AnimatePresence>
      <motion.h2 onHoverStart={() => setHover(true)} onHoverEnd={() => setHover(false)} whileHover={{ scale: 1.05 }}>
        <InformationCircleIcon className="w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] ml-[12px] lg:ml-[25px] my-auto text-orange" />
      </motion.h2>
    </div>
  )
}

// export const TooltipClick : FC<{

//   // width: string
//   // height: string
//   text: string
//   className?: string

// }> = ({ text, className }) => {

// return (
//   <div>
//     <button onClick={<Tooltip text={text}/>}>
//       <InformationCircleIcon className='w-[20px] h-[20px] lg:w-[30px] lg:h-[30px] ml-[12px] lg:ml-[25px] my-auto text-orange' />
//     </button>
//   </div>
// );
// }

const Tooltip: FC<{
  // width: string
  // height: string
  text: string
  className?: string
}> = ({ text, className }) => {
  return (
    <motion.div
      className={`${className} border border-1 rounded-[8px] lg:rounded-[16px] p-[5px] lg:p-[10px] absolute`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      //   style={{
      //     border: "1px solid",
      //     display: "inline",
      //     borderRadius: "16px",
      //     padding: "10px",
      //     position: "absolute",

      //     // top: "10px",
      //     // right: "20px"
      //   }}
    >
      <p>{text}</p>
    </motion.div>
  )
}

export default TooltipHover
