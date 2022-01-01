import { gameDialogue } from "@map/gameMap"
import { useWindowDimensions } from "@utils/useWindowDimensions"
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

const GameBg: FC<{ scene: string; skey: number }> = ({ children, scene, skey }) => {
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
          ref.current.style.minHeight = primary.height
          ref.current.style.backgroundPosition = "center"
          ref.current.style.backgroundSize = "cover"
          ref.current.style.backgroundRepeat = "no-repeat"
        } else {
          if (width > 428) {
            ref.current.style.background = secondary.background
            ref.current.style.minHeight = secondary.height
            ref.current.style.backgroundPosition = "center"
            ref.current.style.backgroundSize = "cover"
            ref.current.style.backgroundRepeat = "no-repeat"
          } else {
            ref.current.style.background = mobile.background
            ref.current.style.minHeight = mobile.height
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
        minHeight: primary.height,
        backgroundPosition: "center",
      }}
      className={classNames(
        "flex font-game flex-col items-center justify-center text-lg px-[4rem] overflow-x-hidden min-h-screen pb-20 text-white"
      )}
    >
      {children}
    </motion.div>
  )
}

const maxPage = gameDialogue.length - 1

const Game: NextPage = () => {
  const [page, setPage] = useState(0)

  return (
    <AnimatePresence>
      <GameBg scene={gameDialogue[page].scene} skey={page}>
        <p>{gameDialogue[page]?.text}</p>
      </GameBg>
    </AnimatePresence>
  )
}

export default Game
