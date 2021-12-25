import {useWindowDimensions} from "@utils/useWindowDimensions";
import {useEffect, useRef} from "react";
import classnames from "classnames";

export const AdaptiveBg = ({
                             children,
                             primary,
                             secondary,
                             mobile,
                             classname
                           }: { children: any, primary: { background: string, height: string }, secondary: { background: string, height: string }, mobile: { background: string, height: string }, classname?: string }) => {

  const {width} = useWindowDimensions()
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
  }, [width])

  return (

    <div
      ref={ref}
      style={{
        background: primary.background,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        minHeight: primary.height,
        backgroundPosition: "center",
      }}
      className={classnames("overflow-x-hidden min-h-screen pb-20 text-white py-2", classname)}
    >
      {children}
    </div>
  )
}
