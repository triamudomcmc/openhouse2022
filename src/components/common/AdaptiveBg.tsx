import { useWindowDimensions } from "@utils/useWindowDimensions"
import { FC, useEffect, useRef } from "react"
import classnames from "classnames"

export const AdaptiveBg: FC<{
  primary: { background: string; height: string }
  secondary: { background: string; height: string }
  mobile: { background: string; height: string }
  classname?: string
  element?: "main" | "section" | "article"
}> = ({ children, primary, secondary, mobile, classname, element }) => {
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

  const getProps = () => {
    return {
      ref: ref,
      style: {
        background: primary.background,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: primary.height,
        backgroundPosition: "center",
      },
      className: classnames("overflow-x-hidden min-h-screen pb-20 text-white py-2", classname),
    }
  }

  const getElement = () => {
    if (element === "main") return <main {...getProps()}>{children}</main>
    else if (element === "article") return <article {...getProps()}>{children}</article>
    else if (element === "section") return <section {...getProps()}>{children}</section>
    else return <div {...getProps()}>{children}</div>
  }

  return <>{getElement()}</>
}
