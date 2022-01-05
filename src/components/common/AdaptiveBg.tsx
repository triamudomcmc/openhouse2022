import { useWindowDimensions } from "@utils/useWindowDimensions"
import { FC, useEffect, useRef, useState } from "react"
import classnames from "classnames"
import Image from "next/image"

export const AdaptiveBg: FC<{
  primary: { background: string; height: string; expandTo?: string }
  secondary: { background: string; height: string }
  mobile: { background: string; height: string }
  classname?: string
  blend?: boolean
  element?: "main" | "section" | "article"
}> = ({ children, primary, secondary, mobile, classname, element }) => {
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

  const [source, setSource] = useState(primary)

  useEffect(() => {
    if (width > 0) {
      if (width > 640) {
        setBg(
          <div
            style={{ minHeight: primary.height, height: primary.expandTo ? primary.expandTo : "initial" }}
            className="absolute top-0 right-0 h-full w-full z-[-1]"
          >
            <Image
              alt="background image"
              src={primary.background}
              layout={"fill"}
              objectFit={"cover"}
              objectPosition={"center"}
              priority={true}
            />
          </div>
        )
        setSource(primary)
      } else {
        if (width > 428) {
          setBg(
            <div style={{ minHeight: secondary.height }} className="absolute top-0 right-0 h-full w-full z-[-1]">
              <Image
                alt="background image"
                src={secondary.background}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
                priority={true}
              />
            </div>
          )
          setSource(secondary)
        } else {
          setBg(
            <div style={{ minHeight: mobile.height }} className="absolute top-0 right-0 h-full w-full z-[-1]">
              <Image
                alt="background image"
                src={mobile.background}
                layout={"fill"}
                objectFit={"cover"}
                objectPosition={"center"}
                priority={true}
              />
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

  const getProps = () => {
    return {
      style: {
        minHeight: source.height,
      },
      className: classnames("relative overflow-x-hidden min-h-screen pb-20 text-white py-2", classname),
    }
  }

  const getElement = () => {
    if (element === "main")
      return (
        <main {...getProps()}>
          {bg}
          {children}
        </main>
      )
    else if (element === "article")
      return (
        <article {...getProps()}>
          {bg}
          {children}
        </article>
      )
    else if (element === "section")
      return (
        <section {...getProps()}>
          {" "}
          {bg}
          {children}
        </section>
      )
    else
      return (
        <div {...getProps()}>
          {" "}
          {bg}
          {children}
        </div>
      )
  }

  return <>{getElement()}</>
}
