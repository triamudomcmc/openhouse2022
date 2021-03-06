import { AdaptiveBg } from "@components/common/AdaptiveBg"
import { useAuth } from "@lib/auth"
import { useToast } from "@lib/toast"
import { NextPage } from "next"
import { useRouter } from "next/router"

const ConfirmMail: NextPage = () => {
  const auth = useAuth()
  const router = useRouter()
  const toast = useToast()
  const email = window.localStorage.getItem("emailForSignIn")
  if (!email) {
    router.push({
      pathname: "/register",
      query: {
        method: "email",
      },
    })
    toast?.setToast("โปรดกรอกอีเมลท่านอีกครั้ง")
  } else {
    auth?.signinWithEmail(email)
    toast?.setToast("ยืนยันอีเมลสำเร็จแล้ว")
    router.push("/register/onboard")
  }

  return (
    <AdaptiveBg
      primary={{ background: "/images/backgrounds/register.jpg", height: "1024px" }}
      secondary={{ background: "/images/backgrounds/register-mobile.jpg", height: "926px" }}
      mobile={{ background: "/images/backgrounds/register-mobile-default.jpg", height: "926px" }}
      classname="relative w-full min-h-screen"
      element="main"
    >
      <div className="flex flex-col font-display items-center h-screen justify-center py-8 px-4 space-y-4 text-center">
        <p className="text-xl">เข้าสู่ระบบด้วยอีเมลสำเร็จ</p>
      </div>
    </AdaptiveBg>
  )
}

export default ConfirmMail
