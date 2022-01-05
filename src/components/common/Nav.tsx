import { MenuIcon } from "@heroicons/react/outline"
import classNames from "classnames"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import {FC, useEffect, useRef, useState} from "react"
import NavButton from "./NavButton"
import classnames from "classnames";

const DetectOuside = (ref: any, dep: boolean, callback: () => void) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target) && dep) {
        callback()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [ref, dep, callback])
}

const variants = {
  open: {
    x: "100%",
    opacity: 1,
    transition: {
      type: "tween",
      stiffness: 100,
    },
  },
  close: {
    x: 0,
    transition: {
      type: "tween",
      stiffness: 100,
    },
  },
}

export const Nav: FC<{theme?: "dark" | "light"}> = ({theme = "light"}) => {
  const [reveal, setReveal] = useState(false)
  const panel = useRef(null)
  const { pathname } = useRouter()

  useEffect(() => {
    setReveal(false)
  }, [pathname])

  DetectOuside(panel, reveal, () => {
    setReveal(false)
  })

  const getClass = (expected: string, part: "ul" | "color") => {
    if (pathname == expected) {
      switch (part) {
        case "ul":
          return "border-b-2 border-red-400 sm:border-white"
        case "color":
          return "text-red-400"
      }
    } else {
      switch (part) {
        case "ul":
          return ""
        case "color":
          return "text-white"
      }
    }
  }

  return (
    <>
      <header className={classnames("flex absolute z-50 top-0 left-0 py-2 px-8 mb-16 w-full text-white border-b border-white border-opacity-20 backdrop-blur-lg font-display", theme === "dark" ? "navbar-bg-dark" : "navbar-bg")}>
        <div className="flex justify-between items-center mx-auto w-full max-w-6xl">
          <Link href="/">
            <div className="flex space-x-2 cursor-pointer flex-shrink-0">
              <img src="/images/logos/openhouse.png" />
              <div className="flex flex-col justify-center">
                <h1 className="text-sm sm:text-base font-bold">
                  TRIAM UDOM
                  <p className="leading-[10px]">ONLINE OPEN HOUSE 2022</p>
                </h1>
              </div>
            </div>
          </Link>
          <nav role="navigation" className="hidden md:flex items-center justify-evenly w-full max-w-2xl ml-4">
            <Link href="/">
              <a className="font-light hover:border-white border-b border-transparent flex-shrink-0">หน้าแรก</a>
            </Link>
            <Link href="/programmes">
              <a className="font-light hover:border-white border-b border-transparent flex-shrink-0">สายการเรียน</a>
            </Link>
            <Link href="/clubs">
              <a className="font-light hover:border-white border-b border-transparent flex-shrink-0">ชมรม</a>
            </Link>
            <Link href="/videos">
              <a className="font-light hover:border-white border-b border-transparent flex-shrink-0">วิดีโอ</a>
            </Link>
            <Link href="/articles">
              <a className="font-light hover:border-white border-b border-transparent flex-shrink-0">บทความ</a>
            </Link>
            <Link href="/info">
              <a className="font-light hover:border-white border-b border-transparent flex-shrink-0">ข้อมูลเพิ่มเติม</a>
            </Link>
          </nav>
          <button
            aria-label="Mobile Menu"
            onClick={() => {
              setReveal(!reveal)
            }}
          >
            <MenuIcon className="block md:hidden text-white w-8 h-8 cursor-pointer" />
          </button>
          {/* <NavButton
            toggle={() => {
              setReveal(!reveal)
            }}
          /> */}
        </div>
      </header>
      <motion.nav
        ref={panel}
        animate={reveal ? "open" : "close"}
        variants={variants}
        className="flex md:none flex-col items-center right-full fixed top-0 bg-black h-full w-48 z-[99] py-4"
      >
        {/* <button onClick={() => setReveal(false)} className="mb-16">
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M8.58579 8.58579C9.36683 7.80474 10.6332 7.80474 11.4142 8.58579L20 17.1716L28.5858 8.58579C29.3668 7.80474 30.6332 7.80474 31.4142 8.58579C32.1953 9.36683 32.1953 10.6332 31.4142 11.4142L22.8284 20L31.4142 28.5858C32.1953 29.3668 32.1953 30.6332 31.4142 31.4142C30.6332 32.1953 29.3668 32.1953 28.5858 31.4142L20 22.8284L11.4142 31.4142C10.6332 32.1953 9.36683 32.1953 8.58579 31.4142C7.80474 30.6332 7.80474 29.3668 8.58579 28.5858L17.1716 20L8.58579 11.4142C7.80474 10.6332 7.80474 9.36683 8.58579 8.58579Z"
              fill="white"
            />
          </svg>
        </button> */}
        <Link href="/">
          <div className="cursor-pointer flex flex-col space-y-2 mb-12 mt-4">
            <img src="/images/logos/openhouse.png" />
            <p className="text-center text-white font-display font-medium">TUOPH</p>
          </div>
        </Link>
        <div className="flex flex-col space-y-4">
          <>
            <Link href="/" passHref>
              <div className="flex flex-col items-center">
                <svg
                  className={classNames("fill-current", getClass("/", "color"))}
                  width="30"
                  height="31"
                  viewBox="0 0 30 31"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M16.3196 1.27874C15.5909 0.549991 14.4093 0.549991 13.6806 1.27874L0.618093 14.3412C-0.110653 15.07 -0.110653 16.2515 0.618093 16.9803C1.34684 17.709 2.52837 17.709 3.25712 16.9803L3.80368 16.4337V28.7232C3.80368 29.7539 4.63914 30.5893 5.66975 30.5893H9.40189C10.4325 30.5893 11.268 29.7539 11.268 28.7232V24.9911C11.268 23.9605 12.1034 23.125 13.134 23.125H16.8662C17.8968 23.125 18.7322 23.9605 18.7322 24.9911V28.7232C18.7322 29.7539 19.5677 30.5893 20.5983 30.5893H24.3305C25.3611 30.5893 26.1965 29.7539 26.1965 28.7232V16.4337L26.7431 16.9803C27.4718 17.709 28.6534 17.709 29.3821 16.9803C30.1109 16.2515 30.1109 15.07 29.3821 14.3412L16.3196 1.27874Z" />
                </svg>
                <p className={classNames("mt-2 font-semibold text-sm", getClass("/", "color"), getClass("/", "ul"))}>
                  Home
                </p>
              </div>
            </Link>
            <Link href="/about" passHref>
              <div className="flex flex-col items-center">
                <svg
                  className={classNames("fill-current", getClass("/about", "color"))}
                  width="38"
                  height="38"
                  viewBox="0 0 38 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M24.5982 11.8394C24.5982 14.9312 22.0918 17.4376 19 17.4376C15.9082 17.4376 13.4018 14.9312 13.4018 11.8394C13.4018 8.74762 15.9082 6.24121 19 6.24121C22.0918 6.24121 24.5982 8.74762 24.5982 11.8394Z" />
                  <path d="M33.9285 15.5716C33.9285 17.6328 32.2576 19.3037 30.1964 19.3037C28.1352 19.3037 26.4643 17.6328 26.4643 15.5716C26.4643 13.5104 28.1352 11.8394 30.1964 11.8394C32.2576 11.8394 33.9285 13.5104 33.9285 15.5716Z" />
                  <path d="M26.4643 28.6341C26.4643 24.5117 23.1224 21.1698 19 21.1698C14.8776 21.1698 11.5357 24.5117 11.5357 28.6341V34.2323H26.4643V28.6341Z" />
                  <path d="M11.5357 15.5716C11.5357 17.6328 9.86474 19.3037 7.80354 19.3037C5.74233 19.3037 4.07139 17.6328 4.07139 15.5716C4.07139 13.5104 5.74233 11.8394 7.80354 11.8394C9.86474 11.8394 11.5357 13.5104 11.5357 15.5716Z" />
                  <path d="M30.1964 34.2323V28.6341C30.1964 26.667 29.6891 24.8183 28.7982 23.2119C29.2451 23.097 29.7136 23.0359 30.1964 23.0359C33.2882 23.0359 35.7946 25.5423 35.7946 28.6341V34.2323H30.1964Z" />
                  <path d="M9.20171 23.2119C8.31082 24.8183 7.80354 26.667 7.80354 28.6341V34.2323H2.20532V28.6341C2.20532 25.5423 4.71173 23.0359 7.80354 23.0359C8.28631 23.0359 8.7548 23.097 9.20171 23.2119Z" />
                </svg>
                <p
                  className={classNames(
                    "mt-2 font-semibold text-sm",
                    getClass("/about", "color"),
                    getClass("/about", "ul")
                  )}
                >
                  About
                </p>
              </div>
            </Link>
          </>
        </div>
      </motion.nav>
    </>
  )
}
