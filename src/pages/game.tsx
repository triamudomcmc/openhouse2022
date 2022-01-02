import { ArrowCircleRightIcon, XIcon } from "@heroicons/react/outline"
import { gameDialogue } from "@map/gameMap"
import { useWindowDimensions } from "@utils/useWindowDimensions"
import { LogoWhite } from "@vectors/Logo"
import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"
import { NextPage } from "next"
import { Dispatch, FC, MouseEventHandler, SetStateAction, useEffect, useRef, useState } from "react"

const getBg = (scene: string, type: "primary" | "secondary" | "mobile") => {
  if (["black", "white"].some((s) => s === scene)) {
    if (scene === "black") {
      return "#081A35"
    } else if (scene === "white") {
      return "#fff"
    }
  } else {
    return `url('/images/backgrounds/${scene}${
      type === "mobile" ? "-mobile" : type === "secondary" ? "-mobile-default" : ""
    }.jpg')`
  }

  return ""
}

const GameBg: FC<{ scene: string; skey: string; onClick: MouseEventHandler<HTMLDivElement> }> = ({
  children,
  scene,
  skey,
  onClick,
}) => {
  const primary = { background: getBg(scene, "primary"), height: "1224px" }
  const secondary = { background: getBg(scene, "secondary"), height: "926px" }
  const mobile = { background: getBg(scene, "mobile"), height: "926px" }

  const { width } = useWindowDimensions()
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (ref.current) {
      if (width > 0) {
        if (width > 640) {
          ref.current.style.background = primary.background
          ref.current.style.backgroundPosition = "center"
          ref.current.style.backgroundSize = "cover"
          ref.current.style.backgroundRepeat = "no-repeat"
        } else {
          if (width > 428) {
            ref.current.style.background = secondary.background
            ref.current.style.backgroundPosition = "center"
            ref.current.style.backgroundSize = "cover"
            ref.current.style.backgroundRepeat = "no-repeat"
          } else {
            ref.current.style.background = mobile.background
            ref.current.style.backgroundPosition = "center"
            ref.current.style.backgroundSize = "cover"
            ref.current.style.backgroundRepeat = "no-repeat"
          }
        }
      }
    }
  }, [
    width,
    secondary.background,
    secondary.height,
    primary.background,
    primary.height,
    mobile.background,
    mobile.height,
  ])

  return (
    <motion.div
      key={skey}
      onClick={onClick}
      style={{
        background: primary.background,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={classNames(
        "relative flex font-game cursor-pointer font-medium flex-col space-y-12 items-center text-center justify-center text-lg px-[4rem] overflow-x-hidden min-h-screen pb-20 text-white"
      )}
    >
      {children}
    </motion.div>
  )
}

const Modal: FC<{ isOpen: boolean; setModal: Dispatch<SetStateAction<boolean>> }> = ({
  children,
  isOpen,
  setModal,
}) => {
  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div className="absolute top-1/2 left-1/2 -translate-x-1/2 z-[100] px-12 py-8 -translate-y-1/2 bg-white rounded-xl shadow-lg font-game">
              <button onClick={() => setModal(false)} className="absolute top-4 right-4">
                <XIcon className="text-gray-400 w-5 h-5" />
              </button>
              <div className="flex flex-col items-center justify-center text-center space-y-4">
                <div className="flex flex-col space-y-2">
                  <p className="text-lg text-pink-400">ข้ามเนื้อเรื่อง</p>
                  <p className="font-light text-gray-400 leading-tight">
                    ระบบจะทำการสุ่มตั๋วเดินทาง
                    <br />
                    แทนตั๋วที่จะได้รับจากการเล่นเกมต้อนรับสำเร็จ
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
                    onClick={() => console.log("hi!")}
                    className="font-light rounded-lg shadow-md bg-pink-400 text-white transition-colors hover:bg-pink-500 font-game px-4 py-2"
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

const maxPage = gameDialogue.length - 1

const Game: NextPage = () => {
  const [page, setPage] = useState(0)
  const [modalOpen, setModal] = useState(false)

  return (
    <Modal isOpen={modalOpen} setModal={setModal}>
      <AnimatePresence>
        <GameBg
          onClick={(e) => {
            e.stopPropagation() // stops the main modal from triggering
            if (modalOpen) return

            setPage(page + 1)
          }}
          scene={gameDialogue[page].scene}
          skey={`${gameDialogue[page].scene}${gameDialogue[page].type}${gameDialogue[page]?.text ?? "-"}`}
        >
          <div>
            <p className="whitespace-pre-line leading-loose">“{gameDialogue[page]?.text}”</p>
          </div>
          <div className="flex flex-col space-y-4 mt-20 md:mt-36">
            {gameDialogue[page].type === "opening" && (
              <p
                className="font-light text-sm cursor-pointer transition-opacity hover:opacity-100 opacity-90"
                onClick={(e) => {
                  e.stopPropagation() // stops the main div from triggering
                  if (modalOpen) return
                  setModal(true)
                }}
              >
                ข้ามเนื้อเรื่อง <ArrowCircleRightIcon className="inline text-white w-5 h-5" />
              </p>
            )}
            <p className="font-light text-sm text-gray-400 animate-pulse">กดที่หน้าจอเพื่อไปต่อ</p>
          </div>
          {["opening", "finale"].some((e) => e === gameDialogue[page].type) && (
            <LogoWhite className="absolute bottom-[3.5rem] md:bottom-[5rem] w-[174px]" />
          )}
        </GameBg>
      </AnimatePresence>
    </Modal>
  )
}

export default Game
