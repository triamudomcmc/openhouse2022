import Link from "next/link"
import { useAuth } from "@lib/auth"
import { useState } from "react"
import { TUCMCLogo } from "@components/common/TUCMCLogo"
import { AllMethods } from "@components/login/AllMethods"
import { EmailForm } from "@components/register/EmailForm"
import { AdaptiveBg } from "@components/common/AdaptiveBg"

export type TPages = "all" | "email"

const Login = () => {
  const auth = useAuth()
  const [page, setPage] = useState<TPages>("all")

  // should be main
  return (
    <AdaptiveBg
      primary={{ background: "url('/images/backgrounds/register.jpg')", height: "1024px" }}
      secondary={{ background: "url('/images/backgrounds/register-mobile.jpg')", height: "926px" }}
      mobile={{ background: "url('/images/backgrounds/register-mobile-default.jpg')", height: "926px" }}
      classname="relative py-2 w-full h-screen bg-gray-900"
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="pb-8">
          <p className="font-display text-3xl text-white text-center font-medium py-2">Login / เข้าสู่ระบบ</p>
        </div>

        {page === "all" ? <AllMethods setPage={setPage} auth={auth} /> : <EmailForm auth={auth} setPage={setPage} />}
        <TUCMCLogo className="mt-4" />
      </div>
    </AdaptiveBg>
  )
}

export default Login
