import {
  BookOpenIcon,
  FlagIcon,
  HomeIcon,
  InformationCircleIcon,
  MapIcon,
  MenuIcon,
  PuzzleIcon,
  VideoCameraIcon,
} from "@heroicons/react/outline"
import classNames from "classnames"
import { motion } from "framer-motion"
import Link from "next/link"
import { useRouter } from "next/router"
import { FC, RefObject, useEffect, useRef, useState } from "react"
import classnames from "classnames"
import { HamburgerButton } from "./Hamburger"
import { OPHHorizontalLogo } from "@vectors/OPHHorizontalLogo"
import { Korchor } from "@vectors/Korchor"

const useDetectOuside = (
  ref: RefObject<HTMLDivElement>,
  buttonRef: RefObject<HTMLButtonElement>,
  dep: boolean,
  callback: () => void
) => {
  useEffect(() => {
    function handleClickOutside(event: any) {
      if (ref.current && !ref.current.contains(event.target) && !buttonRef.current?.contains(event.target) && dep) {
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

export const Nav: FC<{ theme?: "dark" | "light" }> = ({ theme = "light" }) => {
  const [reveal, setReveal] = useState(false)
  const panel = useRef(null)
  const buttonRef = useRef(null)
  const { pathname } = useRouter()

  useEffect(() => {
    setReveal(false)
  }, [pathname])

  useDetectOuside(panel, buttonRef, reveal, () => {
    setReveal(false)
  })

  const getClass = (expected: string) => {
    if (pathname === expected) {
      return "border-l-4 border-[#ECCB97] bg-[#F5FEFF] bg-opacity-[33%]"
    } else {
      return "border-l-4 border-transparent"
    }
  }

  return (
    <>
      <header
        className={classnames(
          "antialiased flex sticky z-50 top-0 left-0 py-2 px-8 w-full text-white border-b border-white border-opacity-20 backdrop-blur-lg font-display",
          theme === "dark" ? "navbar-bg-dark" : "navbar-bg"
        )}
      >
        <div className="flex justify-between items-center mx-auto w-full max-w-6xl">
          <Link href="/" passHref>
            <div className="flex space-x-2 cursor-pointer flex-shrink-0">
              <img alt="Logo" width={60} height={40} src="/images/logos/openhouse.png" />
              <div className="flex flex-col justify-center">
                <p className="text-sm sm:text-base font-bold">
                  TRIAM UDOM
                  <p className="leading-[10px]">ONLINE OPEN HOUSE 2022</p>
                </p>
              </div>
            </div>
          </Link>
          <nav role="navigation" className="hidden md:flex items-center justify-evenly w-full max-w-2xl ml-4">
            <Link href="/" passHref>
              <a className="font-light hover:border-white border-b border-transparent flex-shrink-0">หน้าแรก</a>
            </Link>
            <Link href="/programmes" passHref>
              <a className="font-light hover:border-white border-b border-transparent flex-shrink-0">สายการเรียน</a>
            </Link>
            <Link href="/clubs" passHref>
              <a className="font-light hover:border-white border-b border-transparent flex-shrink-0">ชมรม</a>
            </Link>
            <Link href="/videos" passHref>
              <a className="font-light hover:border-white border-b border-transparent flex-shrink-0">วิดีโอ</a>
            </Link>
            <Link href="/articles" passHref>
              <a className="font-light hover:border-white border-b border-transparent flex-shrink-0">บทความ</a>
            </Link>
            <Link href="/admission" passHref>
              <a className="font-light hover:border-white border-b border-transparent flex-shrink-0">การสอบเข้า</a>
            </Link>
          </nav>
          {/* <button
            ref={buttonRef}
            aria-label="Mobile Menu"
            onClick={() => {
              setReveal(!reveal)
            }}
          >
            <MenuIcon className="block md:hidden text-white w-8 h-8 cursor-pointer" />
          </button> */}
          <HamburgerButton
            ref={buttonRef}
            reveal={reveal}
            toggle={() => {
              setReveal(!reveal)
            }}
          />
        </div>
      </header>
      <motion.nav
        ref={panel}
        animate={reveal ? "open" : "close"}
        variants={variants}
        className="flex md:none flex-col items-start right-full fixed top-0 color-mobile-nav backdrop-blur-lg min-w-[295px] h-full z-[99] py-4"
      >
        <Link href="/" passHref>
          <a className="mb-4 px-4">
            <OPHHorizontalLogo />
          </a>
        </Link>
        <div className="flex flex-col space-y-4 w-full text-white font-display">
          <>
            <Link href="/" passHref>
              <a className={classNames(getClass("/"), "flex flex-row items-center space-x-4 pl-4 py-2 pr-8")}>
                <HomeIcon className="text-white w-8 h-8" />
                <span>หน้าแรก</span>
              </a>
            </Link>
            <Link href="/programmes" passHref>
              <a className={classNames(getClass("/programmes"), "flex flex-row items-center space-x-4 pl-4 py-2 pr-8")}>
                <FlagIcon className="text-white w-8 h-8" />
                <span>สายการเรียน</span>
              </a>
            </Link>
            <Link href="/clubs" passHref>
              <a className={classNames(getClass("/clubs"), "flex flex-row items-center space-x-4 pl-4 py-2 pr-8")}>
                <PuzzleIcon className="text-white w-8 h-8" />
                <span>ชมรม</span>
              </a>
            </Link>
            <Link href="/videos" passHref>
              <a className={classNames(getClass("/videos"), "flex flex-row items-center space-x-4 pl-4 py-2 pr-8")}>
                <VideoCameraIcon className="text-white w-8 h-8" />
                <span>วิดีโอ</span>
              </a>
            </Link>
            <Link href="/articles" passHref>
              <a className={classNames(getClass("/articles"), "flex flex-row items-center space-x-4 pl-4 py-2 pr-8")}>
                <BookOpenIcon className="text-white w-8 h-8" />
                <span>บทความ</span>
              </a>
            </Link>
            <Link href="/admission" passHref>
              <a className={classNames(getClass("/admission"), "flex flex-row items-center space-x-4 pl-4 py-2 pr-8")}>
                <InformationCircleIcon className="text-white w-8 h-8" />
                <span>การสอบเข้า</span>
              </a>
            </Link>
            <Link href="/directions" passHref>
              <a className={classNames(getClass("/directions"), "flex flex-row items-center space-x-4 pl-4 py-2 pr-8")}>
                <MapIcon className="text-white w-8 h-8" />
                <span>การเดินทางมาโรงเรียนเตรียมฯ</span>
              </a>
            </Link>
            <Link href="/contact" passHref>
              <a className={classNames(getClass("/contact"), "flex flex-row items-center space-x-4 pl-4 py-2 pr-8")}>
                <Korchor className="text-white w-8 h-8" />
                <span>ติดต่อผู้จัดงาน</span>
              </a>
            </Link>
          </>
        </div>
      </motion.nav>
    </>
  )
}
