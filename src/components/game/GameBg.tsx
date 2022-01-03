import { useWindowDimensions } from "@utils/useWindowDimensions"
import classNames from "classnames"
import { motion } from "framer-motion"
import { FC, MouseEventHandler, useEffect, useRef } from "react"

const getBg = (scene: string, type: "primary" | "secondary" | "mobile") => {
  if (["black", "white"].includes(scene)) {
    if (scene === "black") {
      return "#081A35"
    } else if (scene === "white") {
      return "#fff"
    }
  } else {
    return `url('/images/backgrounds/${scene.replace("-up", "")}${
      type === "mobile" ? "-mobile" : type === "secondary" ? "-mobile-default" : ""
    }.jpg')`
  }

  return ""
}

export const GameBg: FC<{
  scene: string
  skey: string
  onClick: MouseEventHandler<HTMLDivElement>
  className?: string
}> = ({ children, scene, skey, onClick, className }) => {
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
    <motion.main
      key={skey}
      onClick={onClick}
      style={{
        background: primary.background,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={classNames(
        "relative flex font-game font-medium flex-col items-center text-center justify-center text-lg px-4 md:px-[4rem] overflow-x-hidden min-h-screen pb-20 text-white",
        className
      )}
    >
      {children}
    </motion.main>
  )
}
