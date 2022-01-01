import { gameDialogue } from "@map/gameMap"
import { useWindowDimensions } from "@utils/useWindowDimensions"
import classNames from "classnames"
import { AnimatePresence, motion } from "framer-motion"
import { NextPage } from "next"
import { FC, useEffect, useRef, useState } from "react"

const GameBg: FC<{ scene: string; key: number }> = ({ children, scene, key }) => {
  const primary = { background: `url('/images/backgrounds/${scene}.jpg')`, height: "1224px" }
  const secondary = { background: `url('/images/backgrounds/${scene}-mobile.jpg')`, height: "926px" }
  const mobile = { background: `url('/images/backgrounds/${scene}-mobile-default.jpg')`, height: "926px" }

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
      key={key}
      style={{
        background: primary.background,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: primary.height,
        backgroundPosition: "center",
      }}
      className={classNames("overflow-x-hidden min-h-screen pb-20 text-white py-2")}
    >
      {children}
    </motion.div>
  )
}

const maxPage = gameDialogue.length - 1

const Game: NextPage = () => {
  const [page, setPage] = useState(0)

  return <AnimatePresence></AnimatePresence>
}

export default Game
