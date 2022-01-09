import { XIcon } from "@heroicons/react/outline"
import { AnimatePresence, motion } from "framer-motion"
import { Dispatch, FC, SetStateAction } from "react"

export const Modal: FC<{ isOpen: boolean; setModal: Dispatch<SetStateAction<boolean>>; onDone: () => void }> = ({
  children,
  isOpen,
  setModal,
  onDone,
}) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-[100] px-12 py-8 w-3/4 sm:w-[350px] -translate-y-1/2 bg-white rounded-xl shadow-lg font-game">
              <button onClick={() => setModal(false)} className="absolute top-4 right-4">
                <XIcon className="text-gray-400 w-5 h-5" />
              </button>
              <div className="flex flex-col items-center justify-center w-full text-center space-y-4">
                <div className="flex flex-col space-y-2">
                  <p className="text-lg text-[#6670AD]">ข้ามเนื้อเรื่อง</p>
                  <p className="font-light text-gray-400 leading-tight">
                    ระบบจะทำการสุ่มบัตรเดินทาง
                    <br />
                    แทนบัตรเดินทางที่จะได้รับจากการเล่นเกมต้อนรับสำเร็จ
                  </p>
                </div>
                <div className="flex space-x-4 mt-4">
                  <button
                    onClick={() => setModal(false)}
                    className="font-light rounded-lg border border-gray-100 shadow-md bg-white text-gray-400 font-game px-4 py-2 transition-colors hover:bg-gray-100 hover:text-gray-500"
                  >
                    ย้อนกลับ
                  </button>
                  <button
                    onClick={() => onDone()}
                    className="font-light rounded-lg shadow-md bg-[#6670AD] text-white transition-colors hover:bg-[#50588b] font-game px-4 py-2"
                  >
                    ตกลง
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {isOpen ? (
          <motion.div
            className={"w-full h-full blur-sm bg-opacity-40 bg-black"}
            onClick={() => {
              setModal(false)
            }}
          >
            {children}
          </motion.div>
        ) : (
          <>{children}</>
        )}
      </AnimatePresence>
    </>
  )
}
