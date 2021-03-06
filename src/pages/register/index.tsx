import Link from "next/link"
import { useAuth } from "@lib/auth"
import { useEffect, useState } from "react"
import { TUCMCLogo } from "@components/common/TUCMCLogo"
import { AllMethods } from "@components/register/AllMethods"
import { EmailForm } from "@components/register/EmailForm"
import { AdaptiveBg } from "@components/common/AdaptiveBg"
import Router from "next/router"
export type TPages = "all" | "email"

const InApp = require("detect-inapp")

const Register = () => {
  const auth = useAuth()
  const [page, setPage] = useState<TPages>("all")

  const [blocked, setBlocked] = useState(false)

  useEffect(() => {
    const inapp = new InApp(navigator.userAgent || navigator.vendor)
    if (inapp.isInApp) {
      setBlocked(true)
    }
  }, [])

  useEffect(() => {
    const noAuth = auth?.user === null
    if (noAuth) {
    } else {
      Router.push("/stream")
    }
  }, [auth])

  // should be main
  return (
    <AdaptiveBg
      primary={{ background: "/images/backgrounds/register.jpg", height: "1024px" }}
      secondary={{ background: "/images/backgrounds/register-mobile.jpg", height: "926px" }}
      mobile={{ background: "/images/backgrounds/register-mobile-default.jpg", height: "926px" }}
      classname="relative py-2 w-full h-screen bg-gray-900"
      element="main"
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="pb-8">
          <p className="font-display text-3xl text-white text-center font-medium py-2">Register / ลงทะเบียน</p>
          {/* <p className="font-display text-white text-center">
            Or{" "}
            <Link passHref href="/login" passHref>
              <a className="text-red-400 hover:underline">login here</a>
            </Link>
          </p> */}
          {blocked && (
            <p className="font-display text-gray-200 text-center mt-4 leading-loose">
              หมายเหตุ: แนะนำให้ไปเปิดเว็บไซต์ใน browser ที่ไม่ใช่ภายใน Line, Instagram หรือ Messenger
              <br />
              หากเปิดใน browser เช่น Safari, Google Chrome จะสามารถล็อกอินได้ทุกวิธี
            </p>
          )}
        </div>

        {page === "all" ? (
          <AllMethods blocked={blocked} setPage={setPage} auth={auth} />
        ) : (
          <EmailForm auth={auth} setPage={setPage} />
        )}
        <TUCMCLogo className="mt-4" />
      </div>
    </AdaptiveBg>
  )
}

export default Register
