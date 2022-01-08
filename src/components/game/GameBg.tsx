import { useWindowDimensions } from "@utils/useWindowDimensions"
import classNames from "classnames"
import { motion } from "framer-motion"
import { FC, KeyboardEventHandler, MouseEventHandler, useEffect, useRef, useState } from "react"
import Image from "next/image"

const getBg = (scene: string, type: "primary" | "secondary" | "mobile") => {
  if (["black", "white"].includes(scene)) {
    if (scene === "black") {
      return "#081A35"
    } else if (scene === "white") {
      return "#fff"
    }
  } else {
    return `/images/backgrounds/${scene.replace("-up", "")}${
      type === "mobile" ? "-mobile" : type === "secondary" ? "-mobile-default" : ""
    }.jpg`
  }

  return ""
}

export const GameBg: FC<{
  scene: string
  skey: string
  onClick: MouseEventHandler<HTMLDivElement>
  className?: string
  expandTo?: string
}> = ({ children, scene, skey, onClick, className, expandTo }) => {
  const primary = { background: getBg(scene, "primary"), height: "600px", expandTo: "100vh" }
  const secondary = { background: getBg(scene, "secondary"), height: "926px", expandTo: undefined }
  const mobile = { background: getBg(scene, "mobile"), height: "926px", expandTo: undefined }

  const { width } = useWindowDimensions()

  const [bg, setBg] = useState(
    <div
      style={{ minHeight: primary.height, height: primary.expandTo ? primary.expandTo : "initial" }}
      className="absolute top-0 right-0 h-full w-full z-[-1]"
    >
      <Image
        src={primary.background}
        layout={"fill"}
        objectFit={"cover"}
        objectPosition={"center"}
        priority={true}
        alt="background image"
      />
    </div>
  )

  const [source, setSource] = useState<any>(primary)

  useEffect(() => {
    if (width > 0) {
      if (width > 640) {
        setBg(
          <div
            style={{
              minHeight: primary.height,
              height: primary.expandTo ? primary.expandTo : "initial",
              background: primary.background.includes("/") ? "unset" : primary.background,
            }}
            className="absolute top-0 right-0 h-full w-full z-[-1]"
          >
            {primary.background.includes("/") && (
              <Image
                alt="background image"
                src={primary.background}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
                priority={true}
              />
            )}
          </div>
        )
        setSource(primary)
      } else {
        if (width > 428) {
          setBg(
            <div
              style={{
                minHeight: secondary.height,
                background: primary.background.includes("/") ? "unset" : primary.background,
              }}
              className="absolute top-0 right-0 h-full w-full z-[-1]"
            >
              {secondary.background.includes("/") && (
                <Image
                  alt="background image"
                  src={secondary.background}
                  layout={"fill"}
                  objectFit={"cover"}
                  objectPosition={"center"}
                  priority={true}
                />
              )}
            </div>
          )
          setSource(secondary)
        } else {
          setBg(
            <div
              style={{
                minHeight: mobile.height,
                background: primary.background.includes("/") ? "unset" : primary.background,
              }}
              className="absolute top-0 right-0 h-full w-full z-[-1]"
            >
              {mobile.background.includes("/") && (
                <Image
                  alt="background image"
                  src={mobile.background}
                  layout={"fill"}
                  objectFit={"cover"}
                  objectPosition={"center"}
                  priority={true}
                />
              )}
            </div>
          )
          setSource(mobile)
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
    <main
      key={skey}
      onClick={onClick}
      style={{
        minHeight: source.height,
        height: source.expandTo ? source.expandTo : "unset",
      }}
      className={classNames(
        "relative flex font-game font-medium flex-col items-center text-center justify-center text-lg px-4 md:px-[4rem] overflow-x-hidden min-h-screen pb-20 text-white",
        className
      )}
    >
      {bg}
      {children}
    </main>
  )
}
