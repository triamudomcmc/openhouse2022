import { ArrowCircleRightIcon } from "@heroicons/react/outline"
import { gameDialogue } from "@map/gameMap"
import { useWindowDimensions } from "@utils/useWindowDimensions"
import { LogoWhite } from "@vectors/Logo"
import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"
import { NextPage } from "next"
import { FC, useEffect, useRef, useState } from "react"

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

const GameBg: FC<{ scene: string; skey: string }> = ({ children, scene, skey }) => {
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
      style={{
        background: primary.background,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={classNames(
        "relative flex font-game font-medium flex-col space-y-12 items-center text-center justify-center text-lg px-[4rem] overflow-x-hidden min-h-screen pb-20 text-white"
      )}
    >
      {children}
    </motion.div>
  )
}

const NewlineText: FC = ({ children }) => {
  const text = children as string
  const newText = text.split("\n").map((str, i) => <p key={i}>{str ?? <br />}</p>)

  return <>{newText}</>
}

const maxPage = gameDialogue.length - 1

const Game: NextPage = () => {
  const [page, setPage] = useState(0)

  return (
    <AnimatePresence>
      <GameBg
        scene={gameDialogue[page].scene}
        skey={`${gameDialogue[page].scene}${gameDialogue[page].type}${gameDialogue[page]?.text ?? "-"}`}
      >
        <div>
          {/* <NewlineText>{`“${gameDialogue[page]?.text}”`}</NewlineText> */}
          <p className="whitespace-pre-line">“{gameDialogue[page]?.text}”</p>
        </div>
        {gameDialogue[page].type === "opening" && (
          <>
            <p className="font-light mt-6 md:mt-12">
              กดเพื่อข้ามเนื้อเรื่อง <ArrowCircleRightIcon className="inline text-white w-5 h-5" />
            </p>
          </>
        )}
        {["opening", "finale"].some((e) => e === gameDialogue[page].type) && (
          <LogoWhite className="absolute bottom-[3.5rem] md:bottom-[5rem] w-[174px]" />
        )}
      </GameBg>
    </AnimatePresence>
  )
}

export default Game
